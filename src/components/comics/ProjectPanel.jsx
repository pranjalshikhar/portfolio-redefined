export default function ProjectPanel({ p, size }) {
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
            className={`inter mt-3 font-semibold ${size === "small" ? "text-[12px]" : "text-[14px]"} leading-normal`}
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
