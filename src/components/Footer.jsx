import { motion } from "motion/react";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";

const Footer = () => {
  const iconVariants = {
    animate: { scale: 1.25 },
  };

  return (
    <footer className="bg-mustard p-default flex flex-col justify-center items-center gap-4">
      <h1>Contacts + socials</h1>
      <div className="flex justify-between items-center gap-8">
        <ul className="flex gap-4">
          <motion.a
            href="https://www.instagram.com/fithausmazamitla/?hl=en"
            target="_blank"
            whileHover="animate"
            whileTap="animate"
            variants={iconVariants}
          >
            <li className="socials">
              <img src={instagram} />
            </li>
          </motion.a>
          <motion.a
            href="https://www.facebook.com/fithausmazamitla/"
            target="_blank"
            whileHover="animate"
            whileTap="animate"
            variants={iconVariants}
          >
            <li className="socials">
              <img src={facebook} />
            </li>
          </motion.a>
        </ul>

        <div className="flex flex-col md:flex-row md:gap-4">
          <a href="tel:+523826880013" className="underline">+52 382 688 0013</a>
          <a href="mailto:jorgebarajas0718@yahoo.com" className="underline">jorgebarajas0718@yahoo.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
