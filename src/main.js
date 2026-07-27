import "./style.css";

const projects = [
  {
    category: { en: "Human Systems", ja: "人間システム" },
    index: "01",
    title: "Human Connection Ecosystem",
    subtitle: {
      en: "A working model for understanding what helps people join, trust, contribute and remain part of a community.",
      ja: "人がコミュニティに参加し、信頼し、貢献し、関わり続ける条件を整理した実践モデル。"
    },
    tags: { en: ["Behavior", "Community", "Systems"], ja: ["行動", "コミュニティ", "仕組み"] },
    href: "https://hce.pages.dev/",
    status: { en: "Live", ja: "公開中" },
    featured: true
  },
  {
    category: { en: "Talent & Community", ja: "人材・コミュニティ" },
    index: "02",
    title: "Pendle Talent Galaxy",
    subtitle: {
      en: "A digital concept for making overlooked strengths visible and helping people find where their abilities can work together.",
      ja: "見過ごされている強みを可視化し、互いの能力が活きる組み合わせを見つけるためのデジタル構想。"
    },
    tags: { en: ["Talent", "Matching", "Community"], ja: ["才能", "マッチング", "コミュニティ"] },
    href: "https://pendle-talent-galaxy.pages.dev/",
    status: { en: "Live", ja: "公開中" },
    featured: true
  },
  {
    category: { en: "Editorial Diagnosis", ja: "編集診断" },
    index: "03",
    title: "Engage Audit",
    subtitle: {
      en: "A diagnostic tool that identifies where writing loses attention, clarity or momentum, and what should be improved.",
      ja: "文章のどこで注意・理解・読了意欲が途切れるかを特定し、改善点を示す診断ツール。"
    },
    tags: { en: ["Writing", "Reader Experience", "Audit"], ja: ["文章", "読者体験", "診断"] },
    href: "https://engage-audit.pages.dev/",
    status: { en: "Live", ja: "公開中" }
  },
  {
    category: { en: "Narrative & Ethics", ja: "物語・倫理" },
    index: "04",
    title: "Snow Drop",
    subtitle: {
      en: "A science-fiction story exploring agency, intimacy and the ethical questions that emerge as AI becomes part of human life.",
      ja: "AIが人間の生活に入り込むことで生まれる主体性、親密さ、倫理の問題を描くSF作品。"
    },
    tags: { en: ["Fiction", "Ethics", "AI"], ja: ["物語", "倫理", "AI"] },
    href: "https://snowdrop-ex1.pages.dev",
    status: { en: "Live", ja: "公開中" }
  },
  {
    category: { en: "Founder Decision-Making", ja: "創業者の意思決定" },
    index: "05",
    title: "CEO OS",
    subtitle: {
      en: "A developing system for helping founders turn broad vision into priorities, decisions, resource allocation and execution.",
      ja: "創業者の大きな構想を、優先順位、意思決定、資源配分、実行へ落とし込むための開発中の仕組み。"
    },
    tags: { en: ["Strategy", "Decision-Making", "Execution"], ja: ["戦略", "意思決定", "実行"] },
    status: { en: "In development", ja: "開発中" }
  },
  {
    category: { en: "Investment Learning", ja: "投資学習" },
    index: "06",
    title: "Investment Valuation Framework",
    subtitle: {
      en: "A learning framework for examining business value, risk and strategic fit beyond a single financial snapshot.",
      ja: "一時点の財務数字だけに頼らず、事業価値、リスク、戦略的な適合性を検討するための学習フレームワーク。"
    },
    tags: { en: ["Finance", "Valuation", "Strategy"], ja: ["金融", "価値評価", "戦略"] },
    status: { en: "In development", ja: "開発中" }
  },
  {
    category: { en: "Practical Education", ja: "実践教育" },
    index: "07",
    title: "Financial & Social Literacy",
    subtitle: {
      en: "A practical learning project for understanding how companies, institutions, markets and capital interact in the real world.",
      ja: "企業、制度、市場、資本が現実社会でどう関係し動くのかを理解するための実践学習プロジェクト。"
    },
    tags: { en: ["Finance", "Institutions", "Education"], ja: ["金融", "制度", "教育"] },
    status: { en: "In development", ja: "開発中" }
  },
  {
    category: { en: "Cultural Practice", ja: "文化実践" },
    index: "08",
    title: "Bokkacha",
    subtitle: {
      en: "A cultural concept that brings Japanese calligraphy, flowers and tea into one contemporary practice and shared experience.",
      ja: "書・花・茶を一つの現代的な実践と共有体験として結び直す文化構想。"
    },
    tags: { en: ["Culture", "Aesthetics", "Japan"], ja: ["文化", "美意識", "日本"] },
    status: { en: "Concept", ja: "構想中" }
  }
];

