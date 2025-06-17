import { motion } from "motion/react";

const About = () => {
  // Animation variants for text container
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.15,
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
    <motion.section
      id="about"
      className="min-h-[50dvh] flex flex-col justify-center gap-8"
      initial="initial"
      whileInView="animate"
      variants={containerVariants}
    >
      <motion.h1 variants={textVariants}>About us</motion.h1>

      <motion.p variants={textVariants}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quam
        ipsam dolores reprehenderit quaerat iure ab vitae enim facilis sint
        nihil sit perspiciatis nulla ullam dignissimos eveniet sed a cupiditate.
      </motion.p>
    </motion.section>
  );
};

export default About;
