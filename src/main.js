import "./style.css";

const projects = [
  {
    category: { en: "Human Systems", ja: "人間システム" },
    index: "01",
    title: "HCE — Human Connection Ecosystem",
    subtitle: {
      en: "A framework for diagnosing why people, customers, talent and resources are present, yet fail to translate into trust, participation, contribution, retention or growth. It reveals where perception, motivation, relationships and roles fall out of alignment, helping individuals and organizations reduce friction, restore value exchange and build more sustainable value creation.",
      ja: "個人、組織、ブランド、コミュニティの中で、人材・顧客・資源・意欲は存在しているのに、信頼、参加、貢献、継続、成長へつながらない原因を特定するフレームワーク。価値交換のどこで認識・関係・動機・役割がずれているかを可視化し、離脱、停滞、分断、活用不足を、より滑らかなアライメントと持続的な価値創造へ変えます。"
    },
    tags: {
      en: ["Value Exchange", "Alignment", "Sustainable Growth"],
      ja: ["価値交換", "アライメント", "持続的成長"]
    },
    href: "https://structureofconnection.pages.dev/",
    status: { en: "Live", ja: "公開中" },
    featured: true
  },
  {
    category: { en: "Talent & Team Formation", ja: "人材発見・組成" },
    index: "02",
    title: "Pendle Talent Galaxy",
    subtitle: {
      en: "A talent discovery and team-formation platform that makes overlooked strengths, working compatibility and contribution potential visible—helping organizations reduce the mismatch between capable people and the roles or collaborators they need.",
      ja: "肩書や経歴だけでは見えない個人の強み、相性、貢献可能性を可視化し、採用、協働、プロジェクト編成で「能力はあるのに活かされない」ミスマッチを減らし、見過ごされた価値創造を促す人材発見・組成プラットフォーム。"
    },
    tags: {
      en: ["Talent Discovery", "Team Formation", "Value Creation"],
      ja: ["人材発見", "チーム組成", "価値創造"]
    },
    href: "https://pendle-talent-galaxy.pages.dev/",
    status: { en: "Live", ja: "公開中" },
    featured: true
  },
  {
    category: { en: "Editorial Diagnosis", ja: "編集診断" },
    index: "03",
    title: "Engage Audit",
    subtitle: {
      en: "An editorial diagnostic for newsletters, articles, proposals and sales content that identifies where readers lose clarity, interest or momentum—and shows how to improve completion, persuasion and conversion.",
      ja: "ニュースレター、記事、提案書、販売コンテンツが、読者のどこで理解・関心・行動意欲を失っているかを診断し、読了率、訴求力、コンバージョンを高めるための編集改善ツール。"
    },
    tags: {
      en: ["Reader Retention", "Persuasion", "Conversion"],
      ja: ["読者維持", "訴求力", "コンバージョン"]
    },
    href: "https://engage-audit.pages.dev/",
    status: { en: "Live", ja: "公開中" }
  },
  {
    category: { en: "Narrative & Ethics", ja: "物語・倫理" },
    index: "04",
    title: "Snow Drop",
    subtitle: {
      en: "A science-fiction narrative that explores how intimate relationships with AI may reshape agency, dependence, love and responsibility—making the emotional and ethical costs of technological convenience easier to confront.",
      ja: "AIとの親密な関係が、人間の自由意思、依存、愛情、責任をどう変えるのかを物語として体験させ、技術の便利さだけでは見落とされる倫理的・感情的コストを考えるためのSF作品。"
    },
    tags: {
      en: ["Human Agency", "AI Ethics", "Speculative Fiction"],
      ja: ["人間の主体性", "AI倫理", "SF"]
    },
    href: "https://snowdrop-ex1.pages.dev",
    status: { en: "Live", ja: "公開中" }
  },
  {
    category: { en: "Founder Decision-Making", ja: "創業者の意思決定" },
    index: "05",
    title: "CEO OS",
    subtitle: {
      en: "A decision system for founders who have more ideas than execution capacity, helping them translate vision into decision criteria, resource allocation and sequencing—while reducing reactive management and strategic fragmentation.",
      ja: "構想が多すぎて優先順位が定まらない創業者が、ビジョンを意思決定基準、資源配分、実行順序へ変換し、場当たり的な経営とプロジェクト分散を防ぐための経営判断システム。"
    },
    tags: {
      en: ["Founder Strategy", "Prioritization", "Execution"],
      ja: ["創業者戦略", "優先順位", "実行"]
    },
    status: { en: "In development", ja: "開発中" }
  },
  {
    category: { en: "Executive Alignment", ja: "経営アライメント" },
    index: "06",
    title: "CAO OS",
    subtitle: {
      en: "An executive alignment operating system that integrates fragmented market signals, customer needs, talent, cultural assets and organizational resources into one decision structure. It helps resolve misaligned assumptions, cross-functional fragmentation, competing priorities and stalled resource allocation—connecting hidden value to strategy, capital allocation, organizational commitment, execution and measurement.",
      ja: "企業内に散在する市場シグナル、顧客ニーズ、人材、文化資産、経営資源を一つの判断構造へ統合し、認識のずれ、部門間分断、優先順位の衝突、資源配分の停滞を解消する経営アライメントOS。見過ごされている価値を特定し、戦略、資本配分、組織合意、実行、測定までを接続することで、構想を継続的な事業成果へ変換します。"
    },
    tags: {
      en: ["Executive Alignment", "Decision Architecture", "Value Realization"],
      ja: ["経営アライメント", "意思決定設計", "価値実現"]
    },
    status: { en: "In development", ja: "開発中" },
    featured: true
  },
  {
    category: { en: "Investment Analysis", ja: "投資分析" },
    index: "07",
    title: "Investment Valuation Framework",
    subtitle: {
      en: "An investment analysis framework for evaluating business quality, competitive advantage, management risk and strategic fit alongside financial performance—helping investors and decision-makers avoid superficial or overstated valuations.",
      ja: "投資家、経営者、学習者が、財務数値だけでは見えない事業の質、競争優位、経営リスク、戦略適合性まで含めて判断し、過大評価や表面的な投資判断を避けるための分析フレームワーク。"
    },
    tags: {
      en: ["Business Quality", "Valuation", "Strategic Fit"],
      ja: ["事業品質", "価値評価", "戦略適合性"]
    },
    status: { en: "In development", ja: "開発中" }
  },
  {
    category: { en: "Practical Education", ja: "実践教育" },
    index: "08",
    title: "Financial & Social Literacy",
    subtitle: {
      en: "A practical learning program that connects companies, governments, institutions, markets and capital into one understandable system—so learners can form independent judgments about business, investing, public policy and economic news.",
      ja: "経済や金融を専門用語の暗記で終わらせず、企業、政府、制度、市場、資本の動きを一つの因果関係として理解し、ニュース、仕事、投資、社会問題について自分で判断できるようにする実践教育プログラム。"
    },
    tags: {
      en: ["Economic Literacy", "Systems Thinking", "Decision-Making"],
      ja: ["経済教養", "システム思考", "意思決定"]
    },
    status: { en: "In development", ja: "開発中" }
  },
  {
    category: { en: "Cultural Experience", ja: "文化体験" },
    index: "09",
    title: "Bokkacha",
    subtitle: {
      en: "A participatory cultural format that brings calligraphy, flowers and tea into one contemporary experience—allowing modern and international audiences to understand Japanese aesthetics, ritual and philosophy through practice rather than observation.",
      ja: "書・花・茶を別々の伝統文化として鑑賞するのではなく、一つの参加型体験へ再構成し、現代の生活者や海外の参加者が日本文化の美意識、所作、精神性を体験的に理解できる文化プログラム。"
    },
    tags: {
      en: ["Japanese Aesthetics", "Participatory Culture", "Embodied Learning"],
      ja: ["日本美学", "参加型文化", "体験学習"]
    },
    status: { en: "Concept", ja: "構想中" }
  }
];

