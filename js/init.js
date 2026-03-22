/* ============================================================
   js/init.js
   Bootstraps the portfolio on page load:
   — Populates dynamic text from data.js
   — Calls render functions
   — Dismisses loader
   — Kicks off scroll-reveal
============================================================ */

/* ── Populate personal info from data.js ─────────────────── */
function populateInfo() {
  /* Hero name */
  const heroName = document.getElementById("heroName");
  if (heroName) heroName.textContent = INFO.name || "Sachin Tiwari";

  /* Hero tagline */
  const heroDesc = document.getElementById("heroDesc");
  if (heroDesc) heroDesc.textContent = INFO.tagline;

  /* Hero subtitle */
  const heroSub = document.getElementById("heroSub");
  if (heroSub) heroSub.textContent = INFO.subtitle;

  /* Footer name */
  const fName = document.getElementById("fName");
  if (fName) fName.textContent = INFO.name || "Sachin Tiwari";

  /* Year */
  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  /* Nav logo */
  const navLogo = document.querySelector(".nav-logo");
  const displayName = INFO.name || "Sachin Tiwari";
  if (navLogo) navLogo.textContent = `{ ${displayName.split(" ")[0].toLowerCase()} }`;

  /* Social links */
  const links = {
    "https://linkedin.com":   INFO.linkedin,
    "https://github.com":     INFO.github,
    "https://twitter.com":    INFO.twitter,
    "mailto:hello@yourname.com": `mailto:${INFO.email}`,
  };

  document.querySelectorAll(".soc-link").forEach((a) => {
    const match = Object.keys(links).find((k) => a.href.includes(k.replace("mailto:", "")));
    if (match) a.href = links[match];
  });

  const emailSmall = document.querySelector('.soc-link[href^="mailto"] small');
  if (emailSmall) emailSmall.textContent = INFO.email;
}

/* ── Render Hero Stats ───────────────────────────────────── */
function renderStats() {
  const container = document.getElementById("heroStats");
  if (!container) return;
  container.innerHTML = "";
  STATS.forEach(s => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = `<div class="num">${s.num}</div><div class="lbl">${s.label}</div>`;
    container.appendChild(div);
  });
}

/* ── Dismiss loader ──────────────────────────────────────── */
function dismissLoader() {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");

    /* Start scroll-reveal after loader fades */
    setTimeout(observeAll, 300);
  }, 1300);
}

/* ── Main entry point ────────────────────────────────────── */
window.addEventListener("load", () => {
  populateInfo();
  renderStats();
  renderSkills();
  renderProjects();
  initCerts();
  dismissLoader();
});

/* Fallback: run observeAll after short delay in case load already fired */
setTimeout(observeAll, 800);
