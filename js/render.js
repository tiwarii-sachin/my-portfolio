/* ============================================================
   js/render.js
   Reads DATA from data.js and builds DOM cards dynamically
   — Skills grid, Projects grid, Certificate cards
============================================================ */

/* ── Skills Grid ──────────────────────────────────────────── */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  SKILLS.forEach((s, i) => {
    const card = document.createElement("div");
    card.className = "sk-card rev";
    card.style.transitionDelay = (i % 4 * 0.1) + "s";
    card.innerHTML = `
      <span class="sk-ico">${s.ico}</span>
      <div class="sk-name">${s.name}</div>
      <div class="sk-lv">${s.lv}</div>
      <div class="sk-bg">
        <div class="sk-fill" data-pct="${s.pct}"></div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── Projects Grid ────────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById("projGrid");
  if (!grid) return;

  PROJECTS.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "proj-card rev";
    card.style.transitionDelay = (i % 3 * 0.1) + "s";

    const tags = p.stack
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="proj-top">
        <div class="proj-num">0${i + 1}</div>
        <div class="proj-ico">${p.ico}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
      <div class="proj-bot">
        <div class="tech-row">${tags}</div>
        <div class="proj-btns">
          <a href="${p.code}" class="btn btn-s btn-fw">⌨ View Code</a>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── Add a single Certificate Card ───────────────────────── */
function addCertCard(cert) {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;

  const card = document.createElement("div");
  card.className = "cert-card rev";

  /* If uploaded image show it, else show emoji */
  const banner =
    cert.url && cert.mime && cert.mime.startsWith("image/")
      ? `<img src="${cert.url}" alt="${cert.title}">`
      : `<span style="position:relative;z-index:1">${cert.ico || "📜"}</span>`;

  /* Escape single quotes in title for inline onclick */
  const safeTitle = cert.title.replace(/'/g, "\\'");
  const safeUrl   = (cert.url || "").replace(/'/g, "\\'");

  card.innerHTML = `
    <div class="cert-banner">${banner}</div>
    <div class="cert-body">
      <h4>${cert.title}</h4>
      <div class="cert-meta">${cert.issuer} &nbsp;·&nbsp; ${cert.year}</div>
      <div class="cert-acts">
        <button class="btn btn-s btn-sm"
          onclick="vCert('${safeUrl}','${safeTitle}')">👁 View</button>
        <button class="btn btn-g btn-sm"
          onclick="dCert('${safeUrl}','${safeTitle}')">⬇ Download</button>
      </div>
    </div>`;

  grid.appendChild(card);
  observe(card);   /* trigger scroll-reveal on the newly added card */
}

/* ── Initialise default certificates ─────────────────────── */
function initCerts() {
  DEF_CERTS.forEach((c) => addCertCard(c));
}
