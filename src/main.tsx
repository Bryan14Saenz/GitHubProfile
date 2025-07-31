// Import For StrictMode, createRoot
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Import For App Component
import App from "./App.tsx";
// Import For index.css
import "./index.css";

// Create Root For App Component
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
