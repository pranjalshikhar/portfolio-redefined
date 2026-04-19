import { ArrowUpRight } from "lucide-react";

const sizeStyles = {
  large: {
    h: "min-h-[360px]",
    pad: "p-10",
    titleCls: "text-[44px] md:text-[56px]",
    descCls: "text-[15px]",
  },
  medium: {
    h: "min-h-[280px]",
    pad: "p-8",
    titleCls: "text-[32px] md:text-[38px]",
    descCls: "text-[13.5px]",
  },
  small: {
    h: "min-h-[220px]",
    pad: "p-6",
    titleCls: "text-[22px] md:text-[26px]",
    descCls: "text-[12px]",
  },
};

export function ProjectBentoCard({ p, size }) {
  const s = sizeStyles[size];
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer">
      <div
        className={`card card-accent project-card ${s.pad} ${s.h} flex flex-col justify-between relative overflow-hidden`}
        style={{ "--accent": p.color }}
      >
        <div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${p.color} 0%, transparent 60%)`,
            opacity: 0.06,
          }}
        />

        <div className="relative flex items-start justify-between">
          <span
            className="chip"
            style={{
              color: p.color,
              borderColor: `${p.color}30`,
              background: `${p.color}08`,
            }}
          >
            {p.tag}
          </span>
          <ArrowUpRight className="w-4 h-4" style={{ color: p.color }} />
        </div>

        <div className="relative">
          <div
            className={`project-name serif italic ${s.titleCls} leading-[0.95] mb-3`}
            style={{ color: "#fafafa" }}
          >
            {p.name}
          </div>
          <p className={`text-mid ${s.descCls} leading-[1.55] max-w-md`}>
            {p.desc}
          </p>
          {size === "large" && (
            <div className="mt-6 arrow-link">Visit site →</div>
          )}
        </div>
      </div>
    </a>
  );
}
