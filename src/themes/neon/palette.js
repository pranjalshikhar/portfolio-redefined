export const neon = {
  lime: "#a3e635",
  cyan: "#22d3ee",
  magenta: "#e879f9",
  amber: "#fbbf24",
  coral: "#fb7185",
  violet: "#a78bfa",
  mint: "#34d399",
  sky: "#60a5fa",
};

export function resolveColor(item) {
  return item.color ?? neon[item.colorKey];
}
