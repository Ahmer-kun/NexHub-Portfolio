/* ═══════════════════════════════════════════════════════════
        light/dark toggle, filter counts, results info,
        skeleton loaders, image error fallback, copy email,
        contact form validation, testimonials, back to top,
        keyboard nav on cards, toast system, footer year
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
    live: "#", github: "#", featured: true,
    year: "2024", status: "Live",
    fullDesc: "NeuralChat is a production-grade conversational AI interface built with React and a FastAPI backend. It features streaming token generation via WebSockets, persistent conversation memory using Redis, multi-modal inputs (text + image), and a custom tokenizer visualization layer. Deployed on AWS Lambda with edge caching."
  },
  {
    id: 2,
    title: "CipherVault",
    description: "End-to-end encrypted password manager with zero-knowledge architecture, browser extension, and biometric unlock.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    tags: ["Security", "TypeScript", "Web"],
    live: "#", github: "#",
    year: "2024", status: "Live",
    fullDesc: "CipherVault is a zero-knowledge password manager where even the server cannot read your data. Built with AES-256-GCM encryption on the client side, PBKDF2 key derivation, and a Chrome extension for autofill. The backend is a Go microservice with PostgreSQL."
  },
  {
    id: 3,
    title: "DataForge Dashboard",
    description: "Real-time analytics platform for processing 10M+ events/day with live visualizations, alerts, and drill-down capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Web", "Data", "React"],
    live: "#", github: "#",
    year: "2023", status: "Live",
    fullDesc: "DataForge processes streaming event data using Apache Kafka and displays real-time metrics in a responsive React dashboard. Features include custom D3.js charts, anomaly detection with ML, configurable alert thresholds, and multi-tenant access control."
  },
  {
    id: 4,
    title: "CodeReview Bot",
    description: "GitHub bot that automatically reviews PRs using static analysis and LLM-powered suggestions, integrated with CI/CD pipelines.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["AI", "DevOps", "Python"],
    live: "#", github: "#",
    year: "2024", status: "Open Source",
    fullDesc: "An intelligent GitHub App that installs on repositories and automatically reviews every pull request. Uses Claude API for semantic code understanding, ESLint/Pylint for static analysis, and posts inline comments with suggested fixes. Reduces review time by ~60%."
  },
  {
    id: 5,
    title: "PixelCraft Studio",
    description: "Browser-based pixel art editor with layers, animations, export to GIF/Sprite, and collaborative editing via WebRTC.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["Web", "Canvas", "TypeScript"],
    live: "#", github: "#",
    year: "2023", status: "Live",
    fullDesc: "A feature-rich pixel art editor running entirely in the browser. Built with a custom Canvas 2D renderer, supports up to 64 layers, frame-by-frame animation, palette management, and collaborative editing through WebRTC peer connections."
  },
  {
    id: 6,
    title: "SecureNet Scanner",
    description: "Network vulnerability scanner with OSINT integration, CVE matching, and automated PDF report generation for security teams.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    tags: ["Security", "Python", "CLI"],
    live: "#", github: "#",
    year: "2023", status: "Open Source",
    fullDesc: "SecureNet is an automated network reconnaissance and vulnerability assessment tool. Integrates with Shodan, CVE databases, and runs custom nmap scripts. Outputs executive-level HTML/PDF reports with severity rankings and remediation steps."
  },
  {
    id: 7,
    title: "FlowState CRM",
    description: "Minimal, keyboard-first CRM for indie developers and freelancers. Zero subscriptions — runs locally with SQLite sync.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    tags: ["Web", "TypeScript", "Electron"],
    live: "#", github: "#",
    year: "2023", status: "Live",
    fullDesc: "FlowState is a keyboard-driven CRM built with Electron and SQLite. No cloud dependencies — all data stays local. Features include contact management, deal pipeline, reminders, email templates, and Obsidian-style note linking between contacts."
  },
  {
    id: 8,
    title: "ML Pipeline Toolkit",
    description: "End-to-end MLOps framework for training, versioning, and deploying models with experiment tracking and automated retraining.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    tags: ["AI", "Python", "DevOps"],
    live: "#", github: "#",
    year: "2022", status: "Open Source",
    fullDesc: "A lightweight MLOps framework that wraps common ML workflows: dataset versioning with DVC, experiment tracking via MLflow, automated hyperparameter tuning with Optuna, model registry, and one-click deployment to FastAPI or AWS SageMaker."
  },
  {
    id: 9,
    title: "Motioncraft Editor",
    description: "Web-based motion graphics editor with keyframe animation, SVG export, and a Lottie-compatible JSON output format.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    tags: ["Web", "Canvas", "TypeScript"],
    live: "#", github: "#",
    year: "2022", status: "Live",
    fullDesc: "Motioncraft is a browser-based animation tool built on a custom timeline engine. Supports easing functions, path animation, SVG manipulation, and exports Lottie-compatible JSON that can be embedded in web and mobile apps."
  }
];

/* ─── SKILLS ─── */
const skills = [
  { icon: "⚡", name: "TypeScript",  level: "Expert" },
  { icon: "🐍", name: "Python",      level: "Expert" },
  { icon: "⚛️",  name: "React",      level: "Expert" },
  { icon: "🔒", name: "Security",    level: "Advanced" },
  { icon: "🤖", name: "AI / LLMs",   level: "Advanced" },
  { icon: "🐳", name: "DevOps",      level: "Intermediate" },
  { icon: "🗄️", name: "Databases",   level: "Advanced" },
  { icon: "🎨", name: "UI / Design", level: "Advanced" },
];

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    quote: "Alex shipped our entire backend API in two weeks. Code quality was exceptional — clean, documented, and battle-tested. Easily the best contractor we've worked with.",
    name: "Sarah Kim",
    role: "CTO @ Streamline",
    initials: "SK",
    stars: 5
  },
  {
    quote: "The AI integration Alex built for us handles 50k requests a day without a hiccup. Deep knowledge of LLMs and real production instincts. Highly recommended.",
    name: "Marcus Webb",
    role: "Founder @ Nova Labs",
    initials: "MW",
    stars: 5
  },
  {
    quote: "Brought Alex in for a security audit and was blown away. Found three critical vulnerabilities, wrote clear reports, and helped us patch everything. 10/10.",
    name: "Priya Nair",
    role: "Engineering Lead @ Vaultly",
    initials: "PN",
    stars: 5
  }
];

