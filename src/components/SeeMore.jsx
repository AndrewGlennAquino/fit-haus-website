import { motion } from "motion/react";
import { Link } from "react-router-dom";

const SeeMore = ({ route }) => {
  return (
    <Link to={route} className="font-bold">
      <motion.div
        className="link w-max"
        whileHover={{
          backgroundColor: "rgba(0, 0, 0, 1)",
          color: "var(--color-mustard)",
          transition: {
            duration: 0.15,
          },
        }}
        whileTap={{
          backgroundColor: "rgba(0, 0, 0, 1)",
          color: "var(--color-mustard)",
          transition: {
            duration: 0.15,
          },
        }}
      >
        See More
      </motion.div>
    </Link>
  );
};

export default SeeMore;
