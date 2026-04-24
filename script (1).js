/* ═══════════════════════════════════════════════════════════
   NEXHUB — script.js
   Features: Dynamic rendering, filter, search, modal, cursor,
             scroll animations, counters, loader
════════════════════════════════════════════════════════════ */

'use strict';

/* ─── PROJECT DATA ─── */
const projects = [
  {
    id: 1,
    title: "NeuralChat AI",
    description: "A real-time conversational AI interface powered by GPT-4, with streaming responses, conversation memory, and multi-modal input support.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    tags: ["AI", "Python", "React"],
    live: "#",
    github: "#",
    featured: true,
    fullDesc: "NeuralChat is a production-grade conversational AI interface built with React and a FastAPI backend. It features streaming token generation via WebSockets, persistent conversation memory using Redis, multi-modal inputs (text + image), and a custom tokenizer visualization layer. Deployed on AWS Lambda with edge caching."
  },
  {
    id: 2,
    title: "CipherVault",
    description: "End-to-end encrypted password manager with zero-knowledge architecture, browser extension, and biometric unlock.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    tags: ["Security", "TypeScript", "Web"],
    live: "#",
    github: "#",
    fullDesc: "CipherVault is a zero-knowledge password manager where even the server cannot read your data. Built with AES-256-GCM encryption on the client side, PBKDF2 key derivation, and a Chrome extension for autofill. The backend is a Go microservice with PostgreSQL."
  },
  {
    id: 3,
    title: "DataForge Dashboard",
    description: "Real-time analytics platform for processing 10M+ events/day with live visualizations, alerts, and drill-down capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Web", "Data", "React"],
    live: "#",
    github: "#",
    fullDesc: "DataForge processes streaming event data using Apache Kafka and displays real-time metrics in a responsive React dashboard. Features include custom D3.js charts, anomaly detection with ML, configurable alert thresholds, and multi-tenant access control."
  },
  {
    id: 4,
    title: "CodeReview Bot",
    description: "GitHub bot that automatically reviews PRs using static analysis and LLM-powered suggestions, integrated with CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["AI", "DevOps", "Python"],
    live: "#",
    github: "#",
    fullDesc: "An intelligent GitHub App that installs on repositories and automatically reviews every pull request. Uses Claude API for semantic code understanding, ESLint/Pylint for static analysis, and posts inline comments with suggested fixes. Reduces review time by ~60%."
  },
  {
    id: 5,
    title: "PixelCraft Studio",
    description: "Browser-based pixel art editor with layers, animations, export to GIF/Sprite, and collaborative editing via WebRTC.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["Web", "Canvas", "TypeScript"],
    live: "#",
    github: "#",
    fullDesc: "A feature-rich pixel art editor running entirely in the browser. Built with a custom Canvas 2D renderer, supports up to 64 layers, frame-by-frame animation, palette management, and collaborative editing through WebRTC peer connections."
  },
  {
    id: 6,
    title: "SecureNet Scanner",
    description: "Network vulnerability scanner with OSINT integration, CVE matching, and automated PDF report generation for security teams.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    tags: ["Security", "Python", "CLI"],
    live: "#",
    github: "#",
    fullDesc: "SecureNet is an automated network reconnaissance and vulnerability assessment tool. Integrates with Shodan, CVE databases, and runs custom nmap scripts. Outputs executive-level HTML/PDF reports with severity rankings and remediation steps."
  },
  {
    id: 7,
    title: "FlowState CRM",
    description: "Minimal, keyboard-first CRM for indie developers and freelancers. Zero subscriptions — runs locally with SQLite sync.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    tags: ["Web", "TypeScript", "Electron"],
    live: "#",
    github: "#",
    fullDesc: "FlowState is a keyboard-driven CRM built with Electron and SQLite. No cloud dependencies — all data stays local. Features include contact management, deal pipeline, reminders, email templates, and Obsidian-style note linking between contacts."
  },
  {
    id: 8,
    title: "ML Pipeline Toolkit",
    description: "End-to-end MLOps framework for training, versioning, and deploying models with experiment tracking and automated retraining.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    tags: ["AI", "Python", "DevOps"],
    live: "#",
    github: "#",
    fullDesc: "A lightweight MLOps framework that wraps common ML workflows: dataset versioning with DVC, experiment tracking via MLflow, automated hyperparameter tuning with Optuna, model registry, and one-click deployment to FastAPI or AWS SageMaker."
  },
  {
    id: 9,
    title: "Motioncraft Editor",
    description: "Web-based motion graphics editor with keyframe animation, SVG export, and a Lottie-compatible JSON output format.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    tags: ["Web", "Canvas", "TypeScript"],
    live: "#",
    github: "#",
    fullDesc: "Motioncraft is a browser-based animation tool built on a custom timeline engine. Supports easing functions, path animation, SVG manipulation, and exports Lottie-compatible JSON that can be embedded in web and mobile apps."
  }
];

