import React, { useState, useEffect } from "react";
import "../styles/edtech-landing.css";
import Logo from "../assets/logo_bonaparte_black.svg";

const OLIVE = "oklch(0.89 0.17 122)";
const DARK = "#14271D";
const ORANGE = "#EC8602";
const CREAM = "#f5f0e8";
const BOOK_CALL_URL = "https://calendly.com/bonapartedigital";

const T = {
  en: {
    nav: {
      services: "Services",
      cases: "Case studies",
      why: "Why us",
      book: "Book a call",
    },
    hero: {
      h1: ["grow your", "edtech"],
      sub: "We build {growth engines} for education companies. Strategy, media, content and localization, run by the operators who scaled Nearpod, BookNook and Common Sense Media.",
      highlight: "growth engines",
      cta: "Book a strategy call",
    },
    stats: [
      { num: "$4M+", label: "ARR generated in US education" },
      { num: "1,000+", label: "Digital lessons produced" },
      { num: "84%", label: "YoY growth in lesson downloads" },
      { num: "47%", label: "YoY growth in new users" },
    ],
    services: {
      label: "/// SERVICES",
      h2: "A full-stack growth unit for education brands.",
      sub: "One team. Strategy, media, content and localization, all calibrated to EdTech decision makers: teachers, districts, parents and learners.",
    },
    cases: {
      label: "/// SELECTED WORK",
      h2: "Operators behind the EdTech brands you already know.",
      sub: "Our team has led growth, content and product work for category leaders across K-12, higher ed and lifelong learning.",
    },
    why: {
      label: "/// WHY BONAPARTE FOR EDTECH",
      h2: "We know edtech.",
      sub: "Most agencies treat EdTech like any other vertical. We've spent 15+ years inside it, shipping curriculum, scaling apps, and selling to teachers, parents, schools and districts.",
    },
    cta: {
      h2: ["Ready to grow", "your edtech?"],
      sub: "Tell us where you want to win: a market, a product line, a district, a region. We bring the strategy and the firepower.",
      primary: "Book a strategy call",
      email: "hello@bonapartedigital.com",
    },
    footer: {
      tagline: "EdTech-native growth, production and localization.",
      servicesLabel: "SERVICES",
      contactLabel: "CONTACT",
      bookCall: "Book a call",
      copy: "© 2026 Bonaparte Digital. All rights reserved.",
      division: "EdTech Division",
    },
    serviceItems: [
      { title: "Paid Media", desc: "Performance campaigns on Meta, Google, TikTok and programmatic, built around education seasonality and district buying cycles." },
      { title: "Social & Content", desc: "Always-on social, teacher-loved creative and weekly content engines that ship 30+ pieces per week at peak." },
      { title: "SEO & Organic", desc: "Technical SEO, topical authority and content programs that win the searches parents, teachers and admins actually run." },
      { title: "Branding", desc: "Positioning, identity and messaging systems for EdTech companies that need to feel both rigorous and human." },
      { title: "Program Localization", desc: "Translation and cultural adaptation of full programs and lesson libraries, built for LATAM and global rollouts." },
      { title: "Content Production", desc: "Digital lessons, gamified activities and curriculum-aligned assets, produced and curated by real educators." },
    ],
    caseItems: [
      { tag: "K-12 · Engagement", title: "Nearpod (Renaissance)", desc: "Scaled a digital lesson engine from startup to category leader. 1,000+ produced lessons, 30 weekly contents curated by educators, and 84% YoY growth in lesson downloads.", chips: ["84% YoY downloads", "47% YoY new users", "1k+ lessons"] },
      { tag: "Media Literacy · Curriculum", title: "Common Sense Media", desc: "Digitized the gold-standard intro curriculum of the most trusted name in kids' media: around 300 lessons turned from physical material into a modern digital program.", chips: ["~300 lessons", "Full digital transformation", "Gold standard partner"] },
      { tag: "K-12 · Tutoring", title: "BookNook", desc: "Built the algorithm and engineering muscle behind a tutoring platform focused on equitable access, matching students to sessions based on reading level and learning data.", chips: ["Tutoring algorithm", "Dedicated eng pod", "UI / QA / automation"] },
      { tag: "Higher Ed · LATAM", title: "Digital House", desc: "Personalized video campaign celebrating each graduate and recommending their next program, fully integrated with their CRM and brand system.", chips: ["1:1 personalized video", "Email + CRM activation", "Brand-led growth"] },
      { tag: "Kids · Product", title: "LeapFrog", desc: "Multi-language QA, content production and code assembly for a global kids learning brand, pioneering distributed EdTech production at scale.", chips: ["Multilingual QA", "Cost-optimized output", "15+ years of EdTech ops"] },
      { tag: "Gamification", title: "Time To Climb (Nearpod)", desc: "Co-created Nearpod's flagship gamified quiz: a competitive learning race that became one of the platform's most-used activities.", chips: ["Flagship game activity", "SVG-animated UX", "Classroom engagement lift"] },
    ],
    whyItems: [
      { title: "Educator-led production", desc: "Real teachers curate and quality-check the content we ship, not just designers." },
      { title: "Safe for kids by default", desc: "We know FERPA, COPPA and district procurement realities. We design for them from day one." },
      { title: "Built to compound", desc: "Growth that survives the back-to-school spike: lifecycle, SEO and brand that earn renewals." },
      { title: "Engagement over impressions", desc: "We measure learning outcomes, time in product and adoption, not just clicks." },
      { title: "Bilingual by design", desc: "Programs and campaigns built natively in English and Portuguese, ready for LATAM and US rollouts." },
      { title: "Full program localization", desc: "From a single lesson to a 300-lesson library, translated, adapted and re-shot if needed." },
    ],
    footerServices: ["Paid Media", "Social & Content", "SEO & Organic", "Branding", "Program Localization", "Content Production"],
  },

  pt: {
    nav: {
      services: "Serviços",
      cases: "Cases",
      why: "Por que nós",
      book: "Agendar call",
    },
    hero: {
      h1: ["faça crescer sua", "edtech"],
      sub: "Construímos {motores de crescimento} para empresas de educação. Estratégia, mídia, conteúdo e localização, operados por quem escalou Nearpod, BookNook e Common Sense Media.",
      highlight: "motores de crescimento",
      cta: "Agendar uma call estratégica",
    },
    stats: [
      { num: "US$ 4M+", label: "ARR gerado em educação nos EUA" },
      { num: "1.000+", label: "Aulas digitais produzidas" },
      { num: "84%", label: "Crescimento YoY em downloads de aulas" },
      { num: "47%", label: "Crescimento YoY em novos usuários" },
    ],
    services: {
      label: "/// SERVIÇOS",
      h2: "Uma unidade de crescimento full-stack para marcas de educação.",
      sub: "Um único time. Estratégia, mídia, conteúdo e localização, calibrados para os decision makers de EdTech: professores, redes de ensino, pais e alunos.",
    },
    cases: {
      label: "/// TRABALHOS SELECIONADOS",
      h2: "Os operadores por trás das EdTechs que você já conhece.",
      sub: "Nosso time liderou crescimento, conteúdo e produto para líderes em K-12, ensino superior e aprendizagem ao longo da vida.",
    },
    why: {
      label: "/// POR QUE A BONAPARTE PARA EDTECH",
      h2: "Entendemos o edtech.",
      sub: "A maioria das agências trata o EdTech como qualquer outro segmento. Passamos 15+ anos dentro dele, entregando currículo, escalando apps e vendendo para professores, pais, escolas e distritos.",
    },
    cta: {
      h2: ["Pronto para crescer", "seu edtech?"],
      sub: "Nos diga onde você quer vencer: um mercado, uma linha de produto, um distrito, uma região. Nós trazemos a estratégia e o poder de fogo.",
      primary: "Agendar uma call estratégica",
      email: "hello@bonapartedigital.com",
    },
    footer: {
      tagline: "Crescimento, produção e localização nativos em EdTech.",
      servicesLabel: "SERVIÇOS",
      contactLabel: "CONTATO",
      bookCall: "Agendar call",
      copy: "© 2026 Bonaparte Digital. Todos os direitos reservados.",
      division: "Divisão EdTech",
    },
    serviceItems: [
      { title: "Mídia Paga", desc: "Campanhas de performance em Meta, Google, TikTok e programática, pensadas para a sazonalidade educacional e os ciclos de compra das redes." },
      { title: "Social & Conteúdo", desc: "Social always-on, criativos que professores amam e motores de conteúdo com 30+ peças por semana no pico." },
      { title: "SEO & Orgânico", desc: "SEO técnico, autoridade temática e programas de conteúdo que ganham as buscas reais de pais, professores e gestores." },
      { title: "Branding", desc: "Posicionamento, identidade e sistemas de mensagem para EdTechs que precisam ser ao mesmo tempo rigorosas e humanas." },
      { title: "Localização de Programas", desc: "Tradução e adaptação cultural de programas e bibliotecas inteiras de aulas, feito para roll-outs em LATAM e globais." },
      { title: "Produção de Conteúdo", desc: "Aulas digitais, atividades gamificadas e ativos alinhados ao currículo, produzidos e curados por educadores reais." },
    ],
    caseItems: [
      { tag: "K-12 · Engajamento", title: "Nearpod (Renaissance)", desc: "Escalamos um motor de aulas digitais de startup a líder de categoria. 1.000+ aulas produzidas, 30 conteúdos semanais curados por educadores e 84% de crescimento YoY em downloads.", chips: ["84% YoY downloads", "47% YoY novos usuários", "1k+ aulas"] },
      { tag: "Media Literacy · Currículo", title: "Common Sense Media", desc: "Digitalizamos o currículo introdutório gold-standard da maior referência em mídia para crianças: cerca de 300 aulas transformadas de material físico em programa digital moderno.", chips: ["~300 aulas", "Transformação digital completa", "Parceiro gold standard"] },
      { tag: "K-12 · Tutoria", title: "BookNook", desc: "Construímos o algoritmo e o time de engenharia por trás de uma plataforma de tutoria focada em acesso equitativo, conectando alunos a sessões pelo nível de leitura e dados de aprendizagem.", chips: ["Algoritmo de tutoria", "Squad de eng dedicado", "UI / QA / automação"] },
      { tag: "Ensino Superior · LATAM", title: "Digital House", desc: "Campanha de vídeo personalizado celebrando cada graduado e recomendando o próximo programa, integrada ao CRM e ao sistema de marca.", chips: ["Vídeo 1:1 personalizado", "Ativação Email + CRM", "Crescimento orientado a marca"] },
      { tag: "Kids · Produto", title: "LeapFrog", desc: "QA multilíngue, produção de conteúdo e montagem de código para uma marca global de aprendizado infantil, pioneiros em produção EdTech distribuída em escala.", chips: ["QA multilíngue", "Output otimizado em custo", "15+ anos de operação EdTech"] },
      { tag: "Gamificação", title: "Time To Climb (Nearpod)", desc: "Co-criamos o quiz gamificado mais icônico da Nearpod: uma corrida de aprendizado competitivo que virou uma das atividades mais usadas da plataforma.", chips: ["Atividade flagship", "UX com SVG animado", "Mais engajamento em sala"] },
    ],
    whyItems: [
      { title: "Produção liderada por educadores", desc: "Professores reais curamos e revisam o conteúdo que entregamos — não apenas designers." },
      { title: "Seguro para crianças por padrão", desc: "Conhecemos a LGPD, COPPA e as realidades de compras de distritos. Projetamos para eles desde o primeiro dia." },
      { title: "Construído para compor", desc: "Crescimento que sobrevive ao pico do volta às aulas: lifecycle, SEO e marca que geram renovações." },
      { title: "Engajamento acima de impressões", desc: "Medimos resultados de aprendizado, tempo no produto e adoção — não apenas cliques." },
      { title: "Bilíngue por design", desc: "Programas e campanhas construídos nativamente em inglês e português, prontos para rollouts na LATAM e nos EUA." },
      { title: "Localização completa de programas", desc: "De uma única aula a uma biblioteca de 300 lições, traduzida, adaptada e regravada conforme necessário." },
    ],
    footerServices: ["Mídia Paga", "Social & Conteúdo", "SEO & Orgânico", "Branding", "Localização de Programas", "Produção de Conteúdo"],
  },
};

