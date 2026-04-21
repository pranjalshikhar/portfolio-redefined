export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center pt-20 pb-12">
      <div className="apple-eyebrow text-[#0071e3] mb-3">{eyebrow}</div>
      <h2 className="apple-display text-mega">
        {title}
        {subtitle && (
          <>
            <br />
            <span className="text-[#86868b]">{subtitle}</span>
          </>
        )}
      </h2>
    </div>
  );
}
