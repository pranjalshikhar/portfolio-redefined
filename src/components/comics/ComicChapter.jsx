export default function ComicChapter({ num, label, sfx }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 flex-wrap">
        <div
          className="bowlby text-6xl md:text-8xl"
          style={{
            color: "#fbbf24",
            WebkitTextStroke: "3px #0a0a0a",
            textShadow: "4px 4px 0 #dc2626, 6px 6px 0 #0a0a0a",
          }}
        >
          #{num}
        </div>
        <div className="flex-1 h-1.5" style={{ background: "#0a0a0a" }} />
        <div className="caption-box inline-block text-[14px] md:text-[16px]">
          {label}
        </div>
      </div>
      <div
        className="bangers text-3xl md:text-5xl mt-3"
        style={{
          color: "#dc2626",
          WebkitTextStroke: "1px #0a0a0a",
          textShadow: "3px 3px 0 #0a0a0a",
          letterSpacing: "0.04em",
        }}
      >
        ★ {sfx} ★
      </div>
    </div>
  );
}
