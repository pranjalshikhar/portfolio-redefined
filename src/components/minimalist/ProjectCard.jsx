import { ArrowUpRight } from "lucide-react";
import ChevronRightTiny from "./ChevronRightTiny";

export default function ProjectCard({ p, size }) {
  const sizes = {
    large: {
      h: "min-h-[460px]",
      pad: "p-10 md:p-12",
      titleCls: "text-[44px] md:text-[56px]",
      headCls: "text-[28px] md:text-[34px]",
    },
    medium: {
      h: "min-h-[360px]",
      pad: "p-8 md:p-10",
      titleCls: "text-[36px] md:text-[42px]",
      headCls: "text-[22px] md:text-[26px]",
    },
    small: {
      h: "min-h-[280px]",
      pad: "p-6 md:p-7",
      titleCls: "text-[26px] md:text-[30px]",
      headCls: "text-[17px]",
    },
  }[size];

  const color = p.theme === "dark" ? "#f5f5f7" : "#1d1d1f";
  const muted =
    p.theme === "dark" ? "rgba(255,255,255,0.55)" : "rgba(29,29,31,0.6)";

  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer">
      <div
        className={`tile lift ${sizes.pad} ${sizes.h} flex flex-col justify-between relative`}
        style={{ background: p.bg, color }}
      >
        <div className="noise-soft" />
        <div className="relative flex items-start justify-between">
          <div className="apple-eyebrow" style={{ color: muted }}>
            {p.tag}
          </div>
          <ArrowUpRight className="w-4 h-4" style={{ color: p.accent }} />
        </div>
        <div className="relative">
          <div
            className={`apple-display ${sizes.titleCls} leading-[0.95]`}
            style={{ color: p.accent }}
          >
            {p.name}
          </div>
          {size !== "small" && (
            <div
              className={`apple-headline ${sizes.headCls} mt-2`}
              style={{ color }}
            >
              {p.headline}
            </div>
          )}
          <p
            className={`apple-body mt-2.5 ${size === "small" ? "text-[12.5px]" : "text-[15px]"} max-w-md`}
            style={{ color: muted }}
          >
            {p.desc}
          </p>
          {size === "large" && (
            <div
              className="mt-5 inline-flex items-center gap-1 text-[15px]"
              style={{ color: p.accent }}
            >
              Open project <ChevronRightTiny />
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
