import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App, ScrollToTop } from "./App";
import Header from "./components/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <App />
    </BrowserRouter>
  </StrictMode>
);