const copy = {
  en: {
    nav: ["Practice", "Projects", "Principles", "Lineage"],
    conversation: "Start a conversation",
    menu: "Open menu",
    role: "INDEPENDENT STRATEGIST<br>FRAMEWORK & CONCEPT DESIGNER",
    hero: [
      "Giving form to what has not yet",
      "been clearly seen or understood."
    ],
    heroBody: [
      "I connect overlooked signals and patterns across human behavior, culture,",
      "organizations and markets, then turn them into frameworks, tools and concepts that help people understand, evaluate and create meaningful value."
    ],
    selected: "View projects",
    portrait: "Research · Strategy · Design",
    practice: {
      label: "How I work",
      lead: "My work begins with signals that are often felt before they are clearly defined: a recurring tension, an overlooked possibility, or a pattern that existing categories fail to explain.",
      follow: "I compare these signals across disciplines, identify the underlying structure, and translate it into a form that others can understand, examine, test and develop further.",
      methods: [
        ["Observe", "Gather overlooked signals, lived experience and contextual evidence without forcing an early conclusion."],
        ["Connect", "Compare patterns across behavior, culture, organizations, markets and other relevant fields."],
        ["Clarify", "Identify the underlying structure and make its meaning, assumptions and implications visible."],
        ["Create", "Turn the insight into a framework, diagnostic, learning experience, narrative or digital tool that can be used and refined."]
      ]
    },
    work: {
      label: "Selected projects",
      title: "Ideas made visible, usable and testable.",
      intro: "This portfolio brings together research, frameworks, diagnostics, learning tools, narratives and digital concepts. Each project starts with something insufficiently understood and develops a clearer form through which its meaning and potential value can be examined.",
      note: "The subjects vary, but the function remains consistent: identifying what existing categories overlook and creating tools that help people understand it, make better decisions and build something meaningful from it.",
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
    role: "独立系ストラテジスト<br>フレームワーク＆コンセプトデザイナー",
    hero: [
      "まだ明確に捉えられていないものに、",
      "理解し、活用できる形を与える。"
    ],
    heroBody: [
      "人の行動、文化、組織、市場に散在する見過ごされた兆候や共通パターンをつなぎ、",
      "社会が意味を理解し、価値を評価・検証・創造するための",
      "フレームワーク、ツール、構想として可視化します。"
    ],
    selected: "プロジェクトを見る",
    portrait: "リサーチ · 戦略 · デザイン",
    practice: {
      label: "仕事の進め方",
      lead: "私の仕事は、まだ明確には定義されていないものの、繰り返し現れる違和感、見過ごされた可能性、既存の分類では説明できない現象から始まります。",
      follow: "それらを異なる分野の事例や構造と照合し、背景にある共通原理を特定して、他者が理解し、検討し、試し、さらに発展させられる形へ変換します。",
      methods: [
        ["観察する", "結論を急がず、見過ごされている兆候、当事者の感覚、背景となる事実を集める。"],
        ["接続する", "人の行動、文化、組織、市場など、分野を越えて現れる類似構造を照合する。"],
        ["明確にする", "背景にある構造を特定し、その意味、前提、影響を他者が認識できる形にする。"],
        ["形にする", "得られた理解を、フレームワーク、診断、学習体験、物語、デジタルツールとして実装し、改善可能にする。"]
      ]
    },
    work: {
      label: "主なプロジェクト",
      title: "まだ見えていないものを、使える形へ。",
      intro: "リサーチ、フレームワーク、診断、学習ツール、物語、デジタル構想からなるポートフォリオです。それぞれのプロジェクトは、まだ十分に理解されていない問いを捉え、その意味と可能性を検討できる形へ発展させています。",
      note: "扱う領域は異なりますが、共通する機能は一つです。既存の分類では取りこぼされるものを特定し、人が理解し、より良く判断し、そこから意味ある価値を生み出すための道具を設計しています。",
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
    ? "Clair de Lune — independent research and strategic concept design that turns overlooked signals into frameworks, tools and ideas people can understand, evaluate and develop."
    : "Clair de Lune — 見過ごされた兆候や構造を捉え、人が理解・評価・発展させられるフレームワーク、ツール、構想へ変える独立系リサーチと戦略コンセプト設計のポートフォリオ。";

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
            ${p.href ? `<span class="project-arrow" aria-hidden="true"></span>` : `<span class="no-link">—</span>`}
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