// SVG icons
const IconGrowth = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);
const IconShield = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
const IconUsers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const IconGlobe = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>);
const IconGame = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01M7 12h.01M17 12h.01"/></svg>);
const IconTranslate = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 8l6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12M7 2h1"/><path d="m22 22-5-10-5 10M14 18h6"/></svg>);
const IconGrad = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>);
const IconVideo = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>);
const IconSearch = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>);
const IconGrid = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>);
const IconLayers = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>);

const SERVICE_ICONS = [<IconGrid />, <IconUsers />, <IconSearch />, <IconLayers />, <IconTranslate />, <IconVideo />];
const WHY_ICONS = [<IconGrad />, <IconShield />, <IconGrowth />, <IconGame />, <IconGlobe />, <IconTranslate />];

const MARQUEE_CLIENTS = ["NEARPOD", "COMMON SENSE MEDIA", "BOOKNOOK", "DIGITAL HOUSE", "LEAPFROG", "TIME TO CLIMB", "RENAISSANCE"];

export const Head = () => (
  <>
    <title>Grow Your EdTech — Bonaparte Digital</title>
    <meta name="description" content="Bonaparte Digital is the full-stack growth unit for education brands. Paid media, content production, SEO & localization — built by people who've lived inside EdTech." />
    <meta property="og:title" content="Grow Your EdTech | BONAPARTE" />
    <meta property="og:description" content="15+ years inside EdTech. We grow education brands through paid media, content production, and program localization." />
    <meta property="og:url" content="https://bonapartedigital.com/grow-your-edtech" />
    <link rel="canonical" href="https://bonapartedigital.com/grow-your-edtech" />
  </>
);