/* ─── SKILLS DATA ─── */
const skills = [
  { icon: "⚡", name: "TypeScript", level: "Expert" },
  { icon: "🐍", name: "Python",     level: "Expert" },
  { icon: "⚛️",  name: "React",     level: "Expert" },
  { icon: "🔒", name: "Security",   level: "Advanced" },
  { icon: "🤖", name: "AI / LLMs",  level: "Advanced" },
  { icon: "🐳", name: "DevOps",     level: "Intermediate" },
  { icon: "🗄️", name: "Databases",  level: "Advanced" },
  { icon: "🎨", name: "UI / Design",level: "Advanced" },
];

/* ─── TAG COLOR MAP ─── */
const tagColors = {
  "AI":         "tag-purple",
  "Web":        "tag-indigo",
  "Security":   "tag-red",
  "Python":     "tag-cyan",
  "TypeScript": "tag-green",
  "React":      "tag-indigo",
  "Data":       "tag-yellow",
  "DevOps":     "tag-orange",
  "Canvas":     "tag-pink",
  "CLI":        "tag-green",
  "Electron":   "tag-cyan",
};
const getTagClass = t => tagColors[t] || "tag-default";

/* ─── STATE ─── */
let currentTag = "all";
let searchQuery = "";

/* ─── INIT ─── */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCursor();
  initNavbar();
  initHamburger();
  initFilters();
  renderFeatured();
  renderProjects();
  renderSkills();
  initSearch();
  initScrollReveal();
  initCounters();
  initModal();
  initSmoothScroll();
});

/* ─── LOADER ─── */
function initLoader() {
  const loader = document.getElementById("loader");
  const messages = ["Initializing...", "Loading projects...", "Ready ✓"];
  const loaderText = document.querySelector(".loader-text");
  let i = 0;
  const interval = setInterval(() => {
    i++;
    if (i < messages.length) loaderText.textContent = messages[i];
  }, 600);

  setTimeout(() => {
    clearInterval(interval);
    loader.classList.add("hidden");
    document.body.style.overflow = "auto";
    triggerHeroReveal();
  }, 1900);

  document.body.style.overflow = "hidden";
}

function triggerHeroReveal() {
  document.querySelectorAll(".hero .reveal").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 120);
  });
}

/* ─── CUSTOM CURSOR ─── */
function initCursor() {
  const cursor = document.getElementById("cursor");
  const trail  = document.getElementById("cursor-trail");
  if (window.matchMedia("(pointer: coarse)").matches) {
    cursor.style.display = "none";
    trail.style.display  = "none";
    document.body.style.cursor = "auto";
    document.querySelectorAll("button, a").forEach(el => el.style.cursor = "pointer");
    return;
  }
  let mx = 0, my = 0, tx = 0, ty = 0;
  document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    cursor.style.left = mx + "px";
    cursor.style.top  = my + "px";
    tx += (mx - tx) * 0.15;
    ty += (my - ty) * 0.15;
    trail.style.left = tx + "px";
    trail.style.top  = ty + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

/* ─── NAVBAR ─── */
function initNavbar() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
    updateActiveNavLink();
  });
}
function updateActiveNavLink() {
  const sections = ["home","featured","projects","about","contact"];
  const links = document.querySelectorAll(".nav-link");
  let current = "home";
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  links.forEach(l => {
    const href = l.getAttribute("href").replace("#","");
    l.classList.toggle("active", href === current);
  });
}

/* ─── HAMBURGER ─── */
function initHamburger() {
  const btn  = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    menu.classList.toggle("open");
  });
  menu.querySelectorAll(".mobile-link").forEach(l => {
    l.addEventListener("click", () => {
      btn.classList.remove("open");
      menu.classList.remove("open");
    });
  });
}

/* ─── FILTERS ─── */
function initFilters() {
  const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();
  const container = document.getElementById("filterTags");
  allTags.forEach(tag => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.tag = tag;
    btn.textContent = tag;
    btn.addEventListener("click", () => setFilter(tag));
    container.appendChild(btn);
  });
  container.querySelector('[data-tag="all"]').addEventListener("click", () => setFilter("all"));
}

