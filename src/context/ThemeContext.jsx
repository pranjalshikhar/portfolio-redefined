import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const THEMES = ["neon", "minimalist", "comics", "wizarding"];

export const THEME_LABELS = {
  neon: "Neon",
  minimalist: "Minimalist",
  comics: "Comics",
  wizarding: "Wizarding",
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => sessionStorage.getItem("theme") ?? "neon"
  );

  function switchTheme(next) {
    setTheme(next);
    sessionStorage.setItem("theme", next);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
}