export default function GrowYourEdTech() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = T[lang];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleLang = () => setLang(l => l === "en" ? "pt" : "en");

  return (
    <div className="edtech-page">
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: OLIVE, borderBottom: "1px solid rgba(20,39,29,0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="/"><Logo className="w-[140px]" /></a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="nav-link font-medium" style={{ fontSize: "1.125rem", fontFamily: "'Raleway', sans-serif" }}>{t.nav.services}</a>
            <a href="#cases" className="nav-link font-medium" style={{ fontSize: "1.125rem", fontFamily: "'Raleway', sans-serif" }}>{t.nav.cases}</a>
            <a href="#why" className="nav-link font-medium" style={{ fontSize: "1.125rem", fontFamily: "'Raleway', sans-serif" }}>{t.nav.why}</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="text-xs font-bold px-4 py-2 rounded-full border-2"
              style={{ borderColor: DARK, color: DARK, minWidth: 80, transition: "background-color 0.2s ease, color 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = DARK; e.currentTarget.style.color = OLIVE; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = DARK; }}
            >
              {lang === "en" ? "EN · PT" : "PT · EN"}
            </button>
            <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full"
              style={{ backgroundColor: DARK, color: "white", transition: "background-color 0.2s ease, color 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = DARK; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = DARK; e.currentTarget.style.color = "white"; }}
            >
              {t.nav.book}
              <svg className="w-3 h-3" style={{ transform: "rotate(-45deg)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke={DARK} strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: OLIVE, borderColor: "rgba(20,39,29,0.15)" }}>
            <a href="#services" className="text-sm font-medium" style={{ color: DARK }} onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
            <a href="#cases" className="text-sm font-medium" style={{ color: DARK }} onClick={() => setMenuOpen(false)}>{t.nav.cases}</a>
            <a href="#why" className="text-sm font-medium" style={{ color: DARK }} onClick={() => setMenuOpen(false)}>{t.nav.why}</a>
            <button onClick={toggleLang} className="text-xs font-bold px-4 py-2 rounded-full border-2 w-fit" style={{ borderColor: DARK, color: DARK }}>
              {lang === "en" ? "EN · PT" : "PT · EN"}
            </button>
            <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold inline-block px-5 py-2.5 rounded-full text-white w-fit" style={{ backgroundColor: DARK }}>
              {t.nav.book}
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ backgroundColor: OLIVE, minHeight: "100svh" }}>
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-3xl">
            <h1 className="leading-none tracking-tight mb-8" style={{ fontSize: "10rem", fontWeight: 800, color: DARK, lineHeight: 0.88, letterSpacing: "-0.03em" }}>
              {t.hero.h1[0]}<br />{t.hero.h1[1]}
            </h1>
            <p className="text-base md:text-lg font-medium mb-10 max-w-sm" style={{ color: DARK, lineHeight: 1.6 }}>
              {t.hero.sub.split(/\{([^}]+)\}/).map((part, i) =>
                i % 2 === 1
                  ? <mark key={i} style={{ backgroundColor: ORANGE, color: DARK, borderRadius: "0.2em", padding: "0 0.15em" }}>{part}</mark>
                  : part
              )}
            </p>
            <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3.5 rounded-full"
              style={{ backgroundColor: DARK, color: "white", transition: "background-color 0.2s ease, color 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = DARK; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = DARK; e.currentTarget.style.color = "white"; }}
            >
              {t.hero.cta}
              <svg className="w-3.5 h-3.5 -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: "#0c1a0f" }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {t.stats.map((s, i) => (
              <div key={i} className="px-8 py-4 first:pl-0 last:pr-0">
                <div className="font-black mb-1 tracking-tight" style={{ color: OLIVE, fontSize: "3.75rem", lineHeight: 1 }}>{s.num}</div>
                <div className="text-s font-medium tracking-wide" style={{ color: OLIVE }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ backgroundColor: ORANGE, borderTop: `2px solid ${DARK}`, borderBottom: `2px solid ${DARK}` }} className="overflow-hidden py-5">
        <div className="edtech-marquee-track" aria-hidden="true">
          {[0, 1].map(copy => (
            <span key={copy} className="flex items-center whitespace-nowrap">
              {MARQUEE_CLIENTS.map((name, i) => (
                <React.Fragment key={i}>
                  <span className="font-black uppercase tracking-wider whitespace-nowrap" style={{ color: DARK, fontSize: "1.875rem", padding: "0 2rem" }}>
                    {name}
                  </span>
                  <span style={{ color: DARK, fontSize: "1.875rem", opacity: 0.5 }}>·</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32" style={{ backgroundColor: OLIVE }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: DARK, opacity: 0.80 }}>{t.services.label}</p>
            <h2 className="font-black leading-[0.95] tracking-tight mb-8" style={{ fontSize: "clamp(40px, 6vw, 80px)", color: DARK }}>{t.services.h2}</h2>
            <p className="text-lg leading-snug max-w-lg" style={{ color: DARK, opacity: 0.80 }}>{t.services.sub}</p>
          </div>

          <div
            className="grid sm:grid-cols-2 md:grid-cols-3 rounded-3xl overflow-hidden border"
            style={{ borderColor: "rgba(20,39,29,0.18)" }}
          >
            {t.serviceItems.map((s, i) => (
              <div
                key={i}
                className="p-8 md:p-10 flex flex-col gap-6"
                style={{
                  backgroundColor: OLIVE,
                  borderRight: (i % 3 !== 2) ? `1px solid rgba(20,39,29,0.18)` : "none",
                  borderBottom: (i < 3) ? `1px solid rgba(20,39,29,0.18)` : "none",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = ORANGE}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = OLIVE}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: DARK, color: OLIVE }}>
                  {SERVICE_ICONS[i]}
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3" style={{ color: DARK }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: DARK, opacity: 0.75 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="cases" style={{ backgroundColor: CREAM }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: DARK, opacity: 0.80 }}>{t.cases.label}</p>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black max-w-2xl leading-tight tracking-tight mb-4" style={{ color: DARK }}>{t.cases.h2}</h2>
            <p className="text-sm md:text-base font-medium max-w-lg" style={{ color: DARK, opacity: 0.80 }}>{t.cases.sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.caseItems.map((c, i) => (
              <div key={i} className="group rounded-3xl p-8 md:p-10 border flex flex-col gap-6 transition-colors duration-200" style={{ backgroundColor: CREAM, borderColor: "rgba(20,39,29,0.35)" }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = OLIVE}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = CREAM}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full" style={{ backgroundColor: DARK, color: OLIVE }}>{c.tag}</span>
                  <svg className="w-5 h-5 flex-shrink-0 opacity-30 group-hover:opacity-70 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: DARK }}>
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
                <h3 className="font-black leading-tight tracking-tight" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: DARK }}>{c.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: DARK, opacity: 0.88 }}>{c.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {c.chips.map((chip, j) => (
                    <span key={j} className="text-xs font-semibold px-3 py-1.5 rounded-full border" style={{ borderColor: "rgba(20,39,29,0.22)", color: DARK }}>{chip}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" style={{ backgroundColor: OLIVE }} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: DARK, opacity: 0.80 }}>{t.why.label}</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight" style={{ color: DARK }}>{t.why.h2}</h2>
          <p className="text-base md:text-lg font-medium max-w-xl mb-20" style={{ color: DARK, opacity: 0.80, lineHeight: 1.65 }}>{t.why.sub}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
            {t.whyItems.map((item, i) => (
              <div key={i} className="py-8 border-t-2" style={{ borderColor: DARK }}>
                <div className="mb-4" style={{ color: DARK }}>{WHY_ICONS[i]}</div>
                <h4 className="text-lg font-bold mb-2" style={{ color: DARK }}>{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: DARK, opacity: 0.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ backgroundColor: OLIVE }} className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl p-12 md:p-20" style={{ backgroundColor: DARK, backgroundImage: `radial-gradient(ellipse at 90% 30%, rgba(236,134,2,0.18) 0%, transparent 60%)` }}>
          <h2 className="font-black leading-none tracking-tight mb-4" style={{ fontSize: "clamp(40px, 7vw, 88px)", color: OLIVE, lineHeight: 0.92, letterSpacing: "-0.03em" }}>
            {t.cta.h2[0]}<br />{t.cta.h2[1]}
          </h2>
          <p className="text-sm md:text-base mb-10 mt-6 max-w-lg" style={{ color: OLIVE, opacity: 0.72 }}>{t.cta.sub}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-3.5 rounded-full"
              style={{ backgroundColor: ORANGE, color: DARK, transition: "background-color 0.2s ease, color 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = OLIVE; e.currentTarget.style.color = DARK; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = ORANGE; e.currentTarget.style.color = DARK; }}
            >
              {t.cta.primary}
              <svg className="w-3.5 h-3.5 -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: OLIVE, borderTop: "1px solid rgba(20,39,29,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <Logo className="w-[130px] mb-3" />
              <p className="text-sm" style={{ color: DARK, opacity: 0.80 }}>{t.footer.tagline}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: DARK, opacity: 0.80 }}>{t.footer.servicesLabel}</p>
              <ul className="space-y-3">
                {t.footerServices.map((s) => (
                  <li key={s}><a href="#services" className="text-sm font-medium transition-opacity hover:opacity-100" style={{ color: DARK, opacity: 0.72 }}>{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: DARK, opacity: 0.45 }}>{t.footer.contactLabel}</p>
              <ul className="space-y-3">
                <li><a href="mailto:hello@bonapartedigital.com" className="text-sm font-medium transition-opacity hover:opacity-100" style={{ color: DARK, opacity: 0.72 }}>hello@bonapartedigital.com</a></li>
                <li><a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-100" style={{ color: DARK, opacity: 0.72 }}>{t.footer.bookCall}<svg className="w-3 h-3" style={{ transform: "rotate(-45deg)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 pt-8 border-t" style={{ borderColor: "rgba(20,39,29,0.15)" }}>
            <p className="text-xs" style={{ color: DARK, opacity: 0.45 }}>{t.footer.copy}</p>
            <p className="text-xs font-semibold" style={{ color: DARK, opacity: 0.45 }}>{t.footer.division}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
