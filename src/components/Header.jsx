import { useState } from "react";
import { motion } from "motion/react";

const Header = () => {
  const [clicked, setClicked] = useState(false); // Store if user clicked in state

  // Function that handles click
  const handleClick = () => {
    setClicked(!clicked);
  };

  // Animation variants for hamburger menu
  const topBottomBarVariants = {
    animateTop: { rotate: "45deg", y: "0.85rem" },
    animateBottom: { rotate: "-45deg", y: "-0.85rem" },
    animateHover: { x: "0.5rem" },
  };

  const middleBarVariants = {
    animateMiddle: { opacity: 0 },
  };

  return (
    <header className="bg-mustard fixed top-0 left-0 right-0 z-1 flex justify-between items-center">
      <h1 className="font-staatliches text-5xl flex flex-col justify-center">
        Fit Haus
      </h1>

      <motion.nav
        className="hamburger-menu w-12 h-12 flex flex-col justify-evenly"
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
  );
}

export default Header;
