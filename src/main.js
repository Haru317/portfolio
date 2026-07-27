import "./style.css";

const projects = [
  {
    category: { en: "Human Systems", ja: "人間システム" },
    index: "01",
    title: "Human Connection Ecosystem",
    subtitle: {
      en: "A structural framework for why people adopt, stay, contribute and belong.",
      ja: "人が参加し、留まり、貢献し、帰属する理由を構造化するフレームワーク。"
    },
    tags: { en: ["Behavior", "Engagement", "System"], ja: ["行動", "エンゲージメント", "システム"] },
    href: "https://hce.pages.dev/",
    status: { en: "Live", ja: "公開中" },
    featured: true
  },
  {
    category: { en: "Human Systems", ja: "人間システム" },
    index: "02",
    title: "Pendle Talent Galaxy",
    subtitle: {
      en: "A professional talent-chemistry platform for discovering and activating hidden capability.",
      ja: "埋もれた才能を発見し、組み合わせ、活性化するプロフェッショナル人材プラットフォーム。"
    },
    tags: { en: ["AI", "Talent", "Social OS"], ja: ["AI", "人材", "ソーシャルOS"] },
    href: "https://pendle-talent-galaxy.pages.dev/",
    status: { en: "Live", ja: "公開中" },
    featured: true
  },
  {
    category: { en: "Editorial Systems", ja: "編集システム" },
    index: "03",
    title: "Engage Audit",
    subtitle: {
      en: "An editorial diagnostic that reveals where attention, clarity and reader momentum break down.",
      ja: "読者の注意、理解、読み進める力がどこで途切れるかを可視化する編集診断。"
    },
    tags: { en: ["Writing", "Marketing", "Audit"], ja: ["文章", "マーケティング", "診断"] },
    href: "https://engage-audit.pages.dev/",
    status: { en: "Live", ja: "公開中" }
  },
  {
    category: { en: "Narrative", ja: "物語" },
    index: "04",
    title: "Snow Drop",
    subtitle: {
      en: "An ethical AI science-fiction project exploring agency, intimacy and the future of being human.",
      ja: "主体性、親密さ、人間であることの未来を探究する、倫理的AIサイエンスフィクション。"
    },
    tags: { en: ["Fiction", "Ethics", "AI"], ja: ["物語", "倫理", "AI"] },
    href: "https://snowdrop-ex1.pages.dev",
    status: { en: "Live", ja: "公開中" }
  },
  {
    category: { en: "Decision Systems", ja: "意思決定システム" },
    index: "05",
    title: "CEO OS",
    subtitle: {
      en: "A decision architecture for founders translating vision into priorities, capital and execution.",
      ja: "創業者のビジョンを、優先順位・資本配分・実行へ変換する意思決定アーキテクチャ。"
    },
    tags: { en: ["Strategy", "Leadership", "Operations"], ja: ["戦略", "リーダーシップ", "実行"] },
    status: { en: "In development", ja: "開発中" }
  },
  {
    category: { en: "Capital Systems", ja: "資本システム" },
    index: "06",
    title: "Investment Valuation Framework",
    subtitle: {
      en: "A framework for examining value, risk and strategic fit beyond conventional financial snapshots.",
      ja: "従来の財務スナップショットを越えて、価値・リスク・戦略適合性を捉える評価フレームワーク。"
    },
    tags: { en: ["Finance", "PE / VC", "Valuation"], ja: ["金融", "PE / VC", "価値評価"] },
    status: { en: "In development", ja: "開発中" }
  },
  {
    category: { en: "Education", ja: "教育" },
    index: "07",
    title: "Financial & Social Literacy",
    subtitle: {
      en: "A practical learning system for understanding how society, institutions and capital actually move.",
      ja: "社会・制度・資本が実際にどう動くかを理解するための実践的学習システム。"
    },
    tags: { en: ["Finance", "Education", "Society"], ja: ["金融", "教育", "社会"] },
    status: { en: "In development", ja: "開発中" }
  },
  {
    category: { en: "Culture", ja: "文化" },
    index: "08",
    title: "Bokkacha",
    subtitle: {
      en: "A contemporary cultural format connecting Japanese calligraphy, flowers and the ceremony of tea.",
      ja: "書・花・茶の営みを現代へ接続する、新しい文化形式。"
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
    role: "Value Realization Strategist",
    hero: [
      "Revealing invisible value.", \n "Designing the systems that let it grow."],
    heroBody: [
      "I translate latent human, organizational and cultural value",
      "into clear strategy, systems and measurable frameworks."
    ],
    selected: "View selected work",
    portrait: "Systems · Strategy · Culture",
    practice: {
      label: "The practice",
      lead: "Most valuable things begin without a name: an instinct, a relationship, a cultural asset, a pattern hiding across disconnected evidence.",
      follow: "My work gives that value an address, then builds the framework, product or institution through which it becomes useful.",
      methods: [
        ["Reveal", "Surface invisible capital and establish ground truth."],
        ["Connect", "Translate context and align people, incentives and decisions."],
        ["Architect", "Turn insight into a coherent model, experience or operating system."],
        ["Realize", "Test, measure and compound value through real-world use."]
      ]
    },
    work: {
      label: "Selected work",
      title: "Ideas made operational.",
      intro: "A living portfolio of frameworks, ventures and cultural experiments—each one an implementation of the same inquiry: how does hidden value become lasting value?",
      note: "The full portfolio also spans career architecture, trauma integration, ethical education, visual strategy, cultural pairing, social infrastructure and diplomatic biography.",
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
    role: "価値翻訳ストラテジスト",
    hero: ["見えない価値を明らかにし", "育つ仕組みを設計する。"],
    heroBody: [
      "人・組織・文化に潜在する価値を、",
      "明確な戦略、システム、測定可能なフレームワークへ翻訳します。"
    ],
    selected: "実績を見る",
    portrait: "仕組み · 戦略 · 文化",
    practice: {
      label: "実践方法",
      lead: "価値あるものは、名前を持たないところから始まります。直感、関係性、文化資産、そして断片的な事実の間に潜むパターン。",
      follow: "私はその価値に所在を与え、社会で機能するためのフレームワーク、プロダクト、組織へと設計します。",
      methods: [
        ["発見する", "見えない資本を可視化し、判断の基準となる事実を確立する。"],
        ["接続する", "文脈を翻訳し、人・動機・意思決定を整合させる。"],
        ["設計する", "洞察を、一貫したモデル、体験、運用システムへ構造化する。"],
        ["実現する", "実社会で検証・測定し、価値を持続的に増幅させる。"]
      ]
    },
    work: {
      label: "選定プロジェクト",
      title: "アイデアを仕組みへ。",
      intro: "フレームワーク、事業、文化実験からなる実装の記録です。共通する問いはひとつ——見えない価値を、どう持続する価値へ変えるか。",
      note: "キャリア設計、トラウマ統合、倫理教育、視覚戦略、文化的ペアリング、社会基盤、外交的バイオグラフィー策定まで扱います。",
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
    ? "Clair de Lune — systems, frameworks and ventures that reveal invisible value and turn it into measurable human and societal progress."
    : "Clair de Lune — 見えない価値を明らかにし、人と社会の測定可能な前進へ変える仕組み、フレームワーク、事業。";

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
