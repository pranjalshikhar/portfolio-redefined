import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeUp } from "../components/FadeUp";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function Wizarding() {
  const [spellCast, setSpellCast] = useState(false);
  const [openedLetter, setOpenedLetter] = useState(false);
  const [activeHouse, setActiveHouse] = useState("ravenclaw");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Animated footprint trails across the page
  const [footprints, setFootprints] = useState([]);
  useEffect(() => {
    // Build multiple trails of footprints, each with its own path
    const trails = [];
    for (let t = 0; t < 5; t++) {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const angle = Math.random() * Math.PI * 2;
      for (let step = 0; step < 8; step++) {
        trails.push({
          id: `${t}-${step}`,
          left: startX + Math.cos(angle) * step * 3,
          top: startY + Math.sin(angle) * step * 2.5,
          rotation: (angle * 180) / Math.PI + (step % 2 === 0 ? -8 : 8),
          isLeft: step % 2 === 0,
          delay: t * 2 + step * 0.4,
        });
      }
    }
    setFootprints(trails);
  }, []);

  const projects = [
    {
      name: "Aizen",
      tag: "Potion of Presentation",
      headline: "Transmutes code into art.",
      desc: "An ancient enchantment that transforms mere source code into beautiful images and gifs — perfect for the discerning wizard's scroll.",
      url: "https://aizen.netlify.app/",
      house: "Ravenclaw",
      seal: "🦅",
      color: "#0e1a40",
      accent: "#946b2d",
    },
    {
      name: "Kamui",
      tag: "Planner's Grimoire",
      headline: "Kanban with superpowers.",
      desc: "A magical board that organizes quests into columns, shuffling cards by will alone — for the wizard who must ship and slay.",
      url: "https://kamui-kanban.netlify.app/",
      house: "Slytherin",
      seal: "🐍",
      color: "#1a472a",
      accent: "#aaaaaa",
    },
    {
      name: "Potion",
      tag: "Scribe's Sanctum",
      headline: "A connected workspace.",
      desc: "Better, faster, more magical work. Pages that link themselves, blocks that remember, a workspace that feels alive.",
      url: "https://potion-write.vercel.app/",
      house: "Hufflepuff",
      seal: "🦡",
      color: "#726255",
      accent: "#ffdb00",
    },
    {
      name: "Pokédex",
      tag: "Beast Compendium",
      headline: "Gotta catch 'em all.",
      desc: "A creature index of rare beasts and their lore. Filter by type, study by stat, master every page.",
      url: "https://pokedex-polly.netlify.app/",
      house: "Gryffindor",
      seal: "🦁",
      color: "#7f0909",
      accent: "#ffc500",
    },
    {
      name: "Evo Gym",
      tag: "Training Dojo",
      headline: "Move, storied.",
      desc: "A fitness landing where motion does the storytelling — strength training for body and browser.",
      url: "https://evogymm.netlify.app/",
      house: "Ravenclaw",
      seal: "🦅",
      color: "#0e1a40",
      accent: "#946b2d",
    },
    {
      name: "Nike Store",
      tag: "Merchant's Stall",
      headline: "Just scroll it.",
      desc: "A product-focused marketplace with bold typography and motion hooks — ready to enchant any shopper.",
      url: "https://nikestore-polly.netlify.app/",
      house: "Gryffindor",
      seal: "🦁",
      color: "#7f0909",
      accent: "#ffc500",
    },
    {
      name: "Crypto Hunter",
      tag: "Gringotts Ledger",
      headline: "Live markets, decoded.",
      desc: "Track the rise and fall of mystical currencies with live pricing — the goblins would approve.",
      url: "https://crytocurrencyhunter.netlify.app/",
      house: "Slytherin",
      seal: "🐍",
      color: "#1a472a",
      accent: "#aaaaaa",
    },
    {
      name: "Red Eye",
      tag: "Oracle's Query",
      headline: "What should you watch?",
      desc: "A question-based divination system that reveals your cinematic soul — one tap at a time.",
      url: "https://red-eye.netlify.app/",
      house: "Hufflepuff",
      seal: "🦡",
      color: "#726255",
      accent: "#ffdb00",
    },
    {
      name: "Portfolio V3",
      tag: "The Book Itself",
      headline: "This is the scroll.",
      desc: "The current portfolio — woven with Next.js and Tailwind CSS, sealed with care.",
      url: "https://pranjalshikhar.vercel.app/",
      house: "Ravenclaw",
      seal: "🦅",
      color: "#0e1a40",
      accent: "#946b2d",
    },
  ];

  const experience = [
    {
      company: "Accenture",
      role: "Senior Analyst",
      period: "May 2026 — Present",
      active: true,
      sigil: "A",
      subtitle: "Order of Senior Analysts",
    },
    {
      company: "Infosys",
      role: "Digital Specialist Engineer L1",
      period: "Jan 2026 — May 2026",
      active: false,
      sigil: "I",
      subtitle: "Rank Ascended",
    },
    {
      company: "Infosys",
      role: "Digital Specialist Engineer",
      period: "Jul 2022 — Dec 2025",
      active: false,
      sigil: "I",
      subtitle: "Induction into the Guild",
    },
  ];

  const skillsFull = [
    {
      title: "Ancient Tongues",
      subtitle: "Programming Languages",
      items: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Python (working knowledge)",
        "C",
      ],
      rune: "Ⓐ",
    },
    {
      title: "Core Spellbooks",
      subtitle: "Frontend Frameworks & Libraries",
      items: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Angular (exposure)",
        "ReactFlow",
      ],
      rune: "Ⓑ",
    },
    {
      title: "Robes & Regalia",
      subtitle: "Styling & UI Systems",
      items: ["Tailwind CSS", "shadcn/ui", "Material UI", "Bootstrap"],
      rune: "Ⓒ",
    },
    {
      title: "Owl Post Protocols",
      subtitle: "Backend & APIs",
      items: [
        "REST APIs",
        "GraphQL",
        "API contract design",
        ".NET Core integration",
      ],
      rune: "Ⓓ",
    },
    {
      title: "The Great Ledger",
      subtitle: "Databases",
      items: ["MySQL (SQL)", "Azure CosmosDB (NoSQL)"],
      rune: "Ⓔ",
    },
    {
      title: "Cloud Citadels",
      subtitle: "Cloud & DevOps",
      items: [
        "Microsoft Azure",
        "Azure Blob Storage",
        "Azure DevOps Pipelines",
        "Firebase",
      ],
      rune: "Ⓕ",
    },
    {
      title: "Defense Arts",
      subtitle: "Testing & Quality",
      items: [
        "Jest",
        "React Testing Library",
        "Unit testing",
        "Integration testing",
      ],
      rune: "Ⓖ",
    },
    {
      title: "The Drafting Table",
      subtitle: "Design & Collaboration",
      items: [
        "Figma",
        "UI/UX prototyping",
        "Developer handoff",
        "Git",
        "VS Code",
      ],
      rune: "Ⓗ",
    },
    {
      title: "Laws of Magic",
      subtitle: "Software Engineering",
      items: [
        "Component-driven architecture",
        "Design principles",
        "Performance optimization",
        "Scalable frontend architecture",
      ],
      rune: "Ⓘ",
    },
  ];

  const houses = {
    gryffindor: {
      name: "Gryffindor",
      color: "#7f0909",
      accent: "#ffc500",
      trait: "Bravery · Daring · Nerve",
    },
    slytherin: {
      name: "Slytherin",
      color: "#1a472a",
      accent: "#aaaaaa",
      trait: "Ambition · Cunning · Resourcefulness",
    },
    ravenclaw: {
      name: "Ravenclaw",
      color: "#0e1a40",
      accent: "#946b2d",
      trait: "Wit · Learning · Wisdom",
    },
    hufflepuff: {
      name: "Hufflepuff",
      color: "#726255",
      accent: "#ffdb00",
      trait: "Loyalty · Patience · Fair play",
    },
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: "#1a0f08",
        color: "#f4e4bc",
        fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=IM+Fell+English:ital@0;1&family=UnifrakturMaguntia&display=swap');

        * { -webkit-font-smoothing: antialiased; }

        .cinzel { font-family: 'Cinzel', serif; letter-spacing: 0.02em; }
        .cinzel-dec { font-family: 'Cinzel Decorative', serif; letter-spacing: 0.04em; }
        .fell { font-family: 'IM Fell English', serif; }
        .fraktur { font-family: 'UnifrakturMaguntia', serif; }
        .garamond { font-family: 'Cormorant Garamond', serif; }

        /* Parchment texture */
        .parchment {
          background-color: #f4e4bc;
          background-image:
            radial-gradient(ellipse at 20% 30%, rgba(139, 90, 43, 0.15), transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(101, 67, 33, 0.18), transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(180, 140, 80, 0.08), transparent 70%);
          color: #2a1810;
          position: relative;
        }
        .parchment::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.42 0 0 0 0 0.28 0 0 0 0 0.15 0 0 0 0.15 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          pointer-events: none;
          mix-blend-mode: multiply;
          opacity: 0.4;
          border-radius: inherit;
        }
        .parchment::after {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at top left, transparent 60%, rgba(70, 40, 15, 0.25)),
            radial-gradient(ellipse at bottom right, transparent 60%, rgba(70, 40, 15, 0.3));
          pointer-events: none;
          border-radius: inherit;
        }

        /* Dark aged parchment-map background (Marauder's Map feel) */
        .velvet {
          background-color: #2a1810;
          background-image:
            /* Aged brown parchment tint */
            radial-gradient(ellipse at 20% 30%, rgba(139, 90, 43, 0.25), transparent 55%),
            radial-gradient(ellipse at 80% 70%, rgba(101, 67, 33, 0.3), transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(60, 35, 15, 0.5), transparent 80%),
            linear-gradient(180deg, #1f1208 0%, #140a04 50%, #1a0f08 100%);
        }

        /* The map layer — fine grid + ink lines + room outlines */
        .map-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
          background-image:
            /* Horizontal ink rule lines */
            linear-gradient(0deg, transparent 95%, rgba(148, 107, 45, 0.25) 100%),
            /* Vertical ink rule lines */
            linear-gradient(90deg, transparent 95%, rgba(148, 107, 45, 0.2) 100%),
            /* Parchment grain */
            url("data:image/svg+xml;utf8,<svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.58 0 0 0 0 0.42 0 0 0 0 0.18 0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          background-size: 80px 80px, 80px 80px, 400px 400px;
          mix-blend-mode: overlay;
        }

        /* Hand-drawn map ink illustrations — corridors, rooms, doors */
        .map-illustrations {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.22;
        }

        /* Footprint animation — the classic Marauder's Map element */
        @keyframes footprint-trail {
          0% { opacity: 0; transform: scale(0.5) rotate(var(--rot)); }
          15% { opacity: 0.9; transform: scale(1) rotate(var(--rot)); }
          70% { opacity: 0.7; transform: scale(1) rotate(var(--rot)); }
          100% { opacity: 0; transform: scale(1) rotate(var(--rot)); }
        }
        .footprint {
          position: fixed;
          width: 14px;
          height: 18px;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          animation: footprint-trail 12s ease-in-out infinite;
          filter: drop-shadow(0 0 3px rgba(139, 90, 43, 0.6));
        }

        /* Compass rose — rotating at corners */
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .compass {
          position: fixed;
          width: 120px;
          height: 120px;
          pointer-events: none;
          opacity: 0.12;
          z-index: 1;
          animation: rotate-slow 60s linear infinite;
          color: #946b2d;
        }

        /* Gold foil text */
        .gold-foil {
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 25%, #b8860b 50%, #ffd700 75%, #d4af37 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Ornamental divider */
        .ornate-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #946b2d;
        }
        .ornate-divider::before, .ornate-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #946b2d, transparent);
        }

        /* Wax seal */
        .wax-seal {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #c91818 0%, #7f0909 60%, #4a0404 100%);
          box-shadow:
            inset -3px -3px 8px rgba(0,0,0,0.5),
            inset 3px 3px 8px rgba(255,200,200,0.2),
            0 4px 12px rgba(0,0,0,0.6);
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .wax-seal::before {
          content: '';
          position: absolute;
          inset: 6px;
          border: 1px dashed rgba(255,200,200,0.3);
          border-radius: 50%;
        }

        /* Scroll appearance animation */
        @keyframes unfurl {
          0% { transform: scaleY(0); transform-origin: top; }
          100% { transform: scaleY(1); }
        }

        /* Letter envelope */
        .envelope {
          background: linear-gradient(135deg, #e8d4a0 0%, #d4b088 50%, #c4a070 100%);
          border: 1px solid #8b5a2b;
          position: relative;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Spell sparkle cursor */
        @keyframes sparkle-fade {
          0% { opacity: 1; transform: scale(0) rotate(0deg); }
          100% { opacity: 0; transform: scale(1.5) rotate(180deg); }
        }

        /* House ribbon */
        .house-ribbon {
          position: absolute;
          top: 0; right: 24px;
          width: 32px;
          background: var(--house-color);
          color: var(--house-accent);
          padding: 28px 4px 12px;
          text-align: center;
          font-size: 10px;
          letter-spacing: 0.2em;
          writing-mode: vertical-rl;
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), 50% 100%, 0 calc(100% - 8px));
          font-family: 'Cinzel', serif;
          font-weight: 600;
          text-transform: uppercase;
        }

        /* Runic border */
        .runic-frame {
          position: relative;
          border: 1px solid rgba(148, 107, 45, 0.4);
        }
        .runic-frame::before {
          content: '✦';
          position: absolute;
          top: -12px; left: 20px;
          background: #1a0f08;
          color: #946b2d;
          padding: 0 8px;
          font-size: 16px;
        }

        /* Tile hover lift */
        .lift { transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s; }
        .lift:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(212, 175, 55, 0.15); }

        /* Nav */
        .nav-wizard {
          background: linear-gradient(180deg, rgba(26, 15, 8, 0.95) 0%, rgba(26, 15, 8, 0.8) 100%);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        /* Ornamental initial cap */
        .drop-cap::first-letter {
          font-family: 'UnifrakturMaguntia', serif;
          float: left;
          font-size: 4.5rem;
          line-height: 0.85;
          padding: 4px 10px 0 0;
          color: #7f0909;
          font-weight: 700;
        }

        /* Project map line */
        .map-line {
          stroke-dasharray: 4 4;
          animation: dash 20s linear infinite;
        }
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }

        /* Wand glow cursor trail */
        .wand-cursor {
          position: fixed;
          width: 8px; height: 8px;
          background: radial-gradient(circle, #ffd700 0%, rgba(255, 215, 0, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          mix-blend-mode: screen;
        }
      `}</style>

      {/* ================ MARAUDER'S MAP BACKGROUND ================ */}

      {/* Base velvet + aged parchment tint */}
      <div className="fixed inset-0 velvet pointer-events-none" />

      {/* Map grain layer */}
      <div className="map-layer" />

      {/* Hand-drawn map: corridors, rooms, staircases, doors, labels */}
      <svg
        className="map-illustrations"
        viewBox="0 0 1400 2000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="rough">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="2"
            />
            <feDisplacementMap in="SourceGraphic" scale="3" />
          </filter>
        </defs>

        {/* Title banner top */}
        <g
          filter="url(#rough)"
          stroke="#d4af37"
          strokeWidth="1.2"
          fill="none"
          opacity="0.9"
        >
          {/* Scrollwork frame corners */}
          <path d="M 40 40 Q 80 20, 120 40 T 200 40" />
          <path d="M 1200 40 Q 1240 20, 1280 40 T 1360 40" />
        </g>

        {/* Main map — corridors of Hogwarts */}
        <g
          filter="url(#rough)"
          stroke="#a87838"
          strokeWidth="1.5"
          fill="none"
          opacity="0.75"
        >
          {/* Horizontal corridor 1 */}
          <path d="M 80 250 L 600 250 L 600 320 L 80 320 Z" />
          {/* Horizontal corridor 2 (right) */}
          <path d="M 780 230 L 1320 230 L 1320 310 L 780 310 Z" />
          {/* Vertical connecting hall */}
          <path d="M 600 320 L 600 560 L 780 560 L 780 310" />
          {/* Lower big room */}
          <path d="M 120 600 L 560 600 L 560 780 L 120 780 Z" />
          {/* Right hall */}
          <path d="M 820 600 L 1320 600 L 1320 820 L 820 820 Z" />

          {/* Second page section */}
          <path d="M 80 950 L 400 950 L 400 1060 L 80 1060 Z" />
          <path d="M 480 950 L 900 950 L 900 1100 L 480 1100 Z" />
          <path d="M 970 950 L 1320 950 L 1320 1120 L 970 1120 Z" />

          <path d="M 150 1200 L 1250 1200" strokeDasharray="6 4" />

          <path d="M 100 1320 L 550 1320 L 550 1500 L 100 1500 Z" />
          <path d="M 650 1320 L 1320 1320 L 1320 1520 L 650 1520 Z" />

          <path d="M 200 1650 L 1200 1650 L 1200 1800 L 200 1800 Z" />

          {/* Staircases — classic map motif */}
          <g strokeWidth="1">
            <line x1="420" y1="250" x2="420" y2="320" />
            <line x1="430" y1="260" x2="440" y2="310" />
            <line x1="445" y1="260" x2="455" y2="310" />
            <line x1="460" y1="260" x2="470" y2="310" />

            <line x1="1000" y1="950" x2="1000" y2="1120" />
            <line x1="1020" y1="970" x2="1040" y2="1100" />
            <line x1="1055" y1="970" x2="1075" y2="1100" />
          </g>

          {/* Doors (small gaps) */}
          <circle cx="300" cy="250" r="2" fill="#a87838" />
          <circle cx="900" cy="230" r="2" fill="#a87838" />
          <circle cx="400" cy="600" r="2" fill="#a87838" />
          <circle cx="1100" cy="820" r="2" fill="#a87838" />

          {/* Secret passage dotted lines */}
          <path
            d="M 560 700 Q 700 680 820 700"
            strokeDasharray="3 5"
            opacity="0.6"
          />
          <path
            d="M 400 1050 Q 440 1080 480 1050"
            strokeDasharray="3 5"
            opacity="0.6"
          />
        </g>

        {/* Compass rose — upper right */}
        <g transform="translate(1250, 150)" opacity="0.6">
          <circle
            cx="0"
            cy="0"
            r="50"
            stroke="#d4af37"
            strokeWidth="0.8"
            fill="none"
          />
          <circle
            cx="0"
            cy="0"
            r="38"
            stroke="#d4af37"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="2 2"
          />
          <g stroke="#d4af37" strokeWidth="0.8" fill="none">
            <path
              d="M 0 -50 L 5 0 L 0 50 L -5 0 Z"
              fill="#d4af37"
              opacity="0.3"
            />
            <path
              d="M -50 0 L 0 5 L 50 0 L 0 -5 Z"
              fill="#d4af37"
              opacity="0.3"
            />
            <path d="M -35 -35 L 0 0 L 35 35" />
            <path d="M 35 -35 L 0 0 L -35 35" />
          </g>
          <text
            x="0"
            y="-56"
            fill="#d4af37"
            fontSize="10"
            textAnchor="middle"
            fontFamily="Cinzel"
          >
            N
          </text>
          <text
            x="58"
            y="4"
            fill="#d4af37"
            fontSize="10"
            textAnchor="middle"
            fontFamily="Cinzel"
          >
            E
          </text>
          <text
            x="0"
            y="65"
            fill="#d4af37"
            fontSize="10"
            textAnchor="middle"
            fontFamily="Cinzel"
          >
            S
          </text>
          <text
            x="-58"
            y="4"
            fill="#d4af37"
            fontSize="10"
            textAnchor="middle"
            fontFamily="Cinzel"
          >
            W
          </text>
        </g>

        {/* Hand-drawn labels around the map */}
        <g
          fontFamily="Cormorant Garamond, Georgia, serif"
          fill="#a87838"
          opacity="0.7"
          fontStyle="italic"
        >
          <text x="200" y="280" fontSize="11">
            ~ the great hall ~
          </text>
          <text x="880" y="260" fontSize="11">
            ~ astronomy tower ~
          </text>
          <text x="180" y="680" fontSize="11">
            ~ library ~
          </text>
          <text x="900" y="700" fontSize="11">
            ~ defence chamber ~
          </text>
          <text x="140" y="990" fontSize="10">
            ~ east wing ~
          </text>
          <text x="560" y="990" fontSize="10">
            ~ the scroll room ~
          </text>
          <text x="1010" y="990" fontSize="10">
            ~ owlery ~
          </text>
          <text x="150" y="1370" fontSize="10">
            ~ chronicles hall ~
          </text>
          <text x="700" y="1370" fontSize="10">
            ~ artefacts chamber ~
          </text>
          <text x="400" y="1710" fontSize="11">
            ~ the owl post tower ~
          </text>
        </g>

        {/* "I solemnly swear..." banner */}
        <g opacity="0.45">
          <text
            x="700"
            y="90"
            fill="#d4af37"
            fontSize="14"
            textAnchor="middle"
            fontFamily="UnifrakturMaguntia, serif"
            letterSpacing="4"
          >
            I solemnly swear that I am up to no good
          </text>
          <text
            x="700"
            y="115"
            fill="#a87838"
            fontSize="10"
            textAnchor="middle"
            fontFamily="Cinzel"
            letterSpacing="6"
          >
            ✦ ✦ ✦
          </text>
        </g>

        {/* Messrs. Moony, Wormtail, Padfoot & Prongs signature */}
        <g opacity="0.4">
          <text
            x="700"
            y="1950"
            fill="#a87838"
            fontSize="11"
            textAnchor="middle"
            fontFamily="Cormorant Garamond, serif"
            fontStyle="italic"
            letterSpacing="2"
          >
            Messrs. Moony, Wormtail, Padfoot &amp; Prongs — Purveyors of Aids to
            Magical Mischief-Makers
          </text>
        </g>

        {/* Scattered tiny crests / stars */}
        <g fill="#d4af37" opacity="0.5">
          <text x="80" y="180" fontSize="10">
            ✦
          </text>
          <text x="1320" y="480" fontSize="10">
            ✦
          </text>
          <text x="60" y="860" fontSize="10">
            ✦
          </text>
          <text x="1340" y="1250" fontSize="10">
            ✦
          </text>
          <text x="80" y="1620" fontSize="10">
            ✦
          </text>
        </g>
      </svg>

      {/* Footprint trails animating across the map */}
      {footprints.map((f) => (
        <svg
          key={f.id}
          className="footprint"
          viewBox="0 0 14 18"
          style={{
            left: `${Math.max(0, Math.min(98, f.left))}%`,
            top: `${Math.max(0, Math.min(98, f.top))}%`,
            "--rot": `${f.rotation}deg`,
            animationDelay: `${f.delay}s`,
          }}
        >
          {f.isLeft ? (
            <path
              d="M 7 2 C 4 2, 3 5, 3 8 C 3 11, 4 14, 5 16 L 9 16 C 10 14, 11 11, 11 8 C 11 5, 10 2, 7 2 Z M 4 1 C 3 1, 3 2, 3.5 2.5 M 6 0.5 C 5 0.5, 5 1.5, 5.5 2 M 8 0.5 C 9 0.5, 9 1.5, 8.5 2 M 10 1 C 11 1, 11 2, 10.5 2.5"
              fill="#d4af37"
              stroke="#d4af37"
              strokeWidth="0.3"
            />
          ) : (
            <path
              d="M 7 2 C 4 2, 3 5, 3 8 C 3 11, 4 14, 5 16 L 9 16 C 10 14, 11 11, 11 8 C 11 5, 10 2, 7 2 Z M 4 1 C 3 1, 3 2, 3.5 2.5 M 6 0.5 C 5 0.5, 5 1.5, 5.5 2 M 8 0.5 C 9 0.5, 9 1.5, 8.5 2 M 10 1 C 11 1, 11 2, 10.5 2.5"
              fill="#d4af37"
              stroke="#d4af37"
              strokeWidth="0.3"
              transform="scale(-1, 1) translate(-14, 0)"
            />
          )}
        </svg>
      ))}

      {/* Fixed compass rose in top-right corner — floating above content */}
      <svg
        className="compass"
        style={{ top: "80px", right: "20px" }}
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="currentColor"
          strokeWidth="0.4"
          fill="none"
          strokeDasharray="2 2"
        />
        <path
          d="M 50 2 L 54 50 L 50 98 L 46 50 Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M 2 50 L 50 54 L 98 50 L 50 46 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <text
          x="50"
          y="10"
          fontSize="7"
          fill="currentColor"
          textAnchor="middle"
          fontFamily="Cinzel"
        >
          N
        </text>
      </svg>

      {/* Soft vignette to keep content readable */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10, 5, 2, 0.55) 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10">
        {/* ==================== NAV ==================== */}
        <nav className="nav-wizard sticky top-0 z-40">
          <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-yellow-400"
              >
                <path
                  d="M12 2L14 9L22 10L16 15L18 22L12 18L6 22L8 15L2 10L10 9L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span className="cinzel text-[14px] font-semibold gold-foil tracking-[0.2em]">
                PRANJAL · S · SINHA
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-6 cinzel text-[11px] tracking-[0.18em]"
                style={{ color: "#d4af37" }}
              >
                <a
                  href="#scroll"
                  className="hidden sm:inline hover:text-yellow-200 transition"
                >
                  The Scroll
                </a>
                <a
                  href="#works"
                  className="hidden sm:inline hover:text-yellow-200 transition"
                >
                  Works
                </a>
                <a
                  href="#arts"
                  className="hidden sm:inline hover:text-yellow-200 transition"
                >
                  Arts
                </a>
                <a
                  href="#chronicles"
                  className="hidden sm:inline hover:text-yellow-200 transition"
                >
                  Chronicles
                </a>
                <a
                  href="#owl"
                  className="hidden sm:inline hover:text-yellow-200 transition"
                >
                  Owl Post
                </a>
              </div>
              <ThemeSwitcher variant="wizard" />
            </div>
          </div>
        </nav>

        {/* ==================== HERO ==================== */}
        <section ref={heroRef} className="pt-16 pb-20 px-6 text-center">
          <div className="max-w-[1100px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="ornate-divider mb-6 cinzel text-[11px] tracking-[0.3em]"
              style={{ color: "#946b2d" }}
            >
              <span>✦ ESTABLISHED · MMXXII ✦</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="cinzel text-[12px] mb-4"
              style={{ color: "#946b2d", letterSpacing: "0.4em" }}
            >
              ⚜ A CHRONICLE OF ⚜
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="cinzel-dec font-black gold-foil leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
            >
              Pranjal
              <br />
              <span className="italic" style={{ fontSize: "0.75em" }}>
                Shikhar Sinha
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="my-8 flex items-center justify-center gap-4"
              style={{ color: "#946b2d" }}
            >
              <span>━━━━</span>
              <span className="text-xl">✦</span>
              <span className="fell italic text-lg">Interface Enchanter</span>
              <span className="text-xl">✦</span>
              <span>━━━━</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="fell italic text-[20px] md:text-[24px] max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#e8d4a0" }}
            >
              "A wizard of three years, skilled in the ancient arts of React,
              TypeScript, and Next.js — crafting interfaces that translate the
              complex magic of AI into experiences mortals can touch."
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mt-10 flex items-center justify-center gap-4 flex-wrap"
            >
              <a
                href="#works"
                className="cinzel px-6 py-3 text-[12px] tracking-[0.2em] border-2 transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #d4af37, #b8860b)",
                  color: "#1a0f08",
                  borderColor: "#d4af37",
                }}
              >
                ✦ ENTER THE GREAT HALL ✦
              </a>
              <a
                href="#owl"
                className="cinzel text-[12px] tracking-[0.2em] underline decoration-dotted underline-offset-4 hover:text-yellow-200 transition"
                style={{ color: "#d4af37" }}
              >
                SEND AN OWL →
              </a>
            </motion.div>

            {/* Hero stats as crests */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="mt-20 grid grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {[
                { k: "III+", v: "Years at the Craft", r: "⚔" },
                { k: "XXXV", v: "Percent Lighter", r: "⚡" },
                { k: "XCV", v: "Coverage in Defense", r: "🛡" },
                { k: "IX", v: "Scrolls Penned", r: "📜" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl mb-2" style={{ color: "#d4af37" }}>
                    {s.r}
                  </div>
                  <div className="cinzel-dec text-2xl gold-foil font-bold">
                    {s.k}
                  </div>
                  <div
                    className="fell italic text-[11px] mt-1"
                    style={{ color: "#946b2d" }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ==================== SORTING HAT BANNER ==================== */}
        <div className="max-w-[1100px] mx-auto px-6 my-12">
          <div
            className="text-center cinzel text-[10px] tracking-[0.4em]"
            style={{ color: "#946b2d" }}
          >
            ⚜ ⚜ ⚜ THE FOLLOWING IS WRITTEN IN MOONLIGHT INK · SOLEMNLY SWORN TO
            BE UP TO GOOD ⚜ ⚜ ⚜
          </div>
        </div>

        {/* ==================== THE LETTER (SUMMARY) ==================== */}
        <section id="scroll" className="max-w-[1100px] mx-auto px-6 mb-16">
          <div className="text-center mb-10">
            <div
              className="cinzel text-[11px] tracking-[0.3em] mb-2"
              style={{ color: "#946b2d" }}
            >
              CHAPTER I
            </div>
            <h2 className="cinzel-dec text-4xl md:text-6xl gold-foil font-bold">
              The Summary Scroll
            </h2>
          </div>

          <FadeUp>
            <div
              className="parchment rounded-[2px] p-10 md:p-20 shadow-2xl relative"
              style={{
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.8), 0 0 60px rgba(212, 175, 55, 0.1)",
              }}
            >
              {/* Wax seal */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="wax-seal">
                  <span
                    className="cinzel-dec text-2xl"
                    style={{ color: "#ffd700" }}
                  >
                    P
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="text-center mb-10">
                  <div
                    className="cinzel tracking-[0.3em] text-[12px]"
                    style={{ color: "#7f0909" }}
                  >
                    ✦ HOGWARTS SCHOOL OF WITCHCRAFT AND WEBCRAFT ✦
                  </div>
                  <div
                    className="fell italic text-[13px] mt-1"
                    style={{ color: "#5a3a1a" }}
                  >
                    Department of Digital Enchantments · Est. 2022
                  </div>
                </div>

                <div className="ornate-divider mb-8">
                  <span className="fell italic text-lg">
                    a brief proclamation
                  </span>
                </div>

                <p
                  className="fell text-[18px] md:text-[22px] leading-[1.7] drop-cap"
                  style={{ color: "#2a1810" }}
                >
                  Let it be known to all who read this scroll that Pranjal
                  Shikhar Sinha, a full-stack-focused Software Engineer with
                  three years and more of proven craft, hath dedicated his wand
                  to the building of scalable web applications and AI-driven
                  interfaces of exceptional quality.
                </p>

                <p
                  className="fell text-[18px] md:text-[22px] leading-[1.7] mt-6"
                  style={{ color: "#2a1810" }}
                >
                  His mastery spans the most ancient and modern of the web arts
                  — <em>React</em>, <em>TypeScript</em>, and <em>Next.js</em> —
                  with a peculiar gift for translating the tangled magic of
                  artificial minds into interfaces that mortals may use with
                  ease. He hath served in the halls of Infosys as a Digital
                  Specialist Engineer for three winters, and now takes up the
                  mantle of{" "}
                  <span className="cinzel font-semibold">
                    Senior Analyst at the Order of Accenture
                  </span>
                  .
                </p>

                <p
                  className="fell italic text-[18px] md:text-[20px] leading-[1.7] mt-6 text-center"
                  style={{ color: "#5a3a1a" }}
                >
                  "A proven collaborator across the guilds of design, backend,
                  and product — with an unwavering focus on clean, testable,
                  performance-optimized code."
                </p>

                <div className="ornate-divider mt-10">
                  <span>⚜</span>
                </div>

                {/* Signature */}
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <div
                      className="fell italic text-[13px]"
                      style={{ color: "#5a3a1a" }}
                    >
                      Sealed and signed,
                    </div>
                    <div
                      className="cinzel-dec text-2xl italic mt-2"
                      style={{ color: "#7f0909" }}
                    >
                      ~ Pranjal ~
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="cinzel text-[10px] tracking-widest"
                      style={{ color: "#5a3a1a" }}
                    >
                      PUNE · MAHARASHTRA
                    </div>
                    <div
                      className="fell italic text-[11px] mt-1"
                      style={{ color: "#5a3a1a" }}
                    >
                      the 18th of April, MMXXVI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ==================== ABOUT TWO-UP ==================== */}
        <section className="max-w-[1100px] mx-auto px-6 mb-16">
          <div className="text-center mb-10">
            <div
              className="cinzel text-[11px] tracking-[0.3em] mb-2"
              style={{ color: "#946b2d" }}
            >
              CHAPTER II
            </div>
            <h2 className="cinzel-dec text-4xl md:text-6xl gold-foil font-bold">
              The Arts Practised
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <FadeUp className="col-span-12 md:col-span-7">
              <div className="parchment rounded-sm p-10 md:p-14 min-h-[520px] relative lift">
                <div className="relative">
                  <div
                    className="cinzel text-[10px] tracking-[0.3em] mb-4"
                    style={{ color: "#7f0909" }}
                  >
                    ✦ I · Craft of Components ✦
                  </div>
                  <h3
                    className="cinzel-dec text-3xl md:text-4xl mb-6"
                    style={{ color: "#2a1810" }}
                  >
                    Component-driven.{" "}
                    <span style={{ color: "#946b2d" }} className="italic">
                      Pixel-perfect. Performance-first.
                    </span>
                  </h3>
                  <p
                    className="fell text-[17px] leading-[1.7] mb-4"
                    style={{ color: "#2a1810" }}
                  >
                    Strong experience designing component-driven architectures
                    and building reusable UI systems that improve development
                    speed, maintainability, and consistency across large
                    applications.
                  </p>
                  <p
                    className="fell text-[17px] leading-[1.7]"
                    style={{ color: "#2a1810" }}
                  >
                    Fluent in the React ecosystem — <em>Hooks</em>,{" "}
                    <em>Redux Toolkit</em>, <em>Context API</em>,{" "}
                    <em>Next.js</em> — and equally comfortable translating a
                    Figma enchantment into a pixel-exact, responsive, accessible
                    interface.
                  </p>
                  <div
                    className="mt-8 cinzel text-[11px] tracking-[0.25em]"
                    style={{ color: "#7f0909" }}
                  >
                    Read further ✦ →
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="col-span-12 md:col-span-5">
              <div
                className="rounded-sm p-10 md:p-12 min-h-[520px] lift relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #0e1a40 0%, #1a2b5a 50%, #0e1a40 100%)",
                  border: "1px solid rgba(148, 107, 45, 0.4)",
                }}
              >
                {/* Starfield */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 60% 70%, white, transparent), radial-gradient(1px 1px at 80% 20%, white, transparent), radial-gradient(2px 2px at 40% 60%, #ffd700, transparent), radial-gradient(1px 1px at 90% 80%, white, transparent), radial-gradient(1px 1px at 10% 80%, white, transparent)",
                  }}
                />
                <div className="relative">
                  <div
                    className="cinzel text-[10px] tracking-[0.3em] mb-4"
                    style={{ color: "#d4af37" }}
                  >
                    ✦ II · Divination & AI ✦
                  </div>
                  <h3 className="cinzel-dec text-3xl md:text-4xl mb-6 gold-foil">
                    AI interfaces.
                    <br />
                    <span
                      className="italic"
                      style={{ color: "rgba(212, 175, 55, 0.6)" }}
                    >
                      Live dashboards. Real-time magic.
                    </span>
                  </h3>
                  <p
                    className="fell text-[17px] leading-[1.7] mb-4"
                    style={{ color: "#e8d4a0" }}
                  >
                    Built interactive dashboards and visualization systems to
                    monitor AI agent pipelines — live logs, latency metrics, and
                    execution states — using modern frontend visualization
                    scrolls.
                  </p>
                  <p
                    className="fell text-[17px] leading-[1.7]"
                    style={{ color: "#e8d4a0" }}
                  >
                    Hands-on integrating REST and GraphQL owl posts,
                    collaborating with backend wizards to design efficient
                    contracts and optimized data flows.
                  </p>
                  <div
                    className="mt-8 cinzel text-[11px] tracking-[0.25em]"
                    style={{ color: "#d4af37" }}
                  >
                    Read further ✦ →
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ==================== HOUSE CRESTS (STATS) ==================== */}
        <section className="max-w-[1100px] mx-auto px-6 mb-16">
          <div className="grid grid-cols-12 gap-4">
            {[
              {
                house: "Gryffindor",
                color: "#7f0909",
                accent: "#ffc500",
                seal: "🦁",
                stat: "III+",
                desc: "years shipping production enchantments across enterprise halls",
                title: "Bravery",
                trait: "Courage · Daring",
              },
              {
                house: "Ravenclaw",
                color: "#0e1a40",
                accent: "#946b2d",
                seal: "🦅",
                stat: "~35%",
                desc: "weight shed from thy bundles — lazy loading, memoization, code splitting",
                title: "Wisdom",
                trait: "Wit · Learning",
              },
              {
                house: "Slytherin",
                color: "#1a472a",
                accent: "#aaaaaa",
                seal: "🐍",
                stat: "95%",
                desc: "coverage in the arts of defense — Jest & RTL, unit and integration",
                title: "Cunning",
                trait: "Ambition · Resource",
              },
            ].map((h, i) => (
              <FadeUp key={h.house} className="col-span-12 md:col-span-4">
                <div
                  className="rounded-sm p-8 min-h-[380px] lift relative overflow-hidden flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${h.color} 0%, ${h.color}dd 100%)`,
                    border: `1px solid ${h.accent}44`,
                  }}
                >
                  {/* Corner flourishes */}
                  <div
                    className="absolute top-4 left-4 text-xl"
                    style={{ color: h.accent }}
                  >
                    ✦
                  </div>
                  <div
                    className="absolute top-4 right-4 text-xl"
                    style={{ color: h.accent }}
                  >
                    ✦
                  </div>
                  <div
                    className="absolute bottom-4 left-4 text-xl"
                    style={{ color: h.accent }}
                  >
                    ✦
                  </div>
                  <div
                    className="absolute bottom-4 right-4 text-xl"
                    style={{ color: h.accent }}
                  >
                    ✦
                  </div>

                  <div className="relative text-center">
                    <div className="text-6xl mb-3">{h.seal}</div>
                    <div
                      className="cinzel-dec text-2xl font-bold"
                      style={{ color: h.accent }}
                    >
                      {h.house}
                    </div>
                    <div
                      className="fell italic text-[12px] mt-1"
                      style={{ color: "#e8d4a0" }}
                    >
                      {h.trait}
                    </div>
                  </div>

                  <div className="relative text-center my-4">
                    <div
                      className="cinzel-dec text-7xl font-black"
                      style={{ color: h.accent }}
                    >
                      {h.stat}
                    </div>
                    <div
                      className="cinzel text-[10px] tracking-[0.3em] mt-2"
                      style={{ color: h.accent }}
                    >
                      {h.title.toUpperCase()}
                    </div>
                  </div>

                  <div className="relative text-center">
                    <p
                      className="fell italic text-[13px]"
                      style={{ color: "#e8d4a0" }}
                    >
                      {h.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ==================== WORKS (MARAUDER'S MAP) ==================== */}
        <section id="works" className="max-w-[1100px] mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <div
              className="cinzel text-[11px] tracking-[0.3em] mb-2"
              style={{ color: "#946b2d" }}
            >
              CHAPTER III
            </div>
            <h2 className="cinzel-dec text-4xl md:text-6xl gold-foil font-bold mb-3">
              Scrolls of Work
            </h2>
            <p className="fell italic text-[17px]" style={{ color: "#e8d4a0" }}>
              ~ nine enchantments, each with its own house and curse ~
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Two-up hero */}
            {projects.slice(0, 2).map((p, i) => (
              <FadeUp key={p.name} className="col-span-12 md:col-span-6">
                <ProjectScroll p={p} size="large" />
              </FadeUp>
            ))}

            {/* Three-up */}
            {projects.slice(2, 5).map((p) => (
              <FadeUp key={p.name} className="col-span-12 md:col-span-4">
                <ProjectScroll p={p} size="medium" />
              </FadeUp>
            ))}

            {/* Four-up */}
            {projects.slice(5, 9).map((p) => (
              <FadeUp key={p.name} className="col-span-6 md:col-span-3">
                <ProjectScroll p={p} size="small" />
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ==================== SKILLS / ARTS OF MAGIC ==================== */}
        <section id="arts" className="max-w-[1100px] mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <div
              className="cinzel text-[11px] tracking-[0.3em] mb-2"
              style={{ color: "#946b2d" }}
            >
              CHAPTER IV
            </div>
            <h2 className="cinzel-dec text-4xl md:text-6xl gold-foil font-bold mb-3">
              The Arts of Magic
            </h2>
            <p className="fell italic text-[17px]" style={{ color: "#e8d4a0" }}>
              ~ a full record of spells mastered and studied ~
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4">
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
              const isParchment = [0, 2, 4, 6, 8].includes(i);

              return (
                <FadeUp key={s.title} className={spanMap[i]}>
                  <div
                    className={`rounded-sm p-8 md:p-10 min-h-[280px] lift relative flex flex-col justify-between overflow-hidden ${isParchment ? "parchment" : ""}`}
                    style={
                      !isParchment
                        ? {
                            background:
                              "linear-gradient(135deg, #2a1810 0%, #1a0f08 100%)",
                            border: "1px solid rgba(148, 107, 45, 0.3)",
                          }
                        : {}
                    }
                  >
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="cinzel text-[10px] tracking-[0.3em]"
                          style={{ color: isParchment ? "#7f0909" : "#946b2d" }}
                        >
                          ✦ SPELL {String(i + 1).padStart(2, "0")} ·{" "}
                          {s.subtitle.toUpperCase()} ✦
                        </div>
                        <div
                          className="cinzel-dec text-2xl"
                          style={{ color: isParchment ? "#7f0909" : "#d4af37" }}
                        >
                          {s.rune}
                        </div>
                      </div>
                      <h3
                        className="cinzel-dec text-2xl md:text-3xl font-bold"
                        style={{ color: isParchment ? "#2a1810" : "#f4e4bc" }}
                      >
                        {s.title}
                      </h3>
                    </div>

                    <div className="relative flex flex-wrap gap-2 mt-6">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="fell text-[14px] px-3 py-1.5 rounded-sm border"
                          style={{
                            background: isParchment
                              ? "rgba(127, 9, 9, 0.05)"
                              : "rgba(212, 175, 55, 0.08)",
                            borderColor: isParchment
                              ? "rgba(127, 9, 9, 0.3)"
                              : "rgba(212, 175, 55, 0.25)",
                            color: isParchment ? "#2a1810" : "#e8d4a0",
                          }}
                        >
                          ⸗ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </section>

        {/* ==================== CAPABILITIES ==================== */}
        <section className="max-w-[1100px] mx-auto px-6 mb-16">
          <div className="grid grid-cols-12 gap-4">
            <FadeUp className="col-span-12 md:col-span-8">
              <div className="parchment rounded-sm p-10 md:p-12 min-h-[360px] lift flex flex-col justify-between">
                <div className="relative">
                  <div
                    className="cinzel text-[10px] tracking-[0.3em] mb-4"
                    style={{ color: "#7f0909" }}
                  >
                    ✦ OATH OF PRACTICE ✦
                  </div>
                  <h3
                    className="cinzel-dec text-3xl md:text-4xl mb-5"
                    style={{ color: "#2a1810" }}
                  >
                    From first quill to final scroll.
                  </h3>
                  <p
                    className="fell text-[17px] leading-[1.7] max-w-xl"
                    style={{ color: "#2a1810" }}
                  >
                    Comfortable across the full development lifecycle —
                    requirement analysis, UI architecture, development, defense
                    (testing), and production issue resolution. A strong
                    collaborator in the guilds of Agile, working
                    shoulder-to-shoulder with designers, backend wizards, and
                    product sorcerers to deliver features worthy of the chamber.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="col-span-12 md:col-span-4">
              <div
                className="rounded-sm p-8 min-h-[360px] lift relative overflow-hidden flex flex-col justify-between"
                style={{
                  background:
                    "linear-gradient(135deg, #7f0909 0%, #c91818 50%, #7f0909 100%)",
                  border: "1px solid #ffc500",
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, #ffd700, transparent 50%)",
                  }}
                />
                <div className="relative">
                  <div
                    className="cinzel text-[10px] tracking-[0.3em] mb-3"
                    style={{ color: "#ffd700" }}
                  >
                    ✦ CURRENT QUESTS ✦
                  </div>
                  <h3
                    className="cinzel-dec text-2xl font-bold mb-4"
                    style={{ color: "#ffd700" }}
                  >
                    Deeper magics pursued
                  </h3>
                </div>
                <div
                  className="relative fell text-[15px] leading-[1.6]"
                  style={{ color: "#ffefcc" }}
                >
                  <p className="mb-2">⸗ Advanced frontend architecture</p>
                  <p className="mb-2">⸗ Scalable UI systems</p>
                  <p className="mb-2">⸗ AI-powered web applications</p>
                  <p className="italic mt-4" style={{ color: "#ffd700" }}>
                    "The quest is ongoing."
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ==================== CHRONICLES (EXPERIENCE) ==================== */}
        <section id="chronicles" className="max-w-[1100px] mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <div
              className="cinzel text-[11px] tracking-[0.3em] mb-2"
              style={{ color: "#946b2d" }}
            >
              CHAPTER V
            </div>
            <h2 className="cinzel-dec text-4xl md:text-6xl gold-foil font-bold mb-3">
              The Chronicles
            </h2>
            <p className="fell italic text-[17px]" style={{ color: "#e8d4a0" }}>
              ~ a timeline of guilds served and ranks ascended ~
            </p>
          </div>

          <FadeUp>
            <div className="parchment rounded-sm p-8 md:p-14 relative">
              {/* Timeline ornament */}
              <div
                className="absolute left-8 md:left-14 top-10 bottom-10 w-px"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, #7f0909 20%, #7f0909 80%, transparent)",
                }}
              />

              <div className="space-y-10 relative">
                {experience.map((e, i) => (
                  <div key={i} className="flex gap-6 md:gap-8">
                    {/* Sigil */}
                    <div className="relative flex-shrink-0 z-10">
                      <div
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center cinzel-dec text-2xl font-black"
                        style={{
                          background: e.active
                            ? "radial-gradient(circle at 30% 30%, #ffd700, #b8860b 60%, #5a3a00)"
                            : "radial-gradient(circle at 30% 30%, #e8d4a0, #8b5a2b 60%, #3a2810)",
                          color: e.active ? "#2a1810" : "#f4e4bc",
                          boxShadow: e.active
                            ? "0 0 20px rgba(255, 215, 0, 0.5), inset -2px -2px 6px rgba(0,0,0,0.3)"
                            : "inset -2px -2px 6px rgba(0,0,0,0.4)",
                          border:
                            "2px solid " + (e.active ? "#ffd700" : "#5a3a1a"),
                        }}
                      >
                        {e.sigil}
                      </div>
                      {e.active && (
                        <div
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse"
                          style={{
                            background: "#ffd700",
                            boxShadow: "0 0 10px #ffd700",
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-6">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <div
                            className="cinzel-dec text-3xl font-bold"
                            style={{ color: "#2a1810" }}
                          >
                            {e.company}
                          </div>
                          <div
                            className="fell italic text-[15px] mt-0.5"
                            style={{ color: "#7f0909" }}
                          >
                            ~ {e.subtitle} ~
                          </div>
                        </div>
                        <div
                          className="cinzel text-[10px] tracking-[0.25em] px-3 py-1 border"
                          style={{
                            color: e.active ? "#7f0909" : "#5a3a1a",
                            borderColor: e.active ? "#7f0909" : "#5a3a1a",
                            background: e.active
                              ? "rgba(127, 9, 9, 0.1)"
                              : "transparent",
                          }}
                        >
                          {e.active
                            ? "★ CURRENTLY SERVING"
                            : "SERVICE COMPLETE"}
                        </div>
                      </div>
                      <div
                        className="fell text-[17px] mt-2"
                        style={{ color: "#2a1810" }}
                      >
                        {e.role}
                      </div>
                      <div
                        className="cinzel text-[11px] tracking-[0.2em] mt-2"
                        style={{ color: "#5a3a1a" }}
                      >
                        {e.period.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer flourish */}
              <div
                className="mt-8 text-center cinzel text-[10px] tracking-[0.3em]"
                style={{ color: "#7f0909" }}
              >
                ⚜ CHRONICLE CONTINUES ⚜
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ==================== OWL POST (CONTACT) ==================== */}
        <section id="owl" className="max-w-[1100px] mx-auto px-6 mb-16">
          <FadeUp>
            <div
              className="rounded-sm p-12 md:p-20 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #0e1a40 0%, #1a2b5a 50%, #0e1a40 100%)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
              }}
            >
              {/* Starfield */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(1px 1px at 10% 20%, white, transparent), radial-gradient(1px 1px at 25% 70%, white, transparent), radial-gradient(1px 1px at 40% 40%, #ffd700, transparent), radial-gradient(2px 2px at 60% 30%, white, transparent), radial-gradient(1px 1px at 75% 60%, white, transparent), radial-gradient(1px 1px at 90% 20%, white, transparent), radial-gradient(1px 1px at 85% 85%, #ffd700, transparent), radial-gradient(1px 1px at 15% 90%, white, transparent)",
                }}
              />

              {/* Moon */}
              <div
                className="absolute top-10 right-10 w-20 h-20 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #f4e4bc, #d4b088 50%, #8b5a2b)",
                  boxShadow: "0 0 40px rgba(244, 228, 188, 0.3)",
                }}
              />

              <div className="relative">
                <div
                  className="cinzel text-[11px] tracking-[0.4em] mb-4"
                  style={{ color: "#d4af37" }}
                >
                  ✦ CHAPTER FINAL ✦
                </div>

                <h2 className="cinzel-dec text-5xl md:text-7xl font-black gold-foil mb-6">
                  Send an Owl.
                </h2>

                <p
                  className="fell italic text-[19px] md:text-[22px] max-w-xl mx-auto mb-10"
                  style={{ color: "#e8d4a0" }}
                >
                  The night sky is open, the wax is warm, the owls are awake.
                  <br />
                  Write, and they shall carry your words swiftly.
                </p>

                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <a
                    href="mailto:shikhar.pranjal3@gmail.com"
                    className="cinzel px-8 py-3.5 text-[12px] tracking-[0.25em] transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #d4af37, #b8860b)",
                      color: "#1a0f08",
                      border: "2px solid #ffd700",
                    }}
                  >
                    ✦ SEND BY OWL POST ✦
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pranjalshikhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cinzel px-6 py-3.5 text-[12px] tracking-[0.25em] transition-all hover:bg-white/5"
                    style={{ color: "#d4af37", border: "1px solid #d4af37" }}
                  >
                    LINKEDIN TOWER
                  </a>
                  <a
                    href="https://github.com/pranjalshikhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cinzel px-6 py-3.5 text-[12px] tracking-[0.25em] transition-all hover:bg-white/5"
                    style={{ color: "#d4af37", border: "1px solid #d4af37" }}
                  >
                    THE GITHUB VAULT
                  </a>
                </div>

                <div
                  className="mt-12 cinzel text-[10px] tracking-[0.4em]"
                  style={{ color: "#946b2d" }}
                >
                  ⚜ shikhar.pranjal3@gmail.com ⚜
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer
          className="max-w-[1100px] mx-auto px-6 py-12 border-t"
          style={{ borderColor: "rgba(212, 175, 55, 0.2)" }}
        >
          <div className="text-center">
            <div
              className="fell italic text-lg mb-3"
              style={{ color: "#d4af37" }}
            >
              "Mischief Managed."
            </div>
            <div
              className="cinzel text-[10px] tracking-[0.3em] mb-2"
              style={{ color: "#946b2d" }}
            >
              ⚜ MMXXVI · PRANJAL SHIKHAR SINHA · PUNE, INDIA ⚜
            </div>
            <div
              className="fell italic text-[13px]"
              style={{ color: "#5a3a1a" }}
            >
              Crafted in React and TypeScript · charted by moonlight
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ===== Project Scroll Card ===== */
function ProjectScroll({ p, size }) {
  const sizes = {
    large: {
      h: "min-h-[460px]",
      pad: "p-10 md:p-12",
      titleCls: "text-[42px] md:text-[52px]",
      headCls: "text-[22px] md:text-[26px]",
    },
    medium: {
      h: "min-h-[360px]",
      pad: "p-8 md:p-10",
      titleCls: "text-[32px] md:text-[38px]",
      headCls: "text-[17px] md:text-[20px]",
    },
    small: {
      h: "min-h-[280px]",
      pad: "p-6",
      titleCls: "text-[24px] md:text-[28px]",
      headCls: "text-[14px]",
    },
  }[size];

  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer">
      <div
        className={`rounded-sm ${sizes.pad} ${sizes.h} flex flex-col justify-between relative overflow-hidden lift`}
        style={{
          background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}ee 100%)`,
          border: `1px solid ${p.accent}55`,
        }}
      >
        {/* Corner flourishes */}
        <div
          className="absolute top-3 left-3 text-sm"
          style={{ color: p.accent }}
        >
          ✦
        </div>
        <div
          className="absolute top-3 right-3 text-sm"
          style={{ color: p.accent }}
        >
          ✦
        </div>
        <div
          className="absolute bottom-3 left-3 text-sm"
          style={{ color: p.accent }}
        >
          ✦
        </div>
        <div
          className="absolute bottom-3 right-3 text-sm"
          style={{ color: p.accent }}
        >
          ✦
        </div>

        {/* Starfield for magical feel */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 20% 40%, ${p.accent}, transparent), radial-gradient(1px 1px at 70% 70%, ${p.accent}, transparent), radial-gradient(1px 1px at 50% 20%, ${p.accent}, transparent)`,
          }}
        />

        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div
              className="cinzel text-[10px] tracking-[0.3em]"
              style={{ color: p.accent }}
            >
              ✦ {p.tag.toUpperCase()} ✦
            </div>
            <div className="text-2xl">{p.seal}</div>
          </div>
          <div
            className="cinzel text-[9px] tracking-[0.3em] opacity-70"
            style={{ color: p.accent }}
          >
            HOUSE · {p.house.toUpperCase()}
          </div>
        </div>

        <div className="relative">
          <div
            className={`cinzel-dec ${sizes.titleCls} font-black leading-[0.95] mb-2`}
            style={{ color: p.accent }}
          >
            {p.name}
          </div>
          <div
            className={`fell italic ${sizes.headCls} mb-3`}
            style={{ color: "#e8d4a0" }}
          >
            "{p.headline}"
          </div>
          {size !== "small" && (
            <p
              className="fell text-[14px] leading-[1.6] max-w-md"
              style={{ color: "rgba(232, 212, 160, 0.85)" }}
            >
              {p.desc}
            </p>
          )}
          {size === "large" && (
            <div
              className="mt-5 cinzel text-[11px] tracking-[0.3em] inline-flex items-center gap-2"
              style={{ color: p.accent }}
            >
              ✦ VISIT THE SCROLL →
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
