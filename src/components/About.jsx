import { motion } from "motion/react";

const About = () => {
  // Animation variants for header and text
  const variants = {
    initial: { opacity: 0, x: 250 },
    animate: { 
      opacity: 1, 
      x: 0, 
      transition: {
        duration: 0.5,
        delay: 0.05,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-dvh flex flex-col justify-center gap-8">
      <motion.h1
        className="font-staatliches text-5xl"
        initial="initial"
        whileInView="animate"
        variants={variants}
      >
        About us
      </motion.h1>

      <motion.p
        className="text-xl"
        initial="initial"
        whileInView="animate"
        variants={variants}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quam
        ipsam dolores reprehenderit quaerat iure ab vitae enim facilis sint
        nihil sit perspiciatis nulla ullam dignissimos eveniet sed a cupiditate.
      </motion.p>
    </section>
  );
};

export default About;