/* ─── TAG COLORS ─── */
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

/* ─── PLACEHOLDER IMAGE ─── */
const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%230d0d18'/%3E%3Ctext x='400' y='225' text-anchor='middle' dominant-baseline='middle' fill='%233d3d55' font-family='monospace' font-size='24'%3E◈ Image unavailable%3C/text%3E%3C/svg%3E";

/* ─── STATE ─── */
let currentTag    = "all";
let searchQuery   = "";
let focusedCardIdx = -1;

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLoader();
  initCursor();
  initNavbar();
  initHamburger();
  initBackToTop();
  initFilters();
  renderFeatured();
  renderProjects();
  renderSkills();
  renderTestimonials();
  initSearch();
  initScrollReveal();
  initCounters();
  initModal();
  initSmoothScroll();
  initContactForm();
  initCopyEmail();
  initFooterYear();
  handleURLSearch();
});

/* ── FOOTER YEAR ── */
function initFooterYear() {
  const el = document.getElementById("footerYear");
  if (el) el.textContent = new Date().getFullYear();
}

/* ── URL SEARCH PARAM ── */
function handleURLSearch() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("search");
  if (q) {
    const input = document.getElementById("searchInput");
    if (input) { input.value = q; searchQuery = q.toLowerCase().trim(); renderProjects(); }
  }
}