const copy = {
  en: {
    nav: ["Practice", "Projects", "Principles", "Lineage"],
    conversation: "Start a conversation",
    menu: "Open menu",
    role: "Independent Strategist & Framework Designer",
    hero: [
      "Turning complex ideas",
      "into clear, usable systems."
    ],
    heroBody: [
      "I research difficult questions, clarify what matters,",
      "and develop frameworks, learning tools and digital products around them."
    ],
    selected: "View projects",
    portrait: "Research · Strategy · Design",
    practice: {
      label: "How I work",
      lead: "My work usually begins with a question that is important but still difficult to explain, evaluate or act on.",
      follow: "I investigate the context, separate assumptions from evidence, and turn what I learn into a model, tool, experience or system that can be used and tested.",
      methods: [
        ["Investigate", "Gather context, evidence and competing explanations before defining the problem."],
        ["Clarify", "Identify the central pattern and explain it in language other people can use."],
        ["Design", "Translate the insight into a framework, learning experience, digital product or operating model."],
        ["Improve", "Test the result in use, observe what fails and revise the system."]
      ]
    },
    work: {
      label: "Selected projects",
      title: "Questions turned into working forms.",
      intro: "These projects show how I work across human behavior, community, writing, education, culture and decision-making. Some are live tools; others are active research and development.",
      note: "The portfolio is intentionally cross-disciplinary. The common thread is the same: making a difficult idea easier to understand, use, test and develop further.",
      open: "Open"
    },
    principles: {
      label: "Crest & core principles",
      lines: ["Renewal needs order.", "Order needs trust.", "Trust becomes community."],
      rows: [
        ["Delta", "Innovation for renewal"],
        ["Lambda", "Order for trust & continuity"],
        ["Circle", "Community for mutual prosperity"]
      ]
    },
    lineage: {
      label: "Lineage & practice",
      quote: ["“I design what others feel", "but cannot yet name.”"],
      bio: "Born into a centuries-old family of regional stewards, scholars and artists, within a 1,300-year living tradition that has kept the same flame alight for more than a millennium. I inherited a free, sovereign temperament, yet was raised in a world where duty, restraint and consideration for others were quietly absolute. That tension trained me to read the human dynamics beneath decisions, institutions and culture. It is now the foundation of my work: revealing invisible capital and transforming it into measurable impact.",
      credentials: [
        ["Practice", "Invisible Capital Architect", "Transforming invisible value into measurable impact"],
        ["Founder", "Human Connection Ecosystem", ""],
        ["Global stage", "Miss Globe Japan ’18", ""],
        ["Living lineage", "630 years of scholarship<br>within a 1,300-year tradition", ""]
      ]
    },
    contact: {
      label: "Work together",
      title: ["Have something valuable", "the world cannot see clearly yet?"]
    }
  },
  ja: {
    nav: ["実践", "プロジェクト", "原則", "系譜"],
    conversation: "対話をはじめる",
    menu: "メニューを開く",
    role: "独立系ストラテジスト・システムデザイナー",
    hero: ["複雑な構想を整理し、", "理解し、使える仕組みへ変える。"],
    heroBody: [
      "まだ説明しにくい問いを調べ、何が重要かを明確にし、",
      "フレームワーク、学習ツール、デジタルプロダクトとして形にしています。"
    ],
    selected: "プロジェクトを見る",
    portrait: "リサーチ · 戦略 · デザイン",
    practice: {
      label: "仕事の進め方",
      lead: "私の仕事は、重要ではあるものの、まだうまく説明できず、評価や行動につなげにくい問いから始まります。",
      follow: "背景を調べ、事実と仮説を分け、見えてきた構造を、実際に使いながら検証できるモデル、ツール、体験、仕組みへ変えます。",
      methods: [
        ["調べる", "背景、事実、異なる解釈を集め、問題を決めつけずに捉える。"],
        ["明確にする", "中心にある構造を見つけ、他者が理解し使える言葉にする。"],
        ["形にする", "理解したことを、フレームワーク、学習体験、デジタルプロダクト、運用モデルへ変える。"],
        ["改善する", "実際の利用から不具合や不足を見つけ、仕組みを更新する。"]
      ]
    },
    work: {
      label: "主なプロジェクト",
      title: "問いを、使える形へ。",
      intro: "人の行動、コミュニティ、文章、教育、文化、意思決定を扱ってきたプロジェクトです。公開中のツールと、現在開発・検証している構想を含みます。",
      note: "領域は複数にまたがりますが、共通しているのは、複雑な考えを理解しやすく、使いやすく、検証しながら育てられる形へ変えることです。",
      open: "開く"
    },
    principles: {
      label: "紋章と中核原則",
      lines: ["継承には、秩序がいる。", "秩序には、信頼がいる。", "信頼は、共同体になる。"],
      rows: [
        ["Delta", "継承のための革新"],
        ["Lambda", "信頼と継続のための秩序"],
        ["Circle", "相互繁栄のための共同体"]
      ]
    },
    lineage: {
      label: "系譜と実践",
      quote: ["「人が感じ取りながらも名づけられない概念を、", "私は可視化し翻訳し設計する。」"],
      bio: "数世紀にわたり地域の文化継承を担う武家、国学者、芸術家を輩出してきた家系に生まれ、1,300年続く生きた伝統の中で育ちました。そこでは、千年以上守られた灯火と概念の継承を絶やさないことが義務でした。私は自由で天真爛漫な気質を持ちながら、責任、節度、他者への配慮が静かに絶対視される環境で育ちました。その緊張が、意思決定・制度・文化の下に流れる人間の力学を読む感覚を磨きました。いま、その感覚は、見えない資本を見出し、測定可能なインパクトへ変える仕事の基盤になっています。",
      credentials: [
        ["実践領域", "見えない資本の設計者", "見えない価値を、測定可能なインパクトへ変える"],
        ["創設者", "Human Connection Ecosystem", ""],
        ["国際舞台", "Miss Globe Japan ’18", ""],
        ["生きた系譜", "1,300年の伝統に連なる<br>630年の学術的継承", ""]
      ]
    },
    contact: {
      label: "協働",
      title: ["世界がまだ明確に捉えられていない価値を、", "お持ちですか？"]
    }
  }
};

