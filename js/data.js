/* ============================================================
   js/data.js
   ✏️  EDIT THIS FILE to personalise your portfolio content
   — Change your name, role, skills, projects, certifications
============================================================ */

/* ── Personal Info ── */
const INFO = {
  role: "Cloud & DevOps Engineer",
  tagline: "Designing the Next Generation of Digital Experiences",
  subtitle: "Student at Lovely Professional University. Passionate about creating seamless intersections between human intuition and powerful technology.",
  email: "sachintiwari74gpj@gmail.com",
  linkedin: "https://www.linkedin.com/in/sachin-tiwari-2a8723290/",
  github: "https://github.com/tiwarii-sachin",
  twitter: "https://twitter.com/yourhandle", // Not provided, keeping as is or placeholder
};

/* ── Hero Stats ── */
const STATS = [
  { num: "2027", label: "Graduating" },
  { num: "5+", label: "Projects" },
  { num: "9", label: "Certifications" },
  { num: "10+", label: "Technologies" },
];

/* ── Typed Role Strings (cycles automatically) ── */
const ROLES = [
"Cloud & DevOps Engineer",
  "Problem Solver",
];

/* ── About Section Pills ── */
const ABOUT_PILLS = [
  "⚛️ React & Node.js",
  "☁️ Cloud Computing",
  "🐳 Containerization",
  "☸️ Kubernetes",
  "🔁 CI/CD Pipelines",
  "🏗️ Software Engineering",
  "🔧 Problem Solving",
];

/* ── Skills ── */
const SKILLS = [
  { ico: "☕", name: "Java", lv: "Advanced", pct: 85 },
  { ico: "💻", name: "C++", lv: "Advanced", pct: 80 },
  { ico: "🐍", name: "Python", lv: "Intermediate", pct: 75 },
  { ico: "🦋", name: "Flutter", lv: "Intermediate", pct: 72 },
  { ico: "⚛️", name: "React", lv: "Advanced", pct: 85 },
  { ico: "🟢", name: "Node.js", lv: "Advanced", pct: 82 },
  { ico: "🍃", name: "MongoDB", lv: "Intermediate", pct: 78 },
  { ico: "🔶", name: "AWS", lv: "Intermediate", pct: 70 },
  { ico: "🔵", name: "Azure", lv: "Intermediate", pct: 72 },
  { ico: "🐳", name: "Docker", lv: "Intermediate", pct: 75 },
  { ico: "☸️", name: "Kubernetes", lv: "Intermediate", pct: 70 },
  { ico: "🛠️", name: "Git & GitHub", lv: "Expert", pct: 90 },
];

/* ── Projects ── */
const PROJECTS = [
  {
    ico: "🦁",
    title: "Virtual Zoo Website",
    desc: "Interactive virtual zoo platform where users can explore animals, view details, images, and habitats through a dynamic React interface linked to Node.js and MongoDB.",
    stack: ["React", "Node.js", "MongoDB", "Express", "HTML/CSS"],
    demo: "#",
    code: "https://github.com/tiwarii-sachin/my-project",
  },
  {
    ico: "📈",
    title: "Kubernetes HPA Autoscaling",
    desc: "Containerized Flask web application deployed on Kubernetes with Horizontal Pod Autoscaling (HPA) to scale pods dynamically based on CPU utilization.",
    stack: ["Docker", "Kubernetes", "HPA", "Flask", "Cloud"],
    demo: "#",
    code: "https://github.com/tiwarii-sachin/kubernetes-hpa-project",
  },
  {
    ico: "🧪",
    title: "Flask-app",
    desc: "A lightweight web application built with Flask, demonstrating clean routing, template rendering, and backend logic integration.",
    stack: ["Python", "Flask"],
    code: "https://github.com/tiwarii-sachin/Flask-app",
  },
];

/* ── Default Certificates ── */
const DEF_CERTS = [
  { title: "ChatGPT-4 Prompt Engineering", issuer: "Certification", year: "2024", ico: "🤖", url: "assets/certificates/ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM.pdf" },
  { title: "Computer Communication", issuer: "Certification", year: "2024", ico: "💻", url: "assets/certificates/Computer Communication.pdf" },
  { title: "Fundamentals of Network Comm.", issuer: "Certification", year: "2024", ico: "🌐", url: "assets/certificates/Fundamentals of Network Communication.pdf" },
  { title: "Hardware & Operating Systems", issuer: "Certification", year: "2024", ico: "🖥️", url: "assets/certificates/Introduction to Hardware and Operating Systems.pdf" },
  { title: "Packet Switching Networks", issuer: "Certification", year: "2024", ico: "🔀", url: "assets/certificates/Packet Switching Networks and Algorithms.pdf" },
  { title: "Peer-to-Peer & LAN Protocols", issuer: "Certification", year: "2024", ico: "🔗", url: "assets/certificates/Peer-to-Peer Protocols and Local Area Networks.pdf" },
  { title: "TCP/IP & Advanced Topics", issuer: "Certification", year: "2024", ico: "📡", url: "assets/certificates/TCPIP and Advanced Topics.pdf" },
  { title: "Bits and Bytes of Networking", issuer: "Google", year: "2024", ico: "🔌", url: "assets/certificates/bits and bits certificate.pdf" },
  { title: "Full Stack Development in React & Node", issuer: "Certification", year: "2024", ico: "⚛️", url: "assets/certificates/full stack devlopment in react & node.pdf" },
];
