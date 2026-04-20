import { lazy, Suspense } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const Neon = lazy(() => import("./themes/Neon"));
const Minimalist = lazy(() => import("./themes/Minimalist"));
const Comics = lazy(() => import("./themes/Comics"));
const Wizarding = lazy(() => import("./themes/Wizarding"));

const THEME_MAP = {
  neon: Neon,
  minimalist: Minimalist,
  comics: Comics,
  wizarding: Wizarding,
};

function ThemeRenderer() {
  const { theme } = useTheme();
  const Component = THEME_MAP[theme];
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: "100vh", backgroundColor: "#050505" }} />
      }
    >
      <Component />
    </Suspense>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeRenderer />
    </ThemeProvider>
  );
}
