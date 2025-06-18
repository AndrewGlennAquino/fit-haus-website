import { useEffect } from "react";
import { motion } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

/**
 * Helper component that scrolls to top of page on route change
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * App component that returns all routes
 */
export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About condensed={false} />} />
      </Routes>
  );
};
