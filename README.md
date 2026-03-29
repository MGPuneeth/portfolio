# 🌟 Portfolio Website — React + Tailwind CSS

A modern, dark-and-techy single-page portfolio built with **React**, **Tailwind CSS**, **Framer Motion**, and **tsParticles**.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ TODO Checklist — Before Going Live

Replace all placeholder values in **`src/data/portfolioData.js`**:

### 👤 Personal Info
- [ ] `personal.name` — Your full name
- [ ] `personal.initials` — Your initials (shows in navbar logo)
- [ ] `personal.university` — Your university name
- [ ] `personal.email` — Your email address
- [ ] `personal.avatar` — Set to `'/avatar.jpg'` after placing photo in `/public/`

### 📄 Resume
- [ ] Add your `resume.pdf` to the `/public/` folder
- [ ] Verify `personal.resumeUrl` points to `/resume.pdf`

### 🔗 Social Links
- [ ] `social.github`
- [ ] `social.linkedin`
- [ ] `social.leetcode`
- [ ] `social.codeforces`
- [ ] `social.instagram`

### 💼 Projects
- [ ] Replace all GitHub URLs (`github.com/YOUR_USERNAME/...`)
- [ ] Replace all Live Demo URLs
- [ ] Add project thumbnails to `src/assets/projects/` and update `thumbnail` field
- [ ] Update project descriptions as needed

### 🎓 Education
- [ ] `education[0].institution` — University name
- [ ] `education[0].cgpa` — Your CGPA
- [ ] `education[1].institution` — School name
- [ ] `education[1].board` — CBSE or State Board
- [ ] `education[1].percentage` — Your percentage

### 🏆 Achievements
- [ ] All achievement titles and descriptions (LeetCode rank, hackathon name, etc.)

### 📜 Certifications
- [ ] All certification titles, issuers, years
- [ ] Replace `link: "#"` with actual Credly / Coursera credential URLs

### 📬 EmailJS (Contact Form)
- [ ] Sign up at [emailjs.com](https://www.emailjs.com/)
- [ ] Create a service + email template
- [ ] Fill in `emailjsConfig.serviceId`, `emailjsConfig.templateId`, `emailjsConfig.publicKey`

---

## 🗂️ Folder Structure

```
portfolio/
├── public/
│   ├── resume.pdf          ← Add your resume here
│   └── avatar.jpg          ← (Optional) Profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  ← All your content lives here
│   ├── hooks/
│   │   └── useCustomHooks.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

---

## 🌐 Deploying to Vercel

1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Set **Framework Preset** → Vite
5. Click **Deploy** — Vercel handles the build automatically!

> Your portfolio will be live at `https://portfolio-YOUR_NAME.vercel.app`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI Framework |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll & entrance animations |
| tsParticles | Interactive particle background |
| React Icons | Icons throughout the site |
| Devicons | Tech skill icons |
| EmailJS | Serverless contact form |

---

Made with ❤️ and ☕
