import { useRef } from "react";
import { motion, useInView } from "motion/react";

const About = () => {
  const ref = useRef(null); // ref.current.isInView

  /**
   * isInView is true if component is in viewprt, otherwise false
   * store value in ref
   */
  const isInView = useInView(ref, { amount: 0.5 });

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
    <section id="about" ref={ref}>
      <motion.div
        className="min-h-[50dvh] flex flex-col justify-center gap-8"
        initial="initial"
        animate={isInView ? "animate" : null}
        variants={containerVariants}
      >
        <motion.h1 variants={textVariants}>About us</motion.h1>

        <motion.p variants={textVariants}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          quam ipsam dolores reprehenderit quaerat iure ab vitae enim facilis
          sint nihil sit perspiciatis nulla ullam dignissimos eveniet sed a
          cupiditate.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
