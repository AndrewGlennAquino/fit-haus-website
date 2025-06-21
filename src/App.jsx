import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Membership from "./pages/Membership.jsx";
import Location from "./pages/Location.jsx";
import Footer from "./components/Footer.jsx";

/**
 * Helper component that scrolls to top of page on route change
 */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

/**
 * Helper component that triggers animation on route change
 */
const PageTransition = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        className="bg-black w-dvw h-screen fixed z-10 top-0 bottom-0 overflowX-hidden"
        initial={{ X: 0 }}
        animate={{ x: "100dvw" }}
        exit={{ x: "100dvw" }}
        transition={{
          duration: 0.5,
          delay: 0.25,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="bg-black w-dvw h-screen fixed z-10 top-0 bottom-0"
        initial={{ x: "-100dvw" }}
        animate={{ x: "-100dvw" }}
        exit={{ x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

/**
 * App component that returns all routes
 */
const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/fit-haus-website/"
            element={
              <PageTransition>
                <ScrollToTop />
                <Home />
                <ScrollToTop />
              </PageTransition>
            }
          />
          <Route
            path="/fit-haus-website/about"
            element={
              <PageTransition>
                <ScrollToTop />
                <About />
                <ScrollToTop />
              </PageTransition>
            }
          />
          <Route
            path="/fit-haus-website/services"
            element={
              <PageTransition>
                <ScrollToTop />
                <Services />
                <ScrollToTop />
              </PageTransition>
            }
          />
          <Route
            path="/fit-haus-website/membership"
            element={
              <PageTransition>
                <ScrollToTop />
                <Membership />
                <ScrollToTop />
              </PageTransition>
            }
          />
          <Route
            path="/fit-haus-website/location"
            element={
              <PageTransition>
                <ScrollToTop />
                <Location />
                <ScrollToTop />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
