import React from "react";
import { FadeUp } from "../components/FadeUp";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function Comics() {
  const projects = [
    {
      name: "AIZEN",
      tag: "DEVELOPER TOOL",
      codename: "Project: Frame",
      headline: "Code, weaponized for the feed!",
      desc: "Transforms raw source code into beautiful images and gifs — the developer's answer to the splash page.",
      url: "https://aizen.netlify.app/",
      bg: "#fbbf24",
      ink: "#0a0a0a",
      sfx: "ZAP!",
      issue: "001",
    },
    {
      name: "KAMUI",
      tag: "PRODUCTIVITY",
      codename: "Project: Command",
      headline: "A Kanban with superpowers!",
      desc: "Plan, prioritize, and ship — a board built for operators who move fast and break nothing.",
      url: "https://kamui-kanban.netlify.app/",
      bg: "#3b82f6",
      ink: "#0a0a0a",
      sfx: "BAM!",
      issue: "002",
    },
    {
      name: "POTION",
      tag: "WORKSPACE",
      codename: "Project: Cortex",
      headline: "A connected workspace!",
      desc: "Better, faster, more fluid work. Pages that link, blocks that remember, a workspace that feels alive.",
      url: "https://potion-write.vercel.app/",
      bg: "#f5f5f5",
      ink: "#0a0a0a",
      sfx: "WHAM!",
      issue: "003",
    },
    {
      name: "POKÉDEX",
      tag: "EXPLORER",
      codename: "Project: Codex",
      headline: "Catalogue every creature!",
      desc: "A compendium of creatures, lore, and stats. Filter by type, study by detail, master the index.",
      url: "https://pokedex-polly.netlify.app/",
      bg: "#dc2626",
      ink: "#fef3c7",
      sfx: "POW!",
      issue: "004",
    },
    {
      name: "EVO GYM",
      tag: "LANDING",
      codename: "Project: Forge",
      headline: "Motion-led storytelling!",
      desc: "A fitness landing experience where every scroll builds momentum. Strength for body and browser.",
      url: "https://evogymm.netlify.app/",
      bg: "#f97316",
      ink: "#0a0a0a",
      sfx: "KRASH!",
      issue: "005",
    },
    {
      name: "NIKE STORE",
      tag: "E-COMMERCE",
      codename: "Project: Runway",
      headline: "Just scroll it!",
      desc: "A product-focused storefront with bold typography and motion hooks. Ready to convert on contact.",
      url: "https://nikestore-polly.netlify.app/",
      bg: "#18181b",
      ink: "#fef3c7",
      sfx: "BOOM!",
      issue: "006",
    },
    {
      name: "CRYPTO HUNTER",
      tag: "FINTECH",
      codename: "Project: Ledger",
      headline: "Live markets, decoded!",
      desc: "Track trending currencies with real-time pricing, sorting, and a clean data view for the street.",
      url: "https://crytocurrencyhunter.netlify.app/",
      bg: "#16a34a",
      ink: "#0a0a0a",
      sfx: "ZOOM!",
      issue: "007",
    },
    {
      name: "RED EYE",
      tag: "QUIZ",
      codename: "Project: Oracle",
      headline: "What should you watch?!",
      desc: "A question-based system that reveals your cinematic DNA — one answer at a time.",
      url: "https://red-eye.netlify.app/",
      bg: "#7c3aed",
      ink: "#fef3c7",
      sfx: "SNIKT!",
      issue: "008",
    },
    {
      name: "PORTFOLIO V3",
      tag: "SOURCE",
      codename: "Project: Origin",
      headline: "This is the site!",
      desc: "The current portfolio, engineered with Next.js and Tailwind CSS. The book you're reading!",
      url: "https://pranjalshikhar.vercel.app/",
      bg: "#0ea5e9",
      ink: "#0a0a0a",
      sfx: "THWIP!",
      issue: "009",
    },
  ];

  const experience = [
    {
      company: "ACCENTURE",
      role: "Senior Analyst",
      period: "MAY 2026 — PRESENT",
      active: true,
      insignia: "A",
      classification: "LEVEL 7 · ACTIVE",
    },
    {
      company: "INFOSYS",
      role: "Digital Specialist Engineer L1",
      period: "JAN 2026 — MAY 2026",
      active: false,
      insignia: "I",
      classification: "LEVEL 6 · ARCHIVED",
    },
    {
      company: "INFOSYS",
      role: "Digital Specialist Engineer",
      period: "JUL 2022 — DEC 2025",
      active: false,
      insignia: "I",
      classification: "LEVEL 5 · ARCHIVED",
    },
  ];

  const skillsFull = [
    {
      title: "LANGUAGES",
      subtitle: "THE CORE ARSENAL!",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "C"],
      bg: "#fbbf24",
      sfx: "⚡",
    },
    {
      title: "FRAMEWORKS",
      subtitle: "FIELD SPECIALTY!",
      items: ["React.js", "Next.js", "Redux Toolkit", "Angular", "ReactFlow"],
      bg: "#dc2626",
      sfx: "💥",
    },
    {
      title: "STYLING",
      subtitle: "SURFACE CRAFT!",
      items: ["Tailwind CSS", "shadcn/ui", "Material UI", "Bootstrap"],
      bg: "#3b82f6",
      sfx: "✨",
    },
    {
      title: "BACKEND & APIs",
      subtitle: "SIGNAL LAYER!",
      items: ["REST APIs", "GraphQL", "API contracts", ".NET Core"],
      bg: "#16a34a",
      sfx: "📡",
    },
    {
      title: "DATABASES",
      subtitle: "THE DATA VAULT!",
      items: ["MySQL", "Azure CosmosDB"],
      bg: "#f97316",
      sfx: "🗄️",
    },
    {
      title: "CLOUD & DEVOPS",
      subtitle: "SKY OPERATIONS!",
      items: ["Microsoft Azure", "Blob Storage", "Azure Pipelines", "Firebase"],
      bg: "#7c3aed",
      sfx: "☁️",
    },
    {
      title: "TESTING",
      subtitle: "THE DEFENSE GRID!",
      items: ["Jest", "React Testing Library", "Unit tests", "Integration"],
      bg: "#0ea5e9",
      sfx: "🛡️",
    },
    {
      title: "DESIGN & COLLAB",
      subtitle: "BRIDGE OPERATIONS!",
      items: ["Figma", "UI/UX prototyping", "Handoff", "Git", "VS Code"],
      bg: "#ec4899",
      sfx: "✏️",
    },
    {
      title: "ENGINEERING",
      subtitle: "THE DOCTRINE!",
      items: [
        "Component architecture",
        "Design principles",
        "Performance",
        "Scalable frontend",
      ],
      bg: "#fbbf24",
      sfx: "🧠",
    },
  ];

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundColor: "#f5e9cf",
        color: "#0a0a0a",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Bowlby+One&family=Luckiest+Guy&family=Permanent+Marker&family=Inter:wght@400;500;600;700;800;900&display=swap');

        * { -webkit-font-smoothing: antialiased; }

        .bangers { font-family: 'Bangers', 'Impact', sans-serif; letter-spacing: 0.04em; }
        .bowlby { font-family: 'Bowlby One', 'Impact', sans-serif; letter-spacing: 0.01em; }
        .lucky { font-family: 'Luckiest Guy', 'Bangers', sans-serif; letter-spacing: 0.03em; }
        .marker { font-family: 'Permanent Marker', cursive; }
        .inter { font-family: 'Inter', sans-serif; }

        /* ============== NEWSPRINT BG ============== */
        .newsprint {
          background-color: #f5e9cf;
          background-image:
            radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.04), transparent 50%),
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.3 0 0 0 0 0.1 0 0 0 0.2 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          background-size: 100% 100%, 200px 200px;
        }

        /* ============== HALFTONE DOTS (Ben-Day) ============== */
        .dots-red {
          background-image: radial-gradient(circle, #dc2626 1.5px, transparent 2px);
          background-size: 8px 8px;
        }
        .dots-yellow {
          background-image: radial-gradient(circle, #fbbf24 1.5px, transparent 2px);
          background-size: 8px 8px;
        }
        .dots-blue {
          background-image: radial-gradient(circle, #3b82f6 1.5px, transparent 2px);
          background-size: 8px 8px;
        }
        .dots-black {
          background-image: radial-gradient(circle, #0a0a0a 1px, transparent 1.5px);
          background-size: 6px 6px;
        }
        .dots-large {
          background-image: radial-gradient(circle, #0a0a0a 2.5px, transparent 3px);
          background-size: 14px 14px;
        }

        /* ============== COMIC PANEL ============== */
        .panel-comic {
          border: 4px solid #0a0a0a;
          box-shadow: 6px 6px 0 #0a0a0a, 10px 10px 0 rgba(10,10,10,0.15);
          position: relative;
          transition: all 0.2s ease;
        }
        .panel-comic:hover {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0 #0a0a0a, 14px 14px 0 rgba(10,10,10,0.15);
        }

        .panel-thin {
          border: 3px solid #0a0a0a;
          box-shadow: 4px 4px 0 #0a0a0a;
        }

        /* ============== SPEECH BUBBLE ============== */
        .speech {
          background: #ffffff;
          border: 3px solid #0a0a0a;
          border-radius: 24px;
          position: relative;
          padding: 16px 22px;
          box-shadow: 4px 4px 0 #0a0a0a;
        }
        .speech::before {
          content: '';
          position: absolute;
          bottom: -22px;
          left: 40px;
          width: 0; height: 0;
          border: 12px solid transparent;
          border-top-color: #0a0a0a;
          border-bottom: 0;
        }
        .speech::after {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 43px;
          width: 0; height: 0;
          border: 9px solid transparent;
          border-top-color: #ffffff;
          border-bottom: 0;
        }

        /* ============== THOUGHT BUBBLE (cloud) ============== */
        .thought-bubble {
          background: #ffffff;
          border: 3px solid #0a0a0a;
          border-radius: 60px;
          padding: 14px 24px;
          position: relative;
          box-shadow: 4px 4px 0 #0a0a0a;
        }

        /* ============== CAPTION BOX (yellow) ============== */
        .caption-box {
          background: #fbbf24;
          border: 3px solid #0a0a0a;
          padding: 12px 18px;
          position: relative;
          box-shadow: 4px 4px 0 #0a0a0a;
          font-family: 'Bangers', sans-serif;
          letter-spacing: 0.03em;
          line-height: 1.2;
        }

        /* ============== STARBURST (POW! shape) ============== */
        .starburst {
          position: relative;
          background: #fbbf24;
          color: #0a0a0a;
          padding: 24px 36px;
          font-family: 'Bangers', sans-serif;
          font-size: 3rem;
          letter-spacing: 0.02em;
          text-align: center;
          text-shadow: 3px 3px 0 #0a0a0a;
          -webkit-text-stroke: 2px #0a0a0a;
          /* 24-point star */
          clip-path: polygon(
            50% 0%, 55% 8%, 65% 5%, 62% 15%, 72% 12%, 66% 22%, 78% 22%, 70% 30%,
            82% 33%, 72% 38%, 83% 47%, 72% 50%, 83% 58%, 72% 62%, 82% 72%, 70% 72%,
            78% 83%, 66% 80%, 72% 92%, 62% 88%, 65% 98%, 55% 92%, 50% 100%, 45% 92%,
            35% 98%, 38% 88%, 28% 92%, 34% 80%, 22% 83%, 30% 72%, 18% 72%, 28% 62%,
            17% 58%, 28% 50%, 17% 47%, 28% 38%, 18% 33%, 30% 30%, 22% 22%, 34% 22%,
            28% 12%, 38% 15%, 35% 5%, 45% 8%
          );
          filter: drop-shadow(4px 4px 0 #0a0a0a);
        }

        /* ============== EXPLOSION BURST shape ============== */
        .burst-shape {
          clip-path: polygon(
            50% 0%, 58% 15%, 75% 8%, 68% 25%, 90% 22%, 75% 40%, 100% 45%, 80% 55%,
            95% 75%, 72% 70%, 80% 92%, 60% 80%, 50% 100%, 40% 80%, 20% 92%, 28% 70%,
            5% 75%, 20% 55%, 0% 45%, 25% 40%, 10% 22%, 32% 25%, 25% 8%, 42% 15%
          );
        }

        /* ============== SFX TEXT STYLING ============== */
        .sfx-text {
          font-family: 'Bangers', sans-serif;
          -webkit-text-stroke: 3px #0a0a0a;
          color: #fef3c7;
          text-shadow: 4px 4px 0 #0a0a0a, -1px -1px 0 #0a0a0a, 1px -1px 0 #0a0a0a, -1px 1px 0 #0a0a0a;
          letter-spacing: 0.04em;
          display: inline-block;
          transform: rotate(-4deg);
        }

        /* ============== JAGGED MOTION LINES ============== */
        @keyframes shake {
          0%, 100% { transform: translate(0, 0) rotate(-3deg); }
          25% { transform: translate(-2px, 1px) rotate(-4deg); }
          50% { transform: translate(2px, -1px) rotate(-2deg); }
          75% { transform: translate(-1px, 2px) rotate(-4deg); }
        }
        .shake-slow { animation: shake 2s ease-in-out infinite; }

        /* ============== STAMP ============== */
        .stamp {
          border: 4px solid #dc2626;
          color: #dc2626;
          padding: 8px 20px;
          transform: rotate(-6deg);
          font-family: 'Bangers', sans-serif;
          letter-spacing: 0.1em;
          display: inline-block;
          background: rgba(254, 243, 199, 0.8);
        }

        /* ============== TITLE MASSIVE ============== */
        .title-huge {
          font-family: 'Bowlby One', sans-serif;
          font-size: clamp(3.5rem, 14vw, 12rem);
          line-height: 0.85;
          letter-spacing: 0.01em;
          color: #fbbf24;
          -webkit-text-stroke: 4px #0a0a0a;
          text-shadow:
            6px 6px 0 #dc2626,
            8px 8px 0 #0a0a0a;
        }

        /* ============== ACTION LINES (conic radial) ============== */
        .action-burst {
          background-image: repeating-conic-gradient(
            from 0deg,
            #fbbf24 0deg,
            #fbbf24 6deg,
            #0a0a0a 6deg,
            #0a0a0a 7deg,
            #fbbf24 7deg,
            #fbbf24 13deg,
            transparent 13deg,
            transparent 14deg
          );
        }

        .action-yellow {
          background-image: repeating-conic-gradient(
            from 0deg,
            #fde68a 0deg,
            #fde68a 4deg,
            #fbbf24 4deg,
            #fbbf24 6deg
          );
        }

        /* ============== DIAGONAL STRIPES (speed lines) ============== */
        .speed-lines {
          background-image: repeating-linear-gradient(
            -25deg,
            #0a0a0a 0,
            #0a0a0a 3px,
            transparent 3px,
            transparent 14px
          );
        }

        /* ============== ISSUE STRIP (like comic header) ============== */
        .issue-strip {
          background: linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
          color: #fef3c7;
          border-bottom: 4px solid #0a0a0a;
        }

        /* ============== MARQUEE ============== */
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marq { animation: slide 30s linear infinite; }

        /* ============== NAV ============== */
        .nav-comic {
          background: #fbbf24;
          border-bottom: 4px solid #0a0a0a;
          box-shadow: 0 4px 0 #0a0a0a;
        }

        /* ============== DIVIDER ============== */
        .comic-hr {
          height: 6px;
          background: #0a0a0a;
          position: relative;
        }
        .comic-hr::after {
          content: '';
          position: absolute;
          top: -2px; left: 0; right: 0;
          height: 2px;
          background: #dc2626;
        }

        /* ============== TAG ============== */
        .tag-comic {
          display: inline-block;
          padding: 4px 10px;
          background: #0a0a0a;
          color: #fbbf24;
          font-family: 'Bangers', sans-serif;
          letter-spacing: 0.08em;
          font-size: 12px;
          border: 2px solid #0a0a0a;
          transform: rotate(-1deg);
        }

        /* ============== BIG NUMBER ============== */
        .giant-num {
          font-family: 'Bowlby One', sans-serif;
          color: #fbbf24;
          -webkit-text-stroke: 3px #0a0a0a;
          text-shadow: 4px 4px 0 #dc2626, 6px 6px 0 #0a0a0a;
          line-height: 1;
        }

        /* Floating sfx random positions */
        .float-sfx {
          position: absolute;
          pointer-events: none;
          opacity: 0.8;
        }
      `}</style>

      {/* NEWSPRINT BG layer */}
      <div className="fixed inset-0 newsprint pointer-events-none" />
      {/* Global halftone dot overlay */}
      <div className="fixed inset-0 dots-black pointer-events-none opacity-[0.04]" />

      {/* ============== NAV ============== */}
      <nav className="nav-comic sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 h-12 flex items-center justify-between">
          <div className="bangers text-xl" style={{ letterSpacing: "0.08em" }}>
            ★ PRANJAL COMICS ★
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-5 bangers text-sm tracking-wider">
              <a
                href="#origin"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                ORIGIN
              </a>
              <a
                href="#powers"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                POWERS
              </a>
              <a
                href="#issues"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                ISSUES
              </a>
              <a
                href="#record"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                RECORD
              </a>
              <a
                href="#fanmail"
                className="hidden sm:inline hover:text-red-700 transition"
              >
                FAN MAIL
              </a>
            </div>
            <ThemeSwitcher variant="comic" />
          </div>
        </div>
      </nav>

      {/* ============== ISSUE HEADER STRIP ============== */}
      <div className="issue-strip relative z-10">
        <div className="max-w-[1200px] mx-auto px-5 py-3 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <div
              className="bangers text-2xl"
              style={{ color: "#fbbf24", letterSpacing: "0.1em" }}
            >
              APR 2026 ★ No. 001
            </div>
            <div className="bangers text-sm opacity-80">
              ONE WIZARD · TEN SKILLS · NINE MISSIONS · ONE FRONTEND
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bangers text-lg px-3 py-0.5 bg-yellow-400 text-black">
              ₹ 35 / FREE
            </div>
            <div className="bangers text-sm">
              APPROVED ★ BY THE CODE AUTHORITY
            </div>
          </div>
        </div>
      </div>

      {/* ============== HERO / COVER ============== */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-5 pt-12 pb-8">
        <div
          className="panel-comic relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
          }}
        >
          {/* Action burst bg */}
          <div className="absolute inset-0 action-burst opacity-25" />
          {/* Halftone dots bottom left */}
          <div className="absolute bottom-0 left-0 w-60 h-60 dots-red opacity-40" />
          {/* Speed lines top right */}
          <div className="absolute top-0 right-0 w-48 h-48 speed-lines opacity-15" />

          <div className="relative p-8 md:p-16">
            {/* Caption box top */}
            <div className="caption-box inline-block text-[14px] md:text-[16px] mb-6">
              ★ ORIGIN STORY: CHAPTER ONE ★<br />
              MEANWHILE, IN PUNE, INDIA...
            </div>

            {/* TITLE */}
            <h1 className="title-huge">PRANJAL!</h1>
            <h2
              className="bowlby mt-4"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)",
                color: "#0a0a0a",
                lineHeight: 1,
                textShadow: "3px 3px 0 #dc2626",
              }}
            >
              THE INTERFACE
              <br />
              ENGINEER!
            </h2>

            {/* POW starburst floating */}
            <div className="absolute top-8 right-8 hidden md:block shake-slow">
              <div
                className="starburst"
                style={{ fontSize: "2.2rem", padding: "40px 30px" }}
              >
                3+
                <br />
                YRS!
              </div>
            </div>

            {/* Speech bubble */}
            <div className="mt-10 max-w-xl">
              <div className="speech">
                <p className="marker text-[18px] md:text-[22px] leading-tight">
                  "3 years in the field! A frontend-focused software engineer
                  turning complex AI/ML workflows into interfaces designed for
                  the fastest user in the universe!"
                </p>
                <div
                  className="bangers text-[12px] mt-2 text-right"
                  style={{ color: "#dc2626" }}
                >
                  — OUR HERO!
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { k: "3+", v: "YEARS!", color: "#dc2626" },
                { k: "~35%", v: "LIGHTER BUNDLES!", color: "#3b82f6" },
                { k: "95%", v: "TEST COVERAGE!", color: "#16a34a" },
                { k: "9", v: "ISSUES SHIPPED!", color: "#7c3aed" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="panel-thin p-4 text-center relative"
                  style={{ background: "#fef3c7" }}
                >
                  <div
                    className="bowlby text-4xl md:text-5xl"
                    style={{
                      color: s.color,
                      WebkitTextStroke: "2px #0a0a0a",
                      textShadow: "3px 3px 0 #0a0a0a",
                    }}
                  >
                    {s.k}
                  </div>
                  <div
                    className="bangers text-xs mt-1"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== MARQUEE: ONOMATOPOEIA ============== */}
      <div className="relative z-10 my-6">
        <div className="comic-hr" />
        <div className="bg-black py-4 overflow-hidden">
          <div className="flex marq whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 pr-6">
                {[
                  "POW!",
                  "REACT.JS",
                  "BAM!",
                  "TYPESCRIPT",
                  "WHAM!",
                  "NEXT.JS",
                  "ZAP!",
                  "AI INTERFACES",
                  "KAPOW!",
                  "REDUX",
                  "BOOM!",
                  "TAILWIND",
                  "SNIKT!",
                  "AZURE",
                  "THWIP!",
                  "GRAPHQL",
                ].map((w, j) => (
                  <React.Fragment key={j}>
                    <span
                      className="bangers text-4xl"
                      style={{
                        color: [
                          "#fbbf24",
                          "#dc2626",
                          "#3b82f6",
                          "#16a34a",
                          "#f97316",
                        ][j % 5],
                        WebkitTextStroke: "2px #0a0a0a",
                        textShadow: "3px 3px 0 #0a0a0a",
                        transform: `rotate(${(j % 2 === 0 ? -1 : 1) * (2 + (j % 3))}deg)`,
                        display: "inline-block",
                      }}
                    >
                      {w}
                    </span>
                    <span className="text-2xl" style={{ color: "#fbbf24" }}>
                      ★
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="comic-hr" />
      </div>

      {/* ============== ORIGIN STORY / SUMMARY ============== */}
      <section
        id="origin"
        className="relative z-10 max-w-[1200px] mx-auto px-5 py-12"
      >
        <ComicChapter num="01" label="ORIGIN STORY" sfx="ORIGIN!" />

        <FadeUp>
          <div
            className="panel-comic p-8 md:p-12 relative overflow-hidden"
            style={{ background: "#fef3c7" }}
          >
            {/* Corner dots */}
            <div className="absolute top-0 right-0 w-40 h-40 dots-red opacity-60" />
            <div className="absolute bottom-0 left-0 w-32 h-32 dots-blue opacity-50" />

            {/* CLASSIFIED stamp */}
            <div className="absolute top-6 right-6 stamp text-sm">
              TRUE STORY!
            </div>

            <div className="relative">
              <div className="caption-box inline-block mb-6 text-[15px]">
                ★ OUR TALE BEGINS... ★
              </div>

              <h2
                className="bangers leading-[0.95] mb-8"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
              >
                A FULL-STACK-FOCUSED
                <br />
                <span
                  style={{ color: "#dc2626", WebkitTextStroke: "1px #0a0a0a" }}
                >
                  SOFTWARE ENGINEER
                </span>
                <br />
                WITH{" "}
                <span
                  style={{
                    background: "#fbbf24",
                    padding: "0 12px",
                    border: "3px solid #0a0a0a",
                    display: "inline-block",
                    transform: "rotate(-2deg)",
                    boxShadow: "4px 4px 0 #0a0a0a",
                  }}
                >
                  3+ YEARS
                </span>{" "}
                OF EXPERIENCE!
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div>
                  <div className="tag-comic mb-3">★ FIELD REPORT ★</div>
                  <p className="inter text-[16px] md:text-[18px] leading-[1.6] font-medium">
                    Strong expertise in{" "}
                    <strong style={{ background: "#fbbf24", padding: "0 4px" }}>
                      React, TypeScript, and Next.js
                    </strong>
                    , with hands-on experience translating complex AI/ML
                    workflows into intuitive user experiences. Currently
                    deployed as Digital Specialist Engineer, developing
                    enterprise-grade applications and AI-driven dashboards.
                  </p>
                </div>
                <div>
                  <div
                    className="tag-comic mb-3"
                    style={{ background: "#dc2626", color: "#fef3c7" }}
                  >
                    ★ THE MISSION ★
                  </div>
                  <p className="inter text-[16px] md:text-[18px] leading-[1.6] font-medium">
                    A proven collaborator across the guilds of{" "}
                    <strong
                      style={{
                        background: "#3b82f6",
                        color: "#fef3c7",
                        padding: "0 4px",
                      }}
                    >
                      design, backend, and product
                    </strong>{" "}
                    — with an unwavering focus on clean, testable, and
                    performance-optimized code. Building component-driven
                    architectures that scale.
                  </p>
                </div>
              </div>

              {/* Bottom sfx */}
              <div className="mt-10 text-center">
                <div
                  className="sfx-text text-7xl md:text-8xl"
                  style={{ color: "#dc2626" }}
                >
                  AND SO... IT BEGINS!
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ============== TWO-PANEL ABOUT ============== */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-5 py-12">
        <ComicChapter num="02" label="POWERS & ABILITIES" sfx="POWER UP!" />

        <div className="grid grid-cols-12 gap-5">
          <FadeUp className="col-span-12 md:col-span-7">
            <div
              className="panel-comic p-8 md:p-10 relative min-h-[500px] flex flex-col justify-between overflow-hidden"
              style={{ background: "#3b82f6", color: "#fef3c7" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 dots-yellow opacity-50" />
              <div className="absolute bottom-0 left-0 w-32 h-32 speed-lines opacity-20" />

              <div className="relative">
                <div
                  className="caption-box inline-block mb-5"
                  style={{ background: "#fbbf24", color: "#0a0a0a" }}
                >
                  ★ POWER #01: COMPONENT CRAFT ★
                </div>
                <h3
                  className="bangers text-4xl md:text-6xl leading-[0.95] mb-6"
                  style={{
                    WebkitTextStroke: "2px #0a0a0a",
                    textShadow: "4px 4px 0 #0a0a0a",
                  }}
                >
                  COMPONENT-DRIVEN!
                  <br />
                  PIXEL-PERFECT!
                  <br />
                  <span style={{ color: "#fbbf24" }}>PERFORMANCE-FIRST!</span>
                </h3>
              </div>

              <div
                className="relative thought-bubble"
                style={{ color: "#0a0a0a", maxWidth: "440px" }}
              >
                <p className="inter text-[15px] md:text-[16px] leading-[1.5] font-medium">
                  Strong experience designing component-driven architectures and
                  reusable UI systems. Fluent in the React ecosystem — Hooks,
                  Redux Toolkit, Context API, Next.js — and translating Figma
                  into pixel-exact, responsive, accessible interfaces.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="col-span-12 md:col-span-5">
            <div
              className="panel-comic p-8 md:p-10 relative min-h-[500px] flex flex-col justify-between overflow-hidden"
              style={{ background: "#dc2626", color: "#fef3c7" }}
            >
              <div className="absolute inset-0 action-burst opacity-20" />
              <div className="absolute top-0 right-0 w-32 h-32 dots-yellow opacity-50" />

              <div className="relative">
                <div className="caption-box inline-block mb-5">
                  ★ POWER #02: AI INTERFACES ★
                </div>
                <h3
                  className="bangers text-4xl md:text-5xl leading-[0.95] mb-6"
                  style={{
                    WebkitTextStroke: "2px #0a0a0a",
                    textShadow: "4px 4px 0 #0a0a0a",
                  }}
                >
                  AI INTERFACES!
                  <br />
                  <span style={{ color: "#fbbf24" }}>LIVE DASHBOARDS!</span>
                  <br />
                  REAL-TIME DATA!
                </h3>
              </div>

              <div
                className="relative thought-bubble"
                style={{ color: "#0a0a0a", maxWidth: "380px" }}
              >
                <p className="inter text-[15px] leading-[1.5] font-medium">
                  Built interactive dashboards for AI agent pipelines — live
                  logs, latency metrics, execution states. Integrated REST and
                  GraphQL APIs hand-in-hand with backend teams.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============== KPI POW PANELS ============== */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-5 py-12">
        <div className="grid grid-cols-12 gap-5">
          {[
            {
              k: "~35%",
              v: "LIGHTER BUNDLES!",
              desc: "Lazy loading, memoization, code splitting.",
              bg: "#dc2626",
              fg: "#fef3c7",
              sfx: "ZOOM!",
            },
            {
              k: "95%",
              v: "TEST COVERAGE!",
              desc: "Peak Jest + React Testing Library coverage.",
              bg: "#16a34a",
              fg: "#fef3c7",
              sfx: "SHIELD!",
            },
            {
              k: "3+",
              v: "YEARS ACTIVE!",
              desc: "Shipping production interfaces non-stop.",
              bg: "#7c3aed",
              fg: "#fef3c7",
              sfx: "BAM!",
            },
          ].map((s, i) => (
            <FadeUp key={i} className="col-span-12 md:col-span-4">
              <div
                className="panel-comic p-8 relative min-h-[340px] flex flex-col justify-between overflow-hidden"
                style={{ background: s.bg, color: s.fg }}
              >
                <div className="absolute inset-0 dots-yellow opacity-20" />
                <div
                  className="absolute -top-4 -right-4 sfx-text text-3xl"
                  style={{ transform: "rotate(12deg)" }}
                >
                  {s.sfx}
                </div>

                <div className="relative flex items-start justify-between">
                  <div
                    className="tag-comic"
                    style={{ background: "#fef3c7", color: "#0a0a0a" }}
                  >
                    STAT #0{i + 1}
                  </div>
                </div>

                <div className="relative">
                  <div className="giant-num text-8xl md:text-9xl">{s.k}</div>
                  <div
                    className="bangers text-2xl mt-2"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {s.v}
                  </div>
                  <p className="inter text-[14px] mt-3 font-medium opacity-90">
                    {s.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ============== ISSUES / PROJECTS ============== */}
      <section
        id="issues"
        className="relative z-10 max-w-[1200px] mx-auto px-5 py-12"
      >
        <ComicChapter
          num="03"
          label="THE COMPLETE COLLECTION"
          sfx="9 ISSUES!"
        />

        <div className="grid grid-cols-12 gap-5">
          {projects.slice(0, 2).map((p, i) => (
            <FadeUp key={p.name} className="col-span-12 md:col-span-6">
              <ProjectPanel p={p} size="large" />
            </FadeUp>
          ))}
          {projects.slice(2, 5).map((p, i) => (
            <FadeUp key={p.name} className="col-span-12 md:col-span-4">
              <ProjectPanel p={p} size="medium" />
            </FadeUp>
          ))}
          {projects.slice(5, 9).map((p, i) => (
            <FadeUp key={p.name} className="col-span-6 md:col-span-3">
              <ProjectPanel p={p} size="small" />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ============== ARSENAL / SKILLS ============== */}
      <section
        id="powers"
        className="relative z-10 max-w-[1200px] mx-auto px-5 py-12"
      >
        <ComicChapter num="04" label="ALL SKILLS REVEALED!" sfx="SKILLS!" />

        <div className="grid grid-cols-12 gap-5">
          {skillsFull.map((s, i) => {
            const spanMap = [
              "col-span-12 md:col-span-6",
              "col-span-12 md:col-span-6",
              "col-span-12 md:col-span-4",
              "col-span-12 md:col-span-4",
              "col-span-12 md:col-span-4",
              "col-span-12 md:col-span-6",
              "col-span-12 md:col-span-6",
              "col-span-12 md:col-span-6",
              "col-span-12 md:col-span-6",
            ];
            const darkFg =
              ["#fbbf24", "#3b82f6", "#dc2626", "#f97316"].includes(s.bg) ||
              s.bg === "#0a0a0a" ||
              s.bg === "#7c3aed" ||
              s.bg === "#16a34a" ||
              s.bg === "#ec4899" ||
              s.bg === "#0ea5e9";
            const textColor =
              s.bg === "#fbbf24" || s.bg === "#f97316" ? "#0a0a0a" : "#fef3c7";

            return (
              <FadeUp key={s.title} className={spanMap[i]}>
                <div
                  className="panel-comic p-6 md:p-8 relative min-h-[280px] flex flex-col justify-between overflow-hidden"
                  style={{ background: s.bg, color: textColor }}
                >
                  {/* Halftone decoration */}
                  <div className="absolute top-0 right-0 w-28 h-28 dots-yellow opacity-30" />
                  <div
                    className="absolute -bottom-4 -left-4 text-5xl"
                    style={{ transform: "rotate(-12deg)", opacity: 0.25 }}
                  >
                    {s.sfx}
                  </div>

                  <div className="relative flex items-start justify-between">
                    <div>
                      <div
                        className="tag-comic mb-3"
                        style={{ background: "#0a0a0a", color: "#fbbf24" }}
                      >
                        POWER #{String(i + 1).padStart(2, "0")}
                      </div>
                      <div
                        className="bangers text-sm"
                        style={{ letterSpacing: "0.1em", opacity: 0.9 }}
                      >
                        {s.subtitle}
                      </div>
                    </div>
                    <div className="text-4xl">{s.sfx}</div>
                  </div>

                  <div className="relative">
                    <h3
                      className="bangers text-4xl md:text-5xl leading-[0.95] mt-4"
                      style={{
                        WebkitTextStroke:
                          textColor === "#fef3c7" ? "1px #0a0a0a" : "0",
                        textShadow:
                          textColor === "#fef3c7"
                            ? "3px 3px 0 #0a0a0a"
                            : "3px 3px 0 " +
                              (s.bg === "#fbbf24" ? "#dc2626" : "#0a0a0a"),
                      }}
                    >
                      {s.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="inter text-[12px] font-semibold px-3 py-1.5"
                          style={{
                            background: "#fef3c7",
                            border: "2px solid #0a0a0a",
                            color: "#0a0a0a",
                            boxShadow: "2px 2px 0 #0a0a0a",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ============== DOCTRINE + PURSUING ============== */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-5 py-12">
        <div className="grid grid-cols-12 gap-5">
          <FadeUp className="col-span-12 md:col-span-8">
            <div
              className="panel-comic p-8 md:p-12 relative min-h-[360px] flex flex-col justify-between"
              style={{ background: "#fef3c7" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 dots-red opacity-40" />
              <div className="relative">
                <div className="caption-box inline-block mb-5">
                  ★ THE CREED ★
                </div>
                <h3 className="bangers text-4xl md:text-5xl leading-[0.95] mb-5">
                  FROM{" "}
                  <span
                    style={{
                      background: "#dc2626",
                      color: "#fef3c7",
                      padding: "0 10px",
                      border: "3px solid #0a0a0a",
                      display: "inline-block",
                      transform: "rotate(-1deg)",
                    }}
                  >
                    REQUIREMENT
                  </span>{" "}
                  TO{" "}
                  <span
                    style={{
                      background: "#16a34a",
                      color: "#fef3c7",
                      padding: "0 10px",
                      border: "3px solid #0a0a0a",
                      display: "inline-block",
                      transform: "rotate(1deg)",
                    }}
                  >
                    PRODUCTION!
                  </span>
                </h3>
                <p className="inter text-[16px] leading-[1.6] font-medium max-w-xl">
                  Comfortable across the full development lifecycle —
                  requirement analysis, UI architecture, development, testing,
                  and production issue resolution. A strong collaborator in
                  Agile cross-functional teams, working with designers, backend
                  engineers, and product managers to deliver production-ready
                  features!
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="col-span-12 md:col-span-4">
            <div
              className="panel-comic p-8 relative min-h-[360px] flex flex-col justify-between overflow-hidden"
              style={{ background: "#dc2626", color: "#fef3c7" }}
            >
              <div className="absolute inset-0 action-burst opacity-15" />
              <div className="relative">
                <div className="caption-box inline-block mb-4">
                  ★ NEXT ISSUE ★
                </div>
                <h3
                  className="bangers text-4xl md:text-5xl leading-[0.95]"
                  style={{
                    WebkitTextStroke: "2px #0a0a0a",
                    textShadow: "3px 3px 0 #0a0a0a",
                    color: "#fbbf24",
                  }}
                >
                  COMING
                  <br />
                  SOON!
                </h3>
              </div>
              <div className="relative inter text-[15px] font-semibold space-y-1.5 leading-tight">
                <div>→ Advanced frontend architecture</div>
                <div>→ Scalable UI systems</div>
                <div>→ AI-powered web apps</div>
                <div
                  className="bangers text-2xl mt-3"
                  style={{ color: "#fbbf24", letterSpacing: "0.05em" }}
                >
                  STAY TUNED, TRUE BELIEVER!
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============== SERVICE RECORD ============== */}
      <section
        id="record"
        className="relative z-10 max-w-[1200px] mx-auto px-5 py-12"
      >
        <ComicChapter num="05" label="THE SERVICE LOG" sfx="HISTORY!" />

        <FadeUp>
          <div
            className="panel-comic p-6 md:p-10 relative overflow-hidden"
            style={{ background: "#fef3c7" }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 dots-red opacity-30" />

            <div className="relative space-y-6">
              {experience.map((e, i) => (
                <div
                  key={i}
                  className="panel-thin p-5 md:p-6 relative flex items-center gap-5 flex-wrap"
                  style={{ background: e.active ? "#fbbf24" : "#ffffff" }}
                >
                  {/* Insignia */}
                  <div
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bowlby text-4xl md:text-5xl"
                    style={{
                      background: e.active ? "#dc2626" : "#0a0a0a",
                      color: "#fbbf24",
                      border: "4px solid #0a0a0a",
                      boxShadow: "4px 4px 0 #0a0a0a",
                      transform: `rotate(${e.active ? -3 : 3}deg)`,
                      WebkitTextStroke: "1px #fef3c7",
                    }}
                  >
                    {e.insignia}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <div
                        className="bangers text-3xl md:text-4xl"
                        style={{ letterSpacing: "0.04em" }}
                      >
                        {e.company}
                      </div>
                      {e.active && (
                        <div
                          className="bangers text-sm px-3 py-1"
                          style={{
                            background: "#dc2626",
                            color: "#fef3c7",
                            border: "2px solid #0a0a0a",
                            boxShadow: "2px 2px 0 #0a0a0a",
                            letterSpacing: "0.1em",
                          }}
                        >
                          ● CURRENT!
                        </div>
                      )}
                    </div>
                    <div className="inter text-[14px] md:text-[15px] font-semibold mt-1">
                      {e.role}
                    </div>
                  </div>

                  {/* Period */}
                  <div className="text-right">
                    <div
                      className="bangers text-sm"
                      style={{ letterSpacing: "0.08em" }}
                    >
                      {e.period}
                    </div>
                    <div className="inter text-[11px] mt-1 font-bold opacity-70">
                      {e.classification}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div
                className="sfx-text text-4xl md:text-5xl"
                style={{ color: "#dc2626" }}
              >
                TO BE CONTINUED...
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ============== CONTACT / FAN MAIL ============== */}
      <section
        id="fanmail"
        className="relative z-10 max-w-[1200px] mx-auto px-5 py-12"
      >
        <FadeUp>
          <div
            className="panel-comic p-8 md:p-16 relative text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #dc2626 100%)",
            }}
          >
            <div className="absolute inset-0 action-burst opacity-20" />
            <div className="absolute top-0 left-0 w-40 h-40 dots-black opacity-30" />
            <div className="absolute bottom-0 right-0 w-40 h-40 dots-black opacity-30" />

            <div className="relative">
              <div
                className="caption-box inline-block mb-6"
                style={{ background: "#0a0a0a", color: "#fbbf24" }}
              >
                ★ FAN MAIL · LETTERS TO THE HERO ★
              </div>

              <h2
                className="bowlby leading-[0.85] mb-6"
                style={{
                  fontSize: "clamp(4rem, 12vw, 10rem)",
                  color: "#fbbf24",
                  WebkitTextStroke: "4px #0a0a0a",
                  textShadow: "6px 6px 0 #0a0a0a",
                }}
              >
                ASSEMBLE!
              </h2>

              <div className="thought-bubble inline-block max-w-xl">
                <p
                  className="marker text-[18px] md:text-[22px] leading-tight"
                  style={{ color: "#0a0a0a" }}
                >
                  "Open to senior frontend roles and interesting collaborations.
                  Transmit via the channel of your choosing — the fastest signal
                  is email!"
                </p>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="mailto:shikhar.pranjal3@gmail.com"
                  className="bangers text-xl px-8 py-4 tracking-[0.1em] transition hover:scale-105 inline-block"
                  style={{
                    background: "#0a0a0a",
                    color: "#fbbf24",
                    border: "4px solid #0a0a0a",
                    boxShadow: "6px 6px 0 #fef3c7, 6px 6px 0 4px #0a0a0a",
                    transform: "rotate(-2deg)",
                  }}
                >
                  ⚡ SEND AN EMAIL!
                </a>
                <a
                  href="https://www.linkedin.com/in/pranjalshikhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bangers text-xl px-6 py-4 tracking-[0.1em] transition hover:scale-105 inline-block"
                  style={{
                    background: "#fef3c7",
                    color: "#0a0a0a",
                    border: "4px solid #0a0a0a",
                    boxShadow: "6px 6px 0 #0a0a0a",
                    transform: "rotate(1deg)",
                  }}
                >
                  LINKEDIN!
                </a>
                <a
                  href="https://github.com/pranjalshikhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bangers text-xl px-6 py-4 tracking-[0.1em] transition hover:scale-105 inline-block"
                  style={{
                    background: "#fef3c7",
                    color: "#0a0a0a",
                    border: "4px solid #0a0a0a",
                    boxShadow: "6px 6px 0 #0a0a0a",
                    transform: "rotate(-1deg)",
                  }}
                >
                  GITHUB!
                </a>
              </div>

              <div
                className="mt-10 bangers text-sm md:text-base"
                style={{ color: "#0a0a0a", letterSpacing: "0.1em" }}
              >
                ✉️ shikhar.pranjal3@gmail.com ✉️
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ============== END OF ISSUE FOOTER ============== */}
      <footer className="relative z-10 mt-10">
        <div className="comic-hr" />
        <div style={{ background: "#0a0a0a" }}>
          <div className="max-w-[1200px] mx-auto px-5 py-12 text-center">
            <div
              className="bowlby"
              style={{
                fontSize: "clamp(3rem, 10vw, 8rem)",
                lineHeight: 0.85,
                color: "#fbbf24",
                WebkitTextStroke: "3px #fbbf24",
                textShadow: "5px 5px 0 #dc2626",
              }}
            >
              THE END!
            </div>
            <div
              className="bangers text-xl mt-4"
              style={{ color: "#fef3c7", letterSpacing: "0.1em" }}
            >
              ★ BUT WAIT — THERE'S MORE! ★
            </div>
            <div
              className="marker text-[16px] md:text-[18px] mt-4"
              style={{ color: "#fbbf24" }}
            >
              Pranjal will return in the next issue...
            </div>
            <div
              className="inter text-[12px] mt-6 opacity-70"
              style={{ color: "#fef3c7" }}
            >
              PRANJAL COMICS · APRIL 2026 · No. 001 · PUNE, INDIA
              <br />© MMXXVI · ENGINEERED WITH REACT, TYPESCRIPT, AND ENTIRELY
              TOO MUCH CAFFEINE
            </div>
          </div>
        </div>
        <div className="comic-hr" />
      </footer>
    </div>
  );
}

/* ================ HELPERS ================ */

function ComicChapter({ num, label, sfx }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 flex-wrap">
        <div
          className="bowlby text-6xl md:text-8xl"
          style={{
            color: "#fbbf24",
            WebkitTextStroke: "3px #0a0a0a",
            textShadow: "4px 4px 0 #dc2626, 6px 6px 0 #0a0a0a",
          }}
        >
          #{num}
        </div>
        <div className="flex-1 h-[6px]" style={{ background: "#0a0a0a" }} />
        <div className="caption-box inline-block text-[14px] md:text-[16px]">
          {label}
        </div>
      </div>
      <div
        className="bangers text-3xl md:text-5xl mt-3"
        style={{
          color: "#dc2626",
          WebkitTextStroke: "1px #0a0a0a",
          textShadow: "3px 3px 0 #0a0a0a",
          letterSpacing: "0.04em",
        }}
      >
        ★ {sfx} ★
      </div>
    </div>
  );
}

function ProjectPanel({ p, size }) {
  const sizes = {
    large: {
      h: "min-h-[460px]",
      pad: "p-8 md:p-10",
      titleCls: "text-6xl md:text-8xl",
      headCls: "text-xl md:text-2xl",
    },
    medium: {
      h: "min-h-[380px]",
      pad: "p-7",
      titleCls: "text-5xl md:text-6xl",
      headCls: "text-base",
    },
    small: {
      h: "min-h-[300px]",
      pad: "p-5",
      titleCls: "text-3xl md:text-4xl",
      headCls: "text-xs",
    },
  }[size];

  const isDark =
    p.bg === "#0a0a0a" ||
    p.bg === "#dc2626" ||
    p.bg === "#7c3aed" ||
    p.bg === "#18181b";
  const sfxColor = isDark ? "#fbbf24" : "#dc2626";

  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer">
      <div
        className={`panel-comic ${sizes.pad} ${sizes.h} relative flex flex-col justify-between overflow-hidden`}
        style={{ background: p.bg, color: p.ink }}
      >
        {/* Halftone decoration */}
        <div
          className={`absolute top-0 right-0 w-28 h-28 ${isDark ? "dots-yellow" : "dots-black"} opacity-40`}
        />
        <div className="absolute bottom-0 left-0 w-24 h-24 speed-lines opacity-15" />

        {/* SFX badge */}
        {size !== "small" && (
          <div
            className="absolute top-4 right-4 sfx-text text-2xl md:text-3xl"
            style={{
              color: sfxColor,
              transform: "rotate(8deg)",
            }}
          >
            {p.sfx}
          </div>
        )}

        <div className="relative flex items-start justify-between">
          <div className="tag-comic" style={{ background: p.ink, color: p.bg }}>
            ISSUE #{p.issue}
          </div>
          {size === "small" && (
            <div
              className="bangers text-xl"
              style={{ color: sfxColor, WebkitTextStroke: "1px #0a0a0a" }}
            >
              {p.sfx}
            </div>
          )}
        </div>

        <div className="relative">
          <div
            className="bangers text-sm mb-1"
            style={{ letterSpacing: "0.1em", opacity: 0.85 }}
          >
            {p.codename}
          </div>
          <div
            className={`bowlby ${sizes.titleCls} leading-[0.85]`}
            style={{
              color: p.ink,
              WebkitTextStroke: isDark ? "2px #fbbf24" : "0",
              textShadow: isDark
                ? `4px 4px 0 ${p.bg === "#dc2626" ? "#0a0a0a" : "#dc2626"}`
                : "3px 3px 0 " + (p.bg === "#fbbf24" ? "#dc2626" : "#fbbf24"),
            }}
          >
            {p.name}
          </div>
          {size !== "small" && (
            <div
              className={`bangers ${sizes.headCls} mt-3 leading-tight`}
              style={{ letterSpacing: "0.04em" }}
            >
              {p.headline}
            </div>
          )}
          <p
            className={`inter mt-3 font-semibold ${size === "small" ? "text-[12px]" : "text-[14px]"} leading-[1.5]`}
          >
            {p.desc}
          </p>
          {size === "large" && (
            <div
              className="mt-4 bangers text-lg inline-flex items-center gap-2"
              style={{ letterSpacing: "0.08em" }}
            >
              → READ THIS ISSUE!
            </div>
          )}
        </div>

        {p.tag && (
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 bangers text-xs opacity-60"
            style={{ letterSpacing: "0.15em" }}
          >
            ★ {p.tag} ★
          </div>
        )}
      </div>
    </a>
  );
}
