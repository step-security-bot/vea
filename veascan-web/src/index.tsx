import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global-style";
import { theme } from "styles/themes";
import App from "./App";

const WebApp = () => (
  <React.StrictMode>
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(<WebApp />);
}
