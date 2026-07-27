import "./style.css";

const projects = [
  {
    category: "Human Systems",
    index: "01",
    title: "Human Connection Ecosystem",
    subtitle: "A structural framework for why people adopt, stay, contribute and belong.",
    tags: ["Behavior", "Engagement", "System"],
    href: "https://hce.pages.dev/",
    status: "Live",
    featured: true
  },
  {
    category: "Human Systems",
    index: "02",
    title: "Pendle Talent Galaxy",
    subtitle: "A professional talent-chemistry platform for discovering and activating hidden capability.",
    tags: ["AI", "Talent", "Social OS"],
    href: "https://pendle-talent-galaxy.pages.dev/",
    status: "Live",
    featured: true
  },
  {
    category: "Editorial Systems",
    index: "03",
    title: "Engage Audit",
    subtitle: "An editorial diagnostic that reveals where attention, clarity and reader momentum break down.",
    tags: ["Writing", "Marketing", "Audit"],
    href: "https://engage-audit.pages.dev/",
    status: "Live"
  },
  {
    category: "Narrative",
    index: "04",
    title: "Snow Drop",
    subtitle: "An ethical AI science-fiction project exploring agency, intimacy and the future of being human.",
    tags: ["Fiction", "Ethics", "AI"],
    href: "https://snowdrop-ex1.pages.dev",
    status: "Live"
  },
  {
    category: "Decision Systems",
    index: "05",
    title: "CEO OS",
    subtitle: "A decision architecture for founders translating vision into priorities, capital and execution.",
    tags: ["Strategy", "Leadership", "Operations"],
    status: "In development"
  },
  {
    category: "Capital Systems",
    index: "06",
    title: "Investment Valuation Framework",
    subtitle: "A framework for examining value, risk and strategic fit beyond conventional financial snapshots.",
    tags: ["Finance", "PE / VC", "Valuation"],
    status: "In development"
  },
  {
    category: "Education",
    index: "07",
    title: "Financial & Social Literacy",
    subtitle: "A practical learning system for understanding how society, institutions and capital actually move.",
    tags: ["Finance", "Education", "Society"],
    status: "In development"
  },
  {
    category: "Culture",
    index: "08",
    title: "Bokkacha",
    subtitle: "A contemporary cultural format connecting Japanese calligraphy, flowers and the ceremony of tea.",
    tags: ["Culture", "Aesthetics", "Japan"],
    status: "Concept"
  }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="grain" aria-hidden="true"></div>
  <header class="nav">
    <a class="wordmark" href="#top" aria-label="Clair de Lune home">
      <img class="brand-logo" src="/delta-lambda-circle-logo.jpeg" alt=""><span>CLAIR DE LUNE</span>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#practice">Practice</a>
      <a href="#projects">Projects</a>
      <a href="#principles">Principles</a>
      <a class="nav-cta" href="mailto:sppn2zu9@gmail.com">Start a conversation <span>↗</span></a>
    </nav>
    <button class="menu" aria-label="Open menu"><span></span><span></span></button>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <div class="hero-kicker reveal">Haruno Ayukai · Clair de Lune</div>
        <div class="hero-title reveal">
          <span class="role">Value Realization Strategist</span>
          <h1>
            <span>Revealing invisible value.</span>
            <span>Designing the systems</span>
            <span>that let it grow.</span>
          </h1>
        </div>
        <div class="hero-bottom reveal">
          <p>I translate latent human, organizational and cultural value into clear strategy, working systems and measurable progress.</p>
          <a href="#projects">View selected work <span>↓</span></a>
        </div>
      </div>
      <div class="hero-portrait reveal">
        <img src="/haruno-profile.jpeg" alt="Haruno Ayukai, Value Realization Strategist" onerror="this.style.display='none'">
        <span class="portrait-caption">Systems · Strategy · Culture</span>
      </div>
    </section>

    <section class="statement" id="practice">
      <div class="eyebrow reveal">The practice</div>
      <div class="statement-copy reveal">
        <p>Most valuable things begin without a name: an instinct, a relationship, a cultural asset, a pattern hiding across disconnected evidence.</p>
        <p class="muted">My work gives that value an address, then builds the framework, product or institution through which it becomes useful.</p>
      </div>
      <div class="method reveal">
        <div><span>01</span><h3>Reveal</h3><p>Surface invisible capital and establish ground truth.</p></div>
        <div><span>02</span><h3>Connect</h3><p>Translate context and align people, incentives and decisions.</p></div>
        <div><span>03</span><h3>Architect</h3><p>Turn insight into a coherent model, experience or operating system.</p></div>
        <div><span>04</span><h3>Realize</h3><p>Test, measure and compound value through real-world use.</p></div>
      </div>
    </section>

    <section class="portfolio" id="projects">
      <div class="section-head reveal">
        <div>
          <div class="eyebrow">Selected work</div>
          <h2>Ideas made operational.</h2>
        </div>
        <p>A living portfolio of frameworks, ventures and cultural experiments—each one an implementation of the same inquiry: how does hidden value become lasting value?</p>
      </div>
      <div class="project-list">
        ${projects.map((p) => `
          ${p.href ? `<a class="project reveal ${p.featured ? "featured" : ""}" href="${p.href}" target="_blank" rel="noreferrer" aria-label="Open ${p.title}">` : `<article class="project reveal ${p.featured ? "featured" : ""}">`}
            <div class="project-meta"><span>${p.index}</span><span>${p.category}</span></div>
            <div class="project-main">
              <h3>${p.title}</h3>
              <p>${p.subtitle}</p>
              <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
            </div>
            <div class="project-action">
              <span class="status">${p.status}</span>
              ${p.href ? `<span class="project-arrow">↗</span>` : `<span class="no-link">—</span>`}
            </div>
          ${p.href ? `</a>` : `</article>`}
        `).join("")}
      </div>
      <p class="portfolio-note reveal">The full portfolio also spans career architecture, trauma integration, ethical education, visual strategy, cultural pairing, social infrastructure and diplomatic biography.</p>
    </section>

    <section class="framework" id="principles">
      <div class="framework-mark">
        <img src="/delta-lambda-circle-logo.jpeg" alt="Delta Lambda Circle crest">
      </div>
      <div class="framework-copy reveal">
        <div class="eyebrow">Crest & core principles</div>
        <h2>Renewal needs order.<br>Order needs trust.<br>Trust becomes community.</h2>
        <div class="principles">
          <div><b>Delta</b><span>Innovation for renewal</span></div>
          <div><b>Lambda</b><span>Order for trust & continuity</span></div>
          <div><b>Circle</b><span>Community for mutual prosperity</span></div>
        </div>
      </div>
    </section>

    <section class="identity">
      <div class="identity-copy reveal">
        <div class="eyebrow">Lineage & practice</div>
        <blockquote>“I design what others feel but cannot yet name.”</blockquote>
        <p class="identity-bio">Born into a centuries-old family of regional stewards, scholars and artists, within a 1,300-year living tradition that has kept the same flame alight for more than a millennium. I inherited a free, sovereign temperament, yet was raised in a world where duty, restraint and consideration for others were quietly absolute. That tension trained me to read the human dynamics beneath decisions, institutions and culture. It is now the foundation of my work: revealing invisible capital and transforming it into measurable impact.</p>
      </div>
      <div class="identity-credentials reveal">
        <div>
          <span>Practice</span>
          <b>Invisible Capital Architect</b>
          <small>Transforming invisible value into measurable impact</small>
        </div>
        <div>
          <span>Founder</span>
          <b>Human Connection Ecosystem</b>
        </div>
        <div>
          <span>Global stage</span>
          <b>Miss Globe Japan ’18</b>
        </div>
        <div>
          <span>Living lineage</span>
          <b>630 years of scholarship<br>within a 1,300-year tradition</b>
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="contact-inner reveal">
        <div class="eyebrow">Work together</div>
        <h2>Have something valuable the world cannot see clearly yet?</h2>
        <a href="mailto:sppn2zu9@gmail.com">Start a conversation <span>↗</span></a>
      </div>
    </section>
  </main>

  <footer>
    <div class="wordmark"><img class="brand-logo" src="/delta-lambda-circle-logo.jpeg" alt=""><span>CLAIR DE LUNE</span></div>
    <p>Systems · Strategy · Culture</p>
    <p>© ${new Date().getFullYear()} Clair de Lune</p>
  </footer>
`;

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu.classList.remove("open");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  document.querySelector(".nav").classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });
