import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { Link } from "react-router-dom";

/**
 * Header component that contains logo and hamburger navigation menu
 */
const Header = () => {
  const [clicked, setClicked] = useState(false); // Store if user clicked in state

  // Motion hook that tracks the absolute Y scroll position and returns a MotionValue object
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  /**
   * Motion hook that extracts the value from the scrollY MotionValue object when it changes.
   * Use the latest value to track if a user scrolls down from the top of the page, and change
   * the header background if the user is at the very top of the page or scrolled past the top.
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 0 ? setScrolled(true) : setScrolled(false);
  });

  // Function that handles click
  const handleClick = () => {
    setClicked(!clicked);
  };

  // Animation variants for hamburger menu
  const topBottomBarVariants = {
    animateTop: { rotate: "45deg", y: "0.75rem" },
    animateBottom: { rotate: "-45deg", y: "-0.75rem" },
    animateHover: { x: "0.5rem" },
  };

  const middleBarVariants = {
    animateMiddle: { opacity: 0 },
  };

  // Animation variants for links
  const linkVariants = {
    animate: {
      backgroundColor: "rgba(0, 0, 0, 1)",
      color: "var(--color-ghost)",
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <>
      <header
        id="header"
        className="bg-black/25 p-default flex justify-between items-center fixed top-0 left-0 right-0 z-1"
      >
        <motion.div
          initial={false}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 1.25 }}
        >
          <Link to="/fit-haus-website/">
            <motion.h1 className="text-mustard text-4xl flex flex-col justify-center">
              Fit Haus
            </motion.h1>
          </Link>
        </motion.div>

        <motion.nav
          id="hamburger-menu"
          className="w-10 h-10 flex flex-col justify-evenly"
          whileHover="animateHover"
          onClick={handleClick}
        >
          <motion.div
            animate={clicked ? "animateTop" : null}
            variants={topBottomBarVariants}
            className="bar"
          />
          <motion.div
            animate={clicked ? "animateMiddle" : null}
            variants={middleBarVariants}
            className="bar"
          />
          <motion.div
            animate={clicked ? "animateBottom" : null}
            variants={topBottomBarVariants}
            className="bar"
          />
        </motion.nav>
      </header>

      <AnimatePresence>
        <motion.aside
          id="links"
          className="bg-black/25 text-black font-bold w-3xs h-full p-default fixed z-10 top-[4.5rem] right-0"
          initial={{
            x: 300,
            opacity: 0,
          }}
          animate={
            clicked
              ? {
                  x: 0,
                  opacity: 1,
                }
              : null
          }
          exit={{
            opacity: 0,
          }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <ul className="flex flex-col items-end gap-12">
            <Link
              to="/fit-haus-website/"
              className="w-40 text-right"
              onClick={handleClick}
            >
              <motion.li
                className="link"
                whileHover="animate"
                whileTap="animate"
                variants={linkVariants}
              >
                Home
              </motion.li>
            </Link>
            <Link
              to="/fit-haus-website/about"
              className="w-40 text-right"
              onClick={handleClick}
            >
              <motion.li
                className="link"
                whileHover="animate"
                whileTap="animate"
                variants={linkVariants}
              >
                About us
              </motion.li>
            </Link>
            <Link
              to="/fit-haus-website/services"
              className="w-40 text-right"
              onClick={handleClick}
            >
              <motion.li
                className="link"
                whileHover="animate"
                whileTap="animate"
                variants={linkVariants}
              >
                Services
              </motion.li>
            </Link>
            <Link
              to="/fit-haus-website/membership"
              className="w-40 text-right"
              onClick={handleClick}
            >
              <motion.li
                className="link"
                whileHover="animate"
                whileTap="animate"
                variants={linkVariants}
              >
                Membership
              </motion.li>
            </Link>
            <Link
              to="/fit-haus-website/location"
              className="w-40 text-right"
              onClick={handleClick}
            >
              <motion.li
                className="link"
                whileHover="animate"
                whileTap="animate"
                variants={linkVariants}
              >
                Location
              </motion.li>
            </Link>
          </ul>
        </motion.aside>
      </AnimatePresence>
    </>
  );
};

export default Header;
