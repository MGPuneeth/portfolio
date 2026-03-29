import { useEffect, useRef, useState } from 'react';

/**
 * Custom typewriter hook — ref-based, no state-inside-state-updaters
 * @param {string[]} words - Array of words to cycle through
 * @param {number} speed - Typing speed (ms per char)
 * @param {number} pause - Pause duration at end of word (ms)
 */
export function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');

  // Use refs for mutable typewriter state — avoids putting them in effect deps
  const stateRef = useRef({ wordIndex: 0, isDeleting: false, text: '' });
  const frameRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const { wordIndex, isDeleting, text } = stateRef.current;
      const word = words[wordIndex % words.length];

      if (!isDeleting) {
        // Typing forward
        const next = word.slice(0, text.length + 1);
        stateRef.current.text = next;
        setDisplay(next);

        if (next === word) {
          // Finished typing — pause, then delete
          frameRef.current = setTimeout(() => {
            stateRef.current.isDeleting = true;
            frameRef.current = setTimeout(tick, speed / 2);
          }, pause);
        } else {
          frameRef.current = setTimeout(tick, speed);
        }
      } else {
        // Deleting
        const next = word.slice(0, text.length - 1);
        stateRef.current.text = next;
        setDisplay(next);

        if (next === '') {
          // Finished deleting — move to next word
          stateRef.current.isDeleting = false;
          stateRef.current.wordIndex += 1;
          frameRef.current = setTimeout(tick, speed);
        } else {
          frameRef.current = setTimeout(tick, speed / 2);
        }
      }
    };

    frameRef.current = setTimeout(tick, speed);
    return () => clearTimeout(frameRef.current);
  }, [words, speed, pause]); // Only depends on stable external inputs

  return display;
}

/**
 * Custom scroll spy hook — returns active section id
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
