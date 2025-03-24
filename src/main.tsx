import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

import "./index.css";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import { ThemeProvider } from "@gravity-ui/uikit";

const Root = document.getElementById("root");

if (!Root) {
  throw new Error("Root element not found");
}

createRoot(Root).render(
  <StrictMode>
    <ThemeProvider theme="system">
      <App />
    </ThemeProvider>
  </StrictMode>
);
