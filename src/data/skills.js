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

export const skills = [
  {
    title: "Programming Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "C"],
    icon: Code2,
    colorKey: "lime",
  },
  {
    title: "Frontend Frameworks",
    items: ["React.js", "Next.js", "Redux Toolkit", "Angular", "ReactFlow"],
    icon: Layers,
    colorKey: "cyan",
  },
  {
    title: "Styling & UI Systems",
    items: ["Tailwind CSS", "shadcn/ui", "Material UI", "Bootstrap"],
    icon: Palette,
    colorKey: "magenta",
  },
  {
    title: "Backend & APIs",
    items: ["REST APIs", "GraphQL", "API contracts", ".NET Core"],
    icon: Workflow,
    colorKey: "amber",
  },
  {
    title: "Databases",
    items: ["MySQL (SQL)", "Azure CosmosDB (NoSQL)"],
    icon: Database,
    colorKey: "coral",
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure", "Blob Storage", "Azure Pipelines", "Firebase"],
    icon: Cloud,
    colorKey: "violet",
  },
  {
    title: "Testing & Quality",
    items: ["Jest", "React Testing Library", "Unit", "Integration"],
    icon: TestTube,
    colorKey: "mint",
  },
  {
    title: "Design & Collaboration",
    items: ["Figma", "Prototyping", "Handoff", "Git", "VS Code"],
    icon: GitBranch,
    colorKey: "sky",
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
  },
];
