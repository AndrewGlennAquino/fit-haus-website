import { motion } from "motion/react";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";

const Footer = () => {
  const iconVariants = {
    animate: { scale: 1.25 },
  };

  return (
    <footer className="bg-mustard p-default flex justify-center items-center gap-8">
      <h1 className="text-3xl">Socials</h1>
      <ul className="flex gap-8">
        <motion.a
          href="#"
          whileHover="animate"
          whileTap="animate"
          variants={iconVariants}
        >
          <li className="socials">
            <img src={instagram} />
          </li>
        </motion.a>
        <motion.a
          href="#"
          whileHover="animate"
          whileTap="animate"
          variants={iconVariants}
        >
          <li className="socials">
            <img src={facebook} />
          </li>
        </motion.a>
      </ul>
    </footer>
  );
};

export default Footer;
