import {
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Palette,
  TestTube,
  Workflow,
} from "lucide-react";
import { ToWords } from "to-words";

const theme = sessionStorage.getItem("theme") || "neon";
const isNeon = theme === "neon";
const isMinimalist = theme === "minimalist";
const isComics = theme === "comics";
const isWizarding = theme === "wizarding";

export const skills = [
  {
    title: "Programming Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "C++"],
    icon: Code2,
    colorKey: "lime",
    ...(isComics && {
      subtitle: "THE CORE ARSENAL!",
      bg: "#fbbf24",
      sfx: "⚡",
    }),
    ...(isWizarding && {
      title: "Ancient Tongues",
      subTitle: "Programming Languages",
      rune: "Ⓐ",
    }),
  },
  {
    title: "Frontend Frameworks",
    items: ["React.js", "Next.js", "Redux Toolkit", "Angular", "ReactFlow"],
    icon: Layers,
    colorKey: "cyan",
    ...(isComics && {
      subtitle: "FIELD SPECIALTY!",
      bg: "#dc2626",
      sfx: "💥",
    }),
    ...(isWizarding && {
      title: "Core Spellbooks",
      subTitle: "Frontend Frameworks",
      rune: "Ⓑ",
    }),
  },
  {
    title: "UI Systems",
    items: ["Tailwind CSS", "shadcn/ui", "Material UI", "Bootstrap"],
    icon: Palette,
    colorKey: "magenta",
    ...(isComics && {
      subtitle: "SURFACE CRAFT!",
      bg: "#3b82f6",
      sfx: "✨",
    }),
    ...(isWizarding && {
      title: "Robes & Regalia",
      subTitle: "Styling & UI Systems",
      rune: "Ⓒ",
    }),
  },
  {
    title: "Backend & APIs",
    items: ["REST APIs", "GraphQL", "API contracts", ".NET Core"],
    icon: Workflow,
    colorKey: "amber",
    ...(isComics && {
      subtitle: "SIGNAL LAYER!",
      bg: "#16a34a",
      sfx: "📡",
    }),
    ...(isWizarding && {
      title: "Owl Post Protocols",
      subtitle: "Backend & APIs",
      rune: "Ⓓ",
    }),
  },
  {
    title: "Databases",
    items: ["MySQL (SQL)", "Azure CosmosDB (NoSQL)"],
    icon: Database,
    colorKey: "coral",
    ...(isComics && {
      subtitle: "THE DATA VAULT!",
      bg: "#f97316",
      sfx: "🗄️",
    }),
    ...(isWizarding && {
      title: "The Great Ledger",
      subtitle: "Databases",
      rune: "Ⓔ",
    }),
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure", "Blob Storage", "Azure Pipelines", "Firebase"],
    icon: Cloud,
    colorKey: "violet",
    ...(isComics && {
      subtitle: "SKY OPERATIONS!",
      bg: "#0ea5e9",
      sfx: "🛡️",
    }),
    ...(isWizarding && {
      title: "Cloud Citadels",
      subTitle: "Cloud & DevOps",
      rune: "Ⓕ",
    }),
  },
  {
    title: "Testing & Quality",
    items: ["Jest", "React Testing Library", "Unit", "Integration"],
    icon: TestTube,
    colorKey: "mint",
    ...(isComics && {
      subtitle: "THE DEFENSE GRID!",
      bg: "#0ea5e9",
      sfx: "🛡️",
    }),
    ...(isWizarding && {
      title: "Defense Arts",
      subTitle: "Testing & Quality",
      rune: "Ⓖ",
    }),
  },
  {
    title: "Design & Collaboration",
    items: ["Figma", "Prototyping", "Handoff", "Git", "VS Code"],
    icon: GitBranch,
    colorKey: "sky",
    ...(isComics && {
      subtitle: "BRIDGE OPERATIONS!",
      bg: "#ec4899",
      sfx: "✏️",
    }),
    ...(isWizarding && {
      title: "The Drafting Table",
      subtitle: "Design & Collaboration",
      rune: "Ⓗ",
    }),
  },
  {
    title: "Software Engineering",
    items: [
      "Component architecture",
      "Design principles",
      "Performance",
      "Scalable frontend",
    ],
    icon: Cpu,
    colorKey: "lime",
    ...(isComics && {
      subtitle: "THE DOCTRINE!",
      bg: "#fbbf24",
      sfx: "🧠",
    }),
    ...(isWizarding && {
      title: "Laws of Magic",
      subTitle: "Software Engineering",
      rune: "Ⓘ",
    }),
  },
];

const tw = new ToWords({ localeCode: "en-US" });
export const skillsToWords = tw.convert(skills.length);