const app = document.querySelector("#app");

function render(lang = "en") {
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.title = lang === "en" ? "Clair de Lune — Project Portfolio" : "Clair de Lune — プロジェクトポートフォリオ";
  document.querySelector('meta[name="description"]').content = lang === "en"
    ? "Clair de Lune — independent research, strategy and systems design across human behavior, community, culture, education and decision-making."
    : "Clair de Lune — 人の行動、コミュニティ、文化、教育、意思決定を扱う、独立したリサーチ、戦略、仕組みづくりのポートフォリオ。";

  app.innerHTML = `
    <div class="grain" aria-hidden="true"></div>
    <header class="nav">
      <a class="wordmark" href="#top" aria-label="Clair de Lune home">
        <img class="brand-logo" src="/delta-lambda-circle-logo.jpeg" alt=""><span>CLAIR DE LUNE</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#practice">${t.nav[0]}</a>
        <a href="#projects">${t.nav[1]}</a>
        <a href="#principles">${t.nav[2]}</a>
        <a href="#lineage">${t.nav[3]}</a>
        <a class="nav-cta" href="mailto:sppn2zu9@gmail.com">${t.conversation} <span>↗</span></a>
      </nav>
      <div class="lang-switch" role="group" aria-label="Language">
        <button type="button" data-lang="en" aria-pressed="${lang === "en"}" class="${lang === "en" ? "active" : ""}">EN</button>
        <span>/</span>
        <button type="button" data-lang="ja" aria-pressed="${lang === "ja"}" class="${lang === "ja" ? "active" : ""}">日本語</button>
      </div>
      <button class="menu" aria-label="${t.menu}"><span></span><span></span></button>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <div class="hero-kicker reveal">Haruno Ayukai · Clair de Lune</div>
          <div class="hero-title reveal">
            <span class="role">${t.role}</span>
            <h1><span>${t.hero[0]}</span> <span>${t.hero[1]}</span></h1>
          </div>
          <div class="hero-bottom reveal">
            <p>${t.heroBody.map((line) => `<span>${line}</span>`).join("")}</p>
            <a href="#projects">${t.selected} <span>↓</span></a>
          </div>
        </div>
        <div class="hero-portrait reveal">
          <img src="/profile.jpg" alt="Haruno Ayukai" onerror="this.style.display='none'">
          <span class="portrait-caption">${t.portrait}</span>
        </div>
      </section>

      <section class="statement" id="practice">
        <div class="eyebrow reveal">${t.practice.label}</div>
        <div class="statement-copy reveal">
          <p>${t.practice.lead}</p>
          <p class="muted">${t.practice.follow}</p>
        </div>
        <div class="method reveal">
          ${t.practice.methods.map((m, i) => `<div><span>0${i + 1}</span><h3>${m[0]}</h3><p>${m[1]}</p></div>`).join("")}
        </div>
      </section>

      <section class="portfolio" id="projects">
        <div class="section-head reveal">
          <div>
            <div class="eyebrow">${t.work.label}</div>
            <h2>${t.work.title}</h2>
          </div>
          <p>${t.work.intro}</p>
        </div>
        <div class="project-list">
          ${projects.map((p) => `
            ${p.href ? `<a class="project reveal ${p.featured ? "featured" : ""}" href="${p.href}" target="_blank" rel="noreferrer" aria-label="${t.work.open} ${p.title}">` : `<article class="project reveal ${p.featured ? "featured" : ""}">`}
              <div class="project-meta"><span>${p.index}</span><span>${p.category[lang]}</span></div>
              <div class="project-main">
                <h3>${p.title}</h3>
                <p>${p.subtitle[lang]}</p>
                <div class="tags">${p.tags[lang].map((tag) => `<span>${tag}</span>`).join("")}</div>
              </div>
              <div class="project-action">
                <span class="status">${p.status[lang]}</span>
                ${p.href ? `<span class="project-arrow">↗</span>` : `<span class="no-link">—</span>`}
              </div>
            ${p.href ? `</a>` : `</article>`}
          `).join("")}
        </div>
        <p class="portfolio-note reveal">${t.work.note}</p>
      </section>

      <section class="framework" id="principles">
        <div class="framework-mark">
          <img src="/delta-lambda-circle-logo.jpeg" alt="Delta Lambda Circle crest">
        </div>
        <div class="framework-copy reveal">
          <div class="eyebrow">${t.principles.label}</div>
          <h2>${t.principles.lines.map((line) => `<span>${line}</span>`).join("")}</h2>
          <div class="principles">
            ${t.principles.rows.map((row) => `<div><b>${row[0]}</b><span>${row[1]}</span></div>`).join("")}
          </div>
        </div>
      </section>

      <section class="identity" id="lineage">
        <div class="identity-copy reveal">
          <div class="eyebrow">${t.lineage.label}</div>
          <blockquote>${t.lineage.quote.map((line) => `<span>${line}</span>`).join("")}</blockquote>
          <p class="identity-bio">${t.lineage.bio}</p>
        </div>
        <div class="identity-credentials reveal">
          ${t.lineage.credentials.map((item) => `
            <div>
              <span>${item[0]}</span>
              <b>${item[1]}</b>
              ${item[2] ? `<small>${item[2]}</small>` : ""}
            </div>
          `).join("")}
        </div>
      </section>

      <section class="contact">
        <div class="contact-inner reveal">
          <div class="eyebrow">${t.contact.label}</div>
          <h2>${t.contact.title.map((line) => `<span>${line}</span>`).join("")}</h2>
          <a href="mailto:sppn2zu9@gmail.com">${t.conversation} <span>↗</span></a>
        </div>
      </section>
    </main>

    <footer>
      <div class="wordmark"><img class="brand-logo" src="/delta-lambda-circle-logo.jpeg" alt=""><span>CLAIR DE LUNE</span></div>
      <p>${t.portrait}</p>
      <p>© ${new Date().getFullYear()} Clair de Lune</p>
    </footer>
  `;

  bindInteractions(lang);
}

function bindInteractions(lang) {
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

  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = button.dataset.lang;
      if (nextLang === lang) return;
      const scrollPosition = window.scrollY;
      render(nextLang);
      requestAnimationFrame(() => window.scrollTo(0, scrollPosition));
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  document.querySelector(".nav").classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", () => {
  document.querySelector(".nav")?.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

render("en");