function setFilter(tag) {
  currentTag = tag;
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.tag === tag);
  });
  renderProjects();
}

window.resetFilters = function() {
  currentTag = "all";
  searchQuery = "";
  document.getElementById("searchInput").value = "";
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.tag === "all"));
  renderProjects();
};

/* ─── SEARCH ─── */
function initSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", e => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProjects();
  });

  // ⌘K shortcut
  document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      input.focus();
    }
    if (e.key === "Escape") input.blur();
  });
}

/* ─── FILTERED PROJECTS ─── */
function getFilteredProjects() {
  return projects.filter(p => {
    const tagMatch = currentTag === "all" || p.tags.includes(currentTag);
    const searchMatch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery));
    return tagMatch && searchMatch;
  });
}

/* ─── RENDER FEATURED ─── */
function renderFeatured() {
  const featured = projects.find(p => p.featured);
  if (!featured) return;
  const el = document.getElementById("featured-card");
  el.innerHTML = `
    <div class="featured-img-wrap">
      <img src="${featured.image}" alt="${featured.title}" loading="lazy" />
      <div class="featured-badge">★ Featured Project</div>
    </div>
    <div class="featured-info">
      <div class="featured-tags">${featured.tags.map(t => `<span class="tag ${getTagClass(t)}">${t}</span>`).join("")}</div>
      <h3 class="featured-title">${featured.title}</h3>
      <p class="featured-desc">${featured.fullDesc || featured.description}</p>
      <div class="featured-actions">
        <a href="${featured.live}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Demo
        </a>
        <a href="${featured.github}" class="btn btn-ghost btn-sm" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width:16px;height:16px"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          Source
        </a>
      </div>
    </div>
  `;
}

/* ─── RENDER PROJECTS ─── */
function renderProjects() {
  const grid    = document.getElementById("projectsGrid");
  const noRes   = document.getElementById("noResults");
  const filtered = getFilteredProjects();

  grid.innerHTML = "";

  if (filtered.length === 0) {
    noRes.classList.remove("hidden");
    return;
  }
  noRes.classList.add("hidden");

  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card card-enter";
    card.style.animationDelay = (i * 0.05) + "s";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="card-img-overlay">
          <button class="overlay-btn" onclick="openModal(${p.id})">Preview</button>
          ${p.live    ? `<a href="${p.live}"   class="overlay-btn" target="_blank" rel="noopener">Live</a>` : ""}
          ${p.github  ? `<a href="${p.github}" class="overlay-btn" target="_blank" rel="noopener">GitHub</a>` : ""}
        </div>
      </div>
      <div class="card-body">
        <div class="card-tags">${p.tags.map(t => `<span class="tag ${getTagClass(t)}">${t}</span>`).join("")}</div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-actions">
          ${p.live   ? `<a href="${p.live}"   class="btn btn-primary btn-sm" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>Live</a>` : ""}
          ${p.github ? `<a href="${p.github}" class="btn btn-ghost btn-sm" target="_blank" rel="noopener">GitHub</a>` : ""}
          <button class="btn btn-ghost btn-sm" onclick="openModal(${p.id})" style="margin-left:auto">Details →</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ─── RENDER SKILLS ─── */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = skills.map(s => `
    <div class="skill-item">
      <span class="skill-icon">${s.icon}</span>
      <div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-level">${s.level}</div>
      </div>
    </div>
  `).join("");
}

/* ─── MODAL ─── */
function initModal() {
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

window.openModal = function(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <img class="modal-img" src="${project.image}" alt="${project.title}" />
    <div class="modal-body">
      <div class="modal-tags">${project.tags.map(t => `<span class="tag ${getTagClass(t)}">${t}</span>`).join("")}</div>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-desc">${project.fullDesc || project.description}</p>
      <div class="modal-actions">
        ${project.live   ? `<a href="${project.live}"   class="btn btn-primary" target="_blank" rel="noopener">Live Demo ↗</a>` : ""}
        ${project.github ? `<a href="${project.github}" class="btn btn-ghost"   target="_blank" rel="noopener">GitHub</a>` : ""}
      </div>
    </div>
  `;
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
};

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "auto";
}

/* ─── SCROLL REVEAL ─── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => {
    if (!el.closest(".hero")) observer.observe(el);
  });
}

/* ─── ANIMATED COUNTERS ─── */
function initCounters() {
  const counters = document.querySelectorAll(".stat-num");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + (target > 10 ? "+" : "");
  }
  requestAnimationFrame(update);
}

/* ─── SMOOTH SCROLL ─── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}
