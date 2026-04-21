import { ToWords } from "to-words";

const theme = sessionStorage.getItem("theme") || "neon";
const isNeon = theme === "neon";
const isMinimalist = theme === "minimalist";
const isComics = theme === "comics";
const isWizarding = theme === "wizarding";

export const projects = [
  {
    name: "Aizen",
    tag: "Developer Tool",
    desc: "Transforms raw source code into beautiful images and gifs — the developer's answer to the splash page.",
    url: "https://aizen.netlify.app/",
    ...(isNeon && {
      colorKey: "violet",
    }),
    ...(isMinimalist && {
      headline: "Code, framed.",
      theme: "dark",
      bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
      accent: "#c4b5fd",
    }),
    ...(isComics && {
      codename: "Project: Frame",
      headline: "Code, weaponized for the feed!",
      bg: "#fbbf24",
      ink: "#0a0a0a",
      sfx: "ZAP!",
      issue: "001",
    }),
  },
  {
    name: "Kamui",
    tag: "Productivity",
    desc: "Plan, prioritize, and ship — a board built for operators who move fast and break nothing.",
    url: "https://kamui-kanban.netlify.app/",
    ...(isNeon && {
      colorKey: "cyan",
    }),
    ...(isMinimalist && {
      headline: "Plan with superpowers.",
      theme: "dark",
      bg: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
      accent: "#6ee7b7",
    }),
    ...(isComics && {
      codename: "Project: Command",
      headline: "A Kanban with superpowers!",
      url: "https://kamui-kanban.netlify.app/",
      bg: "#3b82f6",
      ink: "#0a0a0a",
      sfx: "BAM!",
      issue: "002",
    }),
  },
  {
    name: "Potion",
    tag: "Workspace",
    desc: "Better, faster, more fluid work. Pages that link, blocks that remember, a workspace that feels alive.",
    url: "https://potion-write.vercel.app/",
    ...(isNeon && {
      colorKey: "lime",
    }),
    ...(isMinimalist && {
      headline: "A faster way to write.",
      theme: "dark",
      bg: "linear-gradient(135deg, #18181b 0%, #27272a 100%)",
      accent: "#fafafa",
    }),
    ...(isComics && {
      codename: "Project: Cortex",
      headline: "A connected workspace!",
      bg: "#f5f5f5",
      ink: "#0a0a0a",
      sfx: "WHAM!",
      issue: "003",
    }),
  },
  {
    name: "Pokédex",
    tag: "Explorer",
    desc: "A compendium of creatures, lore, and stats. Filter by type, study by detail, master the index.",
    url: "https://pokedex-polly.netlify.app/",
    ...(isNeon && {
      colorKey: "coral",
    }),
    ...(isMinimalist && {
      headline: "Gotta catch 'em all.",
      theme: "dark",
      bg: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #dc2626 100%)",
      accent: "#fca5a5",
    }),
    ...(isComics && {
      codename: "Project: Codex",
      headline: "Catalogue every creature!",
      bg: "#dc2626",
      ink: "#fef3c7",
      sfx: "POW!",
      issue: "004",
    }),
  },
  {
    name: "Evo Gym",
    tag: "Landing",
    desc: "A fitness landing experience where every scroll builds momentum. Strength for body and browser.",
    url: "https://evogymm.netlify.app/",
    ...(isNeon && {
      colorKey: "amber",
    }),
    ...(isMinimalist && {
      headline: "Move, storied.",
      theme: "dark",
      bg: "linear-gradient(135deg, #1c1917 0%, #292524 100%)",
      accent: "#fbbf24",
    }),
    ...(isComics && {
      codename: "Project: Forge",
      headline: "Motion-led storytelling!",
      bg: "#f97316",
      ink: "#0a0a0a",
      sfx: "KRASH!",
      issue: "005",
    }),
  },
  {
    name: "Nike Store",
    tag: "E-commerce",
    desc: "A product-focused storefront with bold typography and motion hooks. Ready to convert on contact.",
    url: "https://nikestore-polly.netlify.app/",
    ...(isNeon && {
      colorKey: "mint",
    }),
    ...(isMinimalist && {
      headline: "Just scroll it.",
      theme: "light",
      bg: "linear-gradient(135deg, #fafafa 0%, #e5e5e5 100%)",
      accent: "#171717",
    }),
    ...(isComics && {
      codename: "Project: Runway",
      headline: "Just scroll it!",
      bg: "#18181b",
      ink: "#fef3c7",
      sfx: "BOOM!",
      issue: "006",
    }),
  },
  {
    name: "Crypto Hunter",
    tag: "Fintech",
    desc: "Track trending currencies with real-time pricing, sorting, and a clean data view for the street.",
    url: "https://crytocurrencyhunter.netlify.app/",
    ...(isNeon && {
      colorKey: "sky",
    }),
    ...(isMinimalist && {
      headline: "Live markets, decoded.",
      theme: "dark",
      bg: "linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)",
      accent: "#7dd3fc",
    }),
    ...(isComics && {
      codename: "Project: Ledger",
      headline: "Live markets, decoded!",
      bg: "#16a34a",
      ink: "#0a0a0a",
      sfx: "ZOOM!",
      issue: "007",
    }),
  },
  {
    name: "Red Eye",
    tag: "Quiz",
    desc: "A question-based system that reveals your cinematic DNA — one answer at a time.",
    url: "https://red-eye.netlify.app/",
    ...(isNeon && {
      colorKey: "magenta",
    }),
    ...(isMinimalist && {
      headline: "What should you watch?",
      theme: "dark",
      bg: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)",
      accent: "#fca5a5",
    }),
    ...(isComics && {
      codename: "Project: Oracle",
      headline: "What should you watch?!",
      bg: "#7c3aed",
      ink: "#fef3c7",
      sfx: "SNIKT!",
      issue: "008",
    }),
  },
  {
    name: "Portfolio V3",
    tag: "Source",
    desc: "Built on Next.js + Tailwind. A playground for UI experiments, motion design, and a new personal brand.",
    url: "https://pranjalshikhar.vercel.app/",
    ...(isNeon && {
      colorKey: "lime",
    }),
    ...(isMinimalist && {
      headline: "Alternate Portfolio.",
      theme: "dark",
      bg: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
      accent: "#38bdf8",
    }),
    ...(isComics && {
      codename: "Project: Origin",
      headline: "Alternate Portfolio",
      bg: "#0ea5e9",
      ink: "#0a0a0a",
      sfx: "THWIP!",
      issue: "009",
    }),
  },
];

const tw = new ToWords({ localeCode: "en-US" });
export const projectsCountToWords = tw.convert(projects.length);