/* ══════════════════════════════════════
   THEME (Dark / Light)
══════════════════════════════════════ */
function initTheme() {
  const stored = localStorage.getItem("nexhub-theme");
  const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const theme  = stored || system;
  applyTheme(theme);

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const current = document.body.dataset.theme;
    applyTheme(current === "dark" ? "light" : "dark");
  });

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => {
    if (!localStorage.getItem("nexhub-theme")) applyTheme(e.matches ? "light" : "dark");
  });
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  document.body.classList.toggle("dark-mode",  theme === "dark");
  document.body.classList.toggle("light-mode", theme === "light");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#050508" : "#f7f7fc");
  localStorage.setItem("nexhub-theme", theme);
}

/* ══════════════════════════════════════
   LOADER
══════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById("loader");
  const text   = document.querySelector(".loader-text");
  const msgs   = ["Initializing...", "Loading projects...", "Ready ✓"];
  let i = 0;
  const iv = setInterval(() => { if (++i < msgs.length) text.textContent = msgs[i]; }, 600);

  setTimeout(() => {
    clearInterval(iv);
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

/* ══════════════════════════════════════
   CURSOR
══════════════════════════════════════ */
function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    document.getElementById("cursor").style.display  = "none";
    document.getElementById("cursor-trail").style.display = "none";
    document.body.style.cursor = "auto";
    document.querySelectorAll("button,a").forEach(el => el.style.cursor = "pointer");
    return;
  }
  const cursor = document.getElementById("cursor");
  const trail  = document.getElementById("cursor-trail");
  let mx=0, my=0, tx=0, ty=0;
  document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });
  (function animate() {
    cursor.style.left = mx + "px"; cursor.style.top = my + "px";
    tx += (mx - tx) * .15; ty += (my - ty) * .15;
    trail.style.left = tx + "px"; trail.style.top = ty + "px";
    requestAnimationFrame(animate);
  })();
}

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
    updateActiveNavLink();
  }, { passive: true });
}

function updateActiveNavLink() {
  const sections = ["home","featured","projects","about","contact"];
  let current = "home";
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll(".nav-link").forEach(l => {
    const href = l.getAttribute("href").replace("#","");
    l.classList.toggle("active", href === current);
    l.setAttribute("aria-current", href === current ? "page" : "false");
  });
}

/* ══════════════════════════════════════
   HAMBURGER
══════════════════════════════════════ */
function initHamburger() {
  const btn  = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  const toggle = (open) => {
    btn.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    menu.setAttribute("aria-hidden", !open);
  };
  btn.addEventListener("click", () => toggle(!btn.classList.contains("open")));
  menu.querySelectorAll(".mobile-link").forEach(l => l.addEventListener("click", () => toggle(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("open")) toggle(false); });
}

/* ══════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => btn.classList.toggle("visible", window.scrollY > 500), { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ══════════════════════════════════════
   FILTERS + COUNTS
══════════════════════════════════════ */
function initFilters() {
  const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();
  const container = document.getElementById("filterTags");

  // Update "All" count
  const allBtn = container.querySelector('[data-tag="all"]');
  const allCount = allBtn.querySelector('.filter-count') || document.createElement('span');
  allCount.className = 'filter-count';
  allCount.id = 'count-all';
  allCount.textContent = projects.length;
  if (!allBtn.querySelector('.filter-count')) allBtn.appendChild(allCount);

  allTags.forEach(tag => {
    const count = projects.filter(p => p.tags.includes(tag)).length;
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.tag = tag;
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML = `${tag} <span class="filter-count">${count}</span>`;
    btn.addEventListener("click", () => setFilter(tag));
    container.appendChild(btn);
  });

  allBtn.addEventListener("click", () => setFilter("all"));
}

function setFilter(tag) {
  currentTag = tag;
  document.querySelectorAll(".filter-btn").forEach(b => {
    const isActive = b.dataset.tag === tag;
    b.classList.toggle("active", isActive);
    b.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  renderProjects();
}

window.resetFilters = function() {
  currentTag   = "all";
  searchQuery  = "";
  const input  = document.getElementById("searchInput");
  if (input) input.value = "";
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.tag === "all");
    b.setAttribute("aria-pressed", b.dataset.tag === "all" ? "true" : "false");
  });
  renderProjects();
};

