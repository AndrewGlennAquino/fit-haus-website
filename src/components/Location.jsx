import { useRef } from "react";
import { motion, useInView } from "motion/react";

const Location = () => {
  const ref = useRef(null); // ref.current.isInView

  /**
   * isInView is true if component is in viewprt, otherwise false
   * store value in ref
   */
  const isInView = useInView(ref, { amount: 0.5 });

  const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Animation variants for text container
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.05,
      },
    },
  };

  // Animation variants for header and text
  const textVariants = {
    initial: { opacity: 0, y: 25 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="location"
      ref={ref}
      className="min-h-50dvh p-default flex flex-col justify-center gap-8"
    >
      <motion.div
        className="flex flex-col justify-center gap-4"
        initial="initial"
        animate={isInView ? "animate" : null}
        variants={containerVariants}
      >
        <motion.h1 variants={textVariants}>Location & Contact</motion.h1>
        <motion.p variants={textVariants}>
          Calle Vallarta #40, Mazamitla, Mexico
        </motion.p>
        <motion.p variants={textVariants}>+52 382 688 0013</motion.p>
        <motion.p variants={textVariants}>jorgebarajas0718@yahoo.com</motion.p>

        <motion.div
          className="flex justify-center items-center"
          variants={textVariants}
        >
          <iframe
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/view?zoom=17&center=19.9143%2C-103.0249&key=${key}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Location;
