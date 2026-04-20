import { Shield, Sparkles, Zap } from "lucide-react";
import { neon } from "../themes/neon/palette";
import { experienceYears } from "./experience";

export const stats = [
  {
    label: "// TENURE",
    value: experienceYears,
    sub: "years shipping production UI",
    color: neon.lime,
    icon: Sparkles,
    size: "72px",
  },
  {
    label: "// PERFORMANCE",
    value: "35%",
    sub: "bundle size reduced",
    color: neon.cyan,
    icon: Zap,
    size: "64px",
  },
  {
    label: "// TEST COVERAGE",
    value: "95%",
    sub: "peak coverage · Jest + RTL",
    color: neon.magenta,
    icon: Shield,
    size: "64px",
  },
];