/* ══════════════════════════════════════
   SEARCH
══════════════════════════════════════ */
function initSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", e => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProjects();
  });
  document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); input.focus(); input.select(); }
    if (e.key === "Escape") { input.blur(); }
  });
}

/* ── FILTER LOGIC ── */
function getFilteredProjects() {
  return projects.filter(p => {
    const tagMatch    = currentTag === "all" || p.tags.includes(currentTag);
    const searchMatch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery));
    return tagMatch && searchMatch;
  });
}

/* ══════════════════════════════════════
   RENDER FEATURED
══════════════════════════════════════ */
function renderFeatured() {
  const featured = projects.find(p => p.featured);
  if (!featured) return;
  const el = document.getElementById("featured-card");
  el.innerHTML = `
    <div class="featured-img-wrap">
      <img src="${featured.image}" alt="${featured.title} — featured project screenshot" loading="lazy" />
      <div class="featured-badge" aria-hidden="true">★ Featured Project</div>
    </div>
    <div class="featured-info">
      <div class="featured-tags" aria-label="Technologies used">${featured.tags.map(t=>`<span class="tag ${getTagClass(t)}">${t}</span>`).join("")}</div>
      <h3 class="featured-title">${featured.title}</h3>
      <p class="featured-desc">${featured.fullDesc || featured.description}</p>
      <div class="featured-actions">
        ${featured.live   ? `<a href="${featured.live}"   class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer" aria-label="View ${featured.title} live demo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>Live Demo</a>` : ""}
        ${featured.github ? `<a href="${featured.github}" class="btn btn-ghost btn-sm"   target="_blank" rel="noopener noreferrer" aria-label="View ${featured.title} on GitHub"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>Source</a>` : ""}
      </div>
    </div>`;
  // Image error fallback
  el.querySelector("img").onerror = function() { this.src = PLACEHOLDER; };
}

/* ══════════════════════════════════════
   RENDER PROJECTS
══════════════════════════════════════ */
function renderProjects() {
  const grid     = document.getElementById("projectsGrid");
  const noRes    = document.getElementById("noResults");
  const infoEl   = document.getElementById("resultsInfo");
  const filtered = getFilteredProjects();

  grid.innerHTML = "";
  focusedCardIdx = -1;

  // Results info
  if (infoEl) {
    if (searchQuery || currentTag !== "all") {
      infoEl.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${projects.length}</strong> projects${currentTag !== "all" ? ` in <strong>${currentTag}</strong>` : ""}${searchQuery ? ` matching "<strong>${escapeHtml(searchQuery)}</strong>"` : ""}`;
    } else {
      infoEl.innerHTML = `Showing all <strong>${projects.length}</strong> projects`;
    }
  }

  if (filtered.length === 0) {
    noRes.classList.remove("hidden");
    return;
  }
  noRes.classList.add("hidden");

  filtered.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "project-card card-enter";
    card.style.animationDelay = (i * 0.05) + "s";
    card.setAttribute("role", "listitem");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${p.title} — ${p.tags.join(", ")}`);

    card.innerHTML = `
      <div class="card-img-wrap loading">
        <img
          src="${p.image}"
          alt="${p.title} project screenshot"
          loading="lazy"
          width="800" height="450"
        />
        <div class="card-img-overlay" aria-hidden="true">
          <button class="overlay-btn" onclick="openModal(${p.id})" tabindex="-1">Preview</button>
          ${p.live   ? `<a href="${p.live}"   class="overlay-btn" target="_blank" rel="noopener noreferrer" tabindex="-1">Live ↗</a>` : ""}
          ${p.github ? `<a href="${p.github}" class="overlay-btn" target="_blank" rel="noopener noreferrer" tabindex="-1">GitHub</a>` : ""}
        </div>
      </div>
      <div class="card-body">
        <div class="card-tags" aria-label="Technologies">${p.tags.map(t=>`<span class="tag ${getTagClass(t)}">${t}</span>`).join("")}</div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-actions">
          ${p.live   ? `<a href="${p.live}"   class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer" aria-label="Live demo of ${p.title}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>Live</a>` : ""}
          ${p.github ? `<a href="${p.github}" class="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer" aria-label="${p.title} GitHub repository">GitHub</a>` : ""}
          <button class="btn btn-ghost btn-sm" onclick="openModal(${p.id})" aria-label="View details for ${p.title}" style="margin-left:auto">Details →</button>
        </div>
      </div>`;

    // Image lazy load + skeleton remove
    const img  = card.querySelector("img");
    const wrap = card.querySelector(".card-img-wrap");
    img.onload  = () => wrap.classList.remove("loading");
    img.onerror = () => { img.src = PLACEHOLDER; wrap.classList.remove("loading"); };

    // Keyboard navigation: Enter/Space opens modal
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(p.id); }
    });

    grid.appendChild(card);
  });

  // Arrow key navigation across cards
  grid.addEventListener("keydown", handleCardKeyNav);
}

