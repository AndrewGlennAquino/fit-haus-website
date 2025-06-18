import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App, ScrollToTop } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
