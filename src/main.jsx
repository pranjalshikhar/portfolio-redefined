import setupLocatorUI from "@locator/runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
