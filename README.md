# 🚀 Dev Portfolio — File Guide

Open `index.html` in any browser. No build step needed.....

---

## 📁 Folder Structure

```
portfolio/
│
├── index.html              ← Main HTML (structure only — do not edit often)
│
├── css/
│   ├── variables.css       ← 🎨 COLORS, FONTS, SPACING — edit here first
│   ├── base.css            ← Reset, global styles, buttons, toast
│   ├── loader.css          ← Loading screen animation
│   ├── navbar.css          ← Sticky nav + mobile hamburger
│   ├── hero.css            ← Hero section + profile photo ring
│   ├── about.css           ← About section layout + cards
│   ├── skills.css          ← Skills grid + progress bars
│   ├── projects.css        ← Project cards + tech tags
│   ├── certificates.css    ← Certificate upload zone + cards
│   ├── resume.css          ← Resume preview + buttons
│   ├── contact.css         ← Contact form + social links
│   ├── footer.css          ← Footer styles
│   ├── animations.css      ← Scroll-reveal + keyframes
│   └── responsive.css      ← Mobile / tablet media queries
│
├── js/
│   ├── data.js             ← ✏️  YOUR CONTENT — name, skills, projects, certs
│   ├── threejs-bg.js       ← Three.js particle + shape background
│   ├── render.js           ← Builds skills/projects/cert DOM from data.js
│   ├── upload.js           ← File upload handlers (photo, resume, certs)
│   ├── ui.js               ← Theme, navbar, scroll-reveal, typed text, toast
│   └── init.js             ← Bootstraps everything on page load
│
└── assets/                 ← Put your images / PDF here (optional)
    └── (your files here)
```

---

## ✏️ How to Personalise

### 1. Change your name, role, links → `js/data.js`
Edit the `INFO` object at the top:
```js
const INFO = {
  name:    "Arjun Sharma",
  role:    "Cloud & DevOps Engineer",
  email:   "arjun@example.com",
  linkedin:"https://linkedin.com/in/arjunsharma",
  github:  "https://github.com/arjunsharma",
  twitter: "https://twitter.com/arjunsharma",
};
```

### 2. Add / remove Skills → `js/data.js` → `SKILLS` array
```js
{ ico: "🐳", name: "Docker", lv: "Expert", pct: 95 },
```
- `ico`  — any emoji
- `lv`   — Expert / Advanced / Intermediate / Beginner
- `pct`  — 0 to 100

### 3. Add / remove Projects → `js/data.js` → `PROJECTS` array
```js
{
  ico:   "☁️",
  title: "My Cool Project",
  desc:  "Short description...",
  stack: ["React", "Docker", "AWS"],
  demo:  "https://myproject.com",
  code:  "https://github.com/me/project",
},
```

### 4. Add Certifications → `js/data.js` → `DEF_CERTS` array
```js
{ title: "AWS Solutions Architect", issuer: "Amazon", year: "2024", ico: "🔶", url: null },
```
Set `url` to a direct PDF/image URL to enable real View/Download buttons.

### 5. Change Colors → `css/variables.css`
```css
--a:  #4f8eff;   /* primary blue accent  */
--a2: #a855f7;   /* purple accent        */
--a3: #06d6a0;   /* teal highlight       */
```

### 6. Upload your photo
Click the **📷 Upload Photo** button on the profile ring in the browser.

### 7. Upload your Resume PDF
Go to the **Resume** section and click **⬆ Upload Resume PDF**.

### 8. Upload Certificates
Go to the **Certifications** section and drag & drop or click to upload PDF/image files.

---

## 🌐 How to Run

Just open `index.html` in Chrome, Firefox, or Edge.
No server needed. All assets load from CDN (requires internet for fonts + Three.js).

---

## 🛠 Tech Used

| Tech | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling, glassmorphism, animations |
| Vanilla JavaScript | Interactivity, DOM rendering |
| Three.js (r128) | 3D particle background |
| Google Fonts | Syne + DM Sans |
