import { motion } from "motion/react";
import { Link } from "react-router-dom";

const SeeMore = ({ route }) => {
  return (
    <motion.div
      className="w-max"
      whileHover={{
        scale: 1.25
      }}
      whileTap={{
        scale: 1.25
      }}
    >
      <Link to={route} className="bg-black text-ghost font-bold p-2 ">
        See More
      </Link>
    </motion.div>
  );
};

export default SeeMore;
