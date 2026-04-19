export function SectionHeader({ label, title, color }) {
  return (
    <div
      className="flex items-end justify-between mb-8 flex-wrap gap-4 pb-4 border-b"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div>
        <div className="mono text-[11px] tracking-wider mb-2" style={{ color }}>
          {label}
        </div>
        <h2
          className="serif italic"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.05,
            color: "#fafafa",
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
