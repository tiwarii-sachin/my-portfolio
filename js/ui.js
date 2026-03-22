/* ============================================================
   js/ui.js
   UI interactions:
   — Theme toggle (dark / light)
   — Sticky navbar on scroll
   — Mobile nav open / close
   — Scroll-reveal IntersectionObserver
   — Typed role animation
   — Toast notification helper
   — Contact form submit
============================================================ */

/* ── Theme Toggle ───────────────────────────────────────── */
function toggleTheme() {
  const html   = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  document.getElementById("thbtn").textContent = isDark ? "🌙" : "☀️";
}

/* ── Sticky Navbar ──────────────────────────────────────── */
window.addEventListener("scroll", () => {
  document.getElementById("nav")
    .classList.toggle("solid", window.scrollY > 60);
});

/* ── Mobile Nav ─────────────────────────────────────────── */
function oMob() { document.getElementById("mobnav").classList.add("open");    }
function cMob() { document.getElementById("mobnav").classList.remove("open"); }

/* ── Scroll-Reveal (IntersectionObserver) ───────────────── */
function observe(el) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("on");

        /* Animate skill progress bars once visible */
        entry.target.querySelectorAll(".sk-fill").forEach((bar) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.pct + "%";
          }, 350);
        });

        io.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );
  io.observe(el);
}

/* Run observe on all .rev elements currently in the DOM */
function observeAll() {
  document.querySelectorAll(".rev:not(.on)").forEach(observe);
}

/* ── Typed Role Effect ──────────────────────────────────── */
(function typedRole() {
  const el      = document.getElementById("typed");
  if (!el) return;

  let roleIdx   = 0;
  let charIdx   = 0;
  let deleting  = false;

  function tick() {
    const current = ROLES[roleIdx];

    if (!deleting) {
      /* Type forward */
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 1800); /* pause before deleting */
        return;
      }
    } else {
      /* Delete backward */
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting  = false;
        roleIdx   = (roleIdx + 1) % ROLES.length;
      }
    }

    setTimeout(tick, deleting ? 55 : 95);
  }

  tick();
})();

/* ── Toast Notification ─────────────────────────────────── */
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 3200);
}

/* ── Contact Form Submit ────────────────────────────────── */
function sendMsg(e) {
  e.preventDefault();
  toast("🚀 Message sent! I'll reply within 24 hours.");
  e.target.reset();
}
