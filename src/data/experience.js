import { ToWords } from "to-words";

const theme = sessionStorage.getItem("theme") || "neon";
const isNeon = theme === "neon";
const isMinimalist = theme === "minimalist";
const isComics = theme === "comics";
const isWizarding = theme === "wizarding";

export const experience = [
  {
    company: "Accenture",
    role: "Senior Analyst",
    period: "May 2026 — Present",
    active: true,
    ...(isNeon && {
      colorKey: "lime",
    }),
    ...(isMinimalist && {
      gradient: "linear-gradient(135deg, #a855f7, #6366f1)",
    }),
    ...(isComics && {
      insignia: "A",
      classification: "LEVEL 7 · ACTIVE",
    }),
    ...(isWizarding && {
      sigil: "A",
      subtitle: "Order of Senior Analysts",
    }),
  },
  {
    company: "Infosys",
    role: "Digital Specialist Engineer L1",
    period: "Jan 2026 — May 2026",
    active: false,
    ...(isNeon && {
      colorKey: "cyan",
    }),
    ...(isMinimalist && {
      gradient: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
    }),
    ...(isComics && {
      insignia: "I",
      classification: "LEVEL 6 · ARCHIVED",
    }),
    ...(isWizarding && {
      sigil: "I",
      subtitle: "Rank Ascended",
    }),
  },
  {
    company: "Infosys",
    role: "Digital Specialist Engineer",
    period: "Jul 2022 — Dec 2025",
    active: false,
    ...(isNeon && {
      colorKey: "cyan",
    }),
    ...(isMinimalist && {
      gradient: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
    }),
    ...(isComics && {
      insignia: "I",
      classification: "LEVEL 5 · ARCHIVED",
    }),
    ...(isWizarding && {
      sigil: "I",
      subtitle: "Induction into the Guild",
    }),
  },
];

export const experienceYears =
  new Date().getUTCFullYear() - new Date(2022, 6).getUTCFullYear();

const tw = new ToWords({ localeCode: "en-US" });
export const experienceYearsToWords = tw.convert(experienceYears);
