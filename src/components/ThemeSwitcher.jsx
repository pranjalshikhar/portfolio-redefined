import { useEffect, useRef, useState } from "react";
import { THEME_LABELS, THEMES, useTheme } from "../context/ThemeContext";

const VARIANTS = {
  dark: {
    btn: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "11px",
      letterSpacing: "0.08em",
      color: "#737373",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "999px",
      padding: "4px 12px",
      background: "rgba(255,255,255,0.03)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      transition: "all 0.2s",
    },
    menu: {
      background: "#0e0e0e",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "12px",
      overflow: "hidden",
    },
    item: { fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.06em" },
    active: { color: "#a3e635" },
    inactive: { color: "#737373" },
    itemHoverBg: "rgba(255,255,255,0.04)",
  },
  light: {
    btn: {
      fontSize: "12px",
      fontWeight: 500,
      color: "rgba(29,29,31,0.7)",
      border: "1px solid rgba(0,0,0,0.1)",
      borderRadius: "999px",
      padding: "4px 12px",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      transition: "all 0.2s",
    },
    menu: {
      background: "#fff",
      border: "1px solid rgba(0,0,0,0.1)",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    },
    item: { fontSize: "12px", fontWeight: 500 },
    active: { color: "#0071e3" },
    inactive: { color: "rgba(29,29,31,0.7)" },
    itemHoverBg: "rgba(0,0,0,0.04)",
  },
  comic: {
    btn: {
      fontFamily: "'Bangers', Impact, sans-serif",
      fontSize: "13px",
      letterSpacing: "0.06em",
      color: "#0a0a0a",
      border: "2px solid #0a0a0a",
      borderRadius: "0",
      padding: "2px 10px",
      background: "#fbbf24",
      boxShadow: "2px 2px 0 #0a0a0a",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      transition: "all 0.15s",
    },
    menu: {
      background: "#f5e9cf",
      border: "2px solid #0a0a0a",
      borderRadius: "0",
      overflow: "hidden",
      boxShadow: "4px 4px 0 #0a0a0a",
    },
    item: { fontFamily: "'Bangers', Impact, sans-serif", fontSize: "13px", letterSpacing: "0.06em" },
    active: { color: "#dc2626" },
    inactive: { color: "#0a0a0a" },
    itemHoverBg: "#fbbf24",
  },
  wizard: {
    btn: {
      fontFamily: "'Cinzel', serif",
      fontSize: "10px",
      letterSpacing: "0.15em",
      color: "#d4af37",
      border: "1px solid rgba(212,175,55,0.3)",
      borderRadius: "2px",
      padding: "4px 12px",
      background: "rgba(212,175,55,0.06)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      transition: "all 0.2s",
    },
    menu: {
      background: "#1a0f08",
      border: "1px solid rgba(212,175,55,0.3)",
      borderRadius: "2px",
      overflow: "hidden",
    },
    item: { fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "0.12em" },
    active: { color: "#fbbf24" },
    inactive: { color: "#d4af37" },
    itemHoverBg: "rgba(212,175,55,0.08)",
  },
};

export function ThemeSwitcher({ variant = "dark" }) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);
  const v = VARIANTS[variant];

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <button onClick={() => setOpen((o) => !o)} style={v.btn}>
        {THEME_LABELS[theme]}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          <path
            d="M1 1L4 4L7 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          style={{
            ...v.menu,
            position: "absolute",
            right: 0,
            top: "calc(100% + 6px)",
            minWidth: "130px",
            zIndex: 999,
          }}
        >
          {THEMES.map((id) => (
            <button
              key={id}
              onClick={() => {
                setTheme(id);
                setOpen(false);
              }}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...v.item,
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "9px 16px",
                background:
                  hovered === id
                    ? v.itemHoverBg
                    : "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.15s",
                ...(theme === id ? v.active : v.inactive),
              }}
            >
              {THEME_LABELS[id]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