function handleCardKeyNav(e) {
  const cards = [...document.querySelectorAll(".project-card")];
  if (!cards.length) return;
  const cols = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  let idx = cards.indexOf(document.activeElement);
  if (idx === -1) return;
  let next = idx;
  if (e.key === "ArrowRight") next = Math.min(idx + 1, cards.length - 1);
  else if (e.key === "ArrowLeft") next = Math.max(idx - 1, 0);
  else if (e.key === "ArrowDown") next = Math.min(idx + cols, cards.length - 1);
  else if (e.key === "ArrowUp") next = Math.max(idx - cols, 0);
  else return;
  e.preventDefault();
  cards[next].focus();
}

/* ══════════════════════════════════════
   RENDER SKILLS
══════════════════════════════════════ */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = skills.map(s => `
    <div class="skill-item" role="listitem">
      <span class="skill-icon" aria-hidden="true">${s.icon}</span>
      <div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-level">${s.level}</div>
      </div>
    </div>`).join("");
}

/* ══════════════════════════════════════
   RENDER TESTIMONIALS
══════════════════════════════════════ */
function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid) return;
  grid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal" style="transition-delay:${i*.1}s" role="article" aria-label="Testimonial from ${t.name}">
      <p class="testimonial-quote">${t.quote}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar" aria-hidden="true">${t.initials}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
          <div class="testimonial-stars" aria-label="${t.stars} out of 5 stars">${"★".repeat(t.stars)}</div>
        </div>
      </div>
    </div>`).join("");

  // Re-observe new reveal elements
  document.querySelectorAll(".testimonial-card.reveal").forEach(el => revealObserver?.observe(el));
}

/* ══════════════════════════════════════
   MODAL
══════════════════════════════════════ */
let lastFocused = null;

function initModal() {
  const overlay = document.getElementById("modalOverlay");
  document.getElementById("modalClose").addEventListener("click", closeModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
    if (overlay.classList.contains("open")) trapFocus(e, overlay);
  });
}

function trapFocus(e, container) {
  if (e.key !== "Tab") return;
  const focusable = [...container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')];
  const first = focusable[0]; const last = focusable[focusable.length - 1];
  if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
  else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
}

window.openModal = function(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  lastFocused = document.activeElement;

  document.getElementById("modalContent").innerHTML = `
    <img class="modal-img" src="${p.image}" alt="${p.title} full screenshot" loading="lazy" />
    <div class="modal-body">
      <div class="modal-tags" aria-label="Technologies">${p.tags.map(t=>`<span class="tag ${getTagClass(t)}">${t}</span>`).join("")}</div>
      <h2 class="modal-title" id="modalTitle">${p.title}</h2>
      <p class="modal-desc">${p.fullDesc || p.description}</p>
      <div class="modal-meta" aria-label="Project details">
        <div class="modal-meta-item"><div class="modal-meta-label">Year</div><div class="modal-meta-value">${p.year || "—"}</div></div>
        <div class="modal-meta-item"><div class="modal-meta-label">Status</div><div class="modal-meta-value">${p.status || "—"}</div></div>
        <div class="modal-meta-item"><div class="modal-meta-label">Stack</div><div class="modal-meta-value">${p.tags.join(", ")}</div></div>
        <div class="modal-meta-item"><div class="modal-meta-label">Type</div><div class="modal-meta-value">Side Project</div></div>
      </div>
      <div class="modal-actions">
        ${p.live   ? `<a href="${p.live}"   class="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : ""}
        ${p.github ? `<a href="${p.github}" class="btn btn-ghost"   target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
      </div>
    </div>`;

  // Image error fallback
  document.querySelector("#modalContent .modal-img").onerror = function() { this.src = PLACEHOLDER; };

  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("modalClose")?.focus(), 100);
};

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
  lastFocused?.focus();
}

/* ══════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════ */
let revealObserver;
function initScrollReveal() {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); revealObserver.unobserve(e.target); } });
  }, { threshold: .1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => {
    if (!el.closest(".hero")) revealObserver.observe(el);
  });
}

/* ══════════════════════════════════════
   COUNTERS
══════════════════════════════════════ */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); } });
  }, { threshold: .5 });
  document.querySelectorAll(".stat-num").forEach(c => obs.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const start  = performance.now();
  const dur    = 1400;
  (function update(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target);
    if (p < 1) requestAnimationFrame(update);
    else el.textContent = target + (target > 10 ? "+" : "");
  })(start);
}

/* ══════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    });
  });
}

/* ══════════════════════════════════════
   COPY EMAIL
══════════════════════════════════════ */
function initCopyEmail() {
  const btn   = document.getElementById("copyEmailBtn");
  const label = document.getElementById("copyEmailLabel");
  const hint  = document.getElementById("copyHint");
  if (!btn) return;
  const email = "hello@alexchen.dev";

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      label.textContent = "Copied!";
      hint.textContent  = "✓ Email copied to clipboard";
      showToast("Email copied to clipboard!", "success");
      setTimeout(() => { label.textContent = email; hint.textContent = ""; }, 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!validateForm()) return;

    const btn  = document.getElementById("formSubmit");
    const succ = document.getElementById("formSuccess");
    btn.disabled = true;
    btn.querySelector("span").textContent = "Sending...";

    // Simulate submission (replace with your endpoint)
    await new Promise(r => setTimeout(r, 1200));

    form.style.display = "none";
    succ.classList.remove("hidden");
    showToast("Message sent! I'll reply within 24 hours.", "success");
  });

  // Live validation
  ["formName","formEmail","formMessage"].forEach(id => {
    document.getElementById(id)?.addEventListener("blur", () => validateField(id));
    document.getElementById(id)?.addEventListener("input", () => clearError(id));
  });
}

function validateForm() {
  const fields = ["formName","formEmail","formMessage"];
  return fields.map(id => validateField(id)).every(Boolean);
}

function validateField(id) {
  const el  = document.getElementById(id);
  const err = document.getElementById(id.replace("form","") + "Error");
  if (!el || !err) return true;
  const val = el.value.trim();

  if (!val) { setError(el, err, "This field is required"); return false; }
  if (id === "formEmail" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    setError(el, err, "Enter a valid email address"); return false;
  }
  clearError(id); return true;
}

function setError(el, errEl, msg) {
  el.classList.add("error");
  errEl.textContent = msg;
}

function clearError(id) {
  const el  = document.getElementById(id);
  const err = document.getElementById(id.replace("form","") + "Error");
  el?.classList.remove("error");
  if (err) err.textContent = "";
}

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
function showToast(message, type = "default") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("toast-out");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ══════════════════════════════════════
   UTILS
══════════════════════════════════════ */
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" })[m]);
}
