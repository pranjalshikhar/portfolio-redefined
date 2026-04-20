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
  },
];

export const experienceYears =
  new Date().getUTCFullYear() - new Date(2022, 6).getUTCFullYear();

const tw = new ToWords({ localeCode: "en-US" });
export const experienceYearsToWords = tw.convert(experienceYears);
