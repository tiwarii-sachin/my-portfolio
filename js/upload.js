/* ============================================================
   js/upload.js
   Handles all file uploads:
   — Profile photo
   — Certificate (single or multiple, PDF or image)
   — Resume PDF
============================================================ */

/* Runtime state */
let resumeUrl  = null;
let resumeFile = null;

/* ── Profile Photo ──────────────────────────────────────── */
function handlePhoto(e) {
  const file = e.target.files[0];
  if (!file) return;

  const url    = URL.createObjectURL(file);
  const circle = document.getElementById("proCircle");

  circle.innerHTML = `<img src="${url}" alt="Profile photo">`;
  toast("✅ Profile photo updated!");
}

/* ── Certificate Upload (single or multiple) ────────────── */
function handleCert(e) {
  const files = Array.from(e.target.files);
  if (!files.length) return;

  files.forEach((file) => {
    const url  = URL.createObjectURL(file);
    const name = file.name.replace(/\.[^/.]+$/, ""); /* strip extension */

    addCertCard({
      title:  name,
      issuer: "Uploaded",
      year:   new Date().getFullYear().toString(),
      ico:    "📜",
      url:    url,
      mime:   file.type,
    });
  });

  toast(`✅ ${files.length} certificate(s) uploaded!`);
  e.target.value = ""; /* reset so same file can be re-uploaded */
}

/* ── Resume PDF ─────────────────────────────────────────── */
function handleResume(e) {
  const file = e.target.files[0];
  if (!file) return;

  resumeUrl  = URL.createObjectURL(file);
  resumeFile = file;

  const preview = document.getElementById("resPrev");
  preview.innerHTML = `<iframe src="${resumeUrl}#toolbar=0" title="Resume Preview"></iframe>`;

  toast("✅ Resume uploaded successfully!");
}

/* ── Resume — View in new tab ───────────────────────────── */
function viewResume() {
  if (resumeUrl) {
    window.open(resumeUrl, "_blank");
  } else {
    toast("⚠️ Please upload your resume PDF first");
  }
}

/* ── Resume — Download ──────────────────────────────────── */
function dlResume() {
  if (resumeFile) {
    const a  = document.createElement("a");
    a.href   = resumeUrl;
    a.download = resumeFile.name || "resume.pdf";
    a.click();
  } else {
    toast("⚠️ Please upload your resume PDF first");
  }
}

/* ── Certificate — View ─────────────────────────────────── */
function vCert(url, title) {
  if (url && url !== "null") {
    window.open(url, "_blank");
  } else {
    toast(`⚠️ Please add a URL for "${title}" in data.js`);
  }
}

/* ── Certificate — Download ─────────────────────────────── */
function dCert(url, title) {
  if (url && url !== "null") {
    const a  = document.createElement("a");
    a.href   = url;
    a.download = title;
    a.click();
  } else {
    toast(`⚠️ Please add a URL for "${title}" in data.js`);
  }
}

/* ── Drag & Drop (certificate zone) ────────────────────── */
function dov(e) {
  e.preventDefault();
  document.getElementById("certDrop").classList.add("dov");
}

function dlv() {
  document.getElementById("certDrop").classList.remove("dov");
}

function ddrop(e) {
  e.preventDefault();
  dlv();
  const files = e.dataTransfer.files;
  if (files.length) handleCert({ target: { files, value: "" } });
}
