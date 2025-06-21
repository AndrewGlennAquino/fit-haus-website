import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Hero from "../components/Hero";
import tempHeroImage from "../assets/images/temp-about-image.jpg";
import SeeMore from "../components/SeeMore";

/**
 * Condensed about component for home page
 */
export const AboutCondensed = () => {
  const ref = useRef(null); // ref.current.isInView

  /**
   * isInView is true if component is in viewprt, otherwise false
   * store value in ref
   */
  const isInView = useInView(ref, { once: true });

  // Animation variants for container
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  // Animation variants for header and text
  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" ref={ref}>
      <motion.div
        className="bg-black/50 h-condensed p-default relative flex flex-col justify-center gap-8 overflow-hidden"
        initial="initial"
        animate={isInView ? "animate" : null}
        variants={containerVariants}
      >
        <motion.div
          className="absolute inset-0 -z-1 w-dvw h-full"
          variants={textVariants}
        >
          <motion.img
            src={tempHeroImage}
            className="w-full h-full absolute inset-0 -z-1 object-cover"
          />
        </motion.div>

        <motion.h1 className="text-ghost" variants={textVariants}>
          About us
        </motion.h1>

        <motion.p className="text-ghost" variants={textVariants}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          quam ipsam dolores reprehenderit quaerat iure ab vitae enim facilis
          sint nihil sit perspiciatis nulla ullam dignissimos eveniet sed a
          cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias, quam ipsam dolores reprehenderit quaerat iure ab vitae enim
          facilis sint nihil sit perspiciatis nulla ullam dignissimos eveniet
          sed a cupiditate.
        </motion.p>

        <motion.div variants={textVariants}>
          <SeeMore route="/fit-haus-website/about" />
        </motion.div>
      </motion.div>
    </section>
  );
};

/**
 * Full page about component
 */
const About = () => {
  const ref = useRef(null); // ref.current.isInView

  /**
   * isInView is true if component is in viewprt, otherwise false
   * store value in ref
   */
  const isInView = useInView(ref, { once: true });

  // Animation variants for container
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  // Animation variants for header and text
  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Hero video={false} src={tempHeroImage} stringArray={["About", "Us"]} />
      <section id="about" ref={ref} className="bg-ghost p-default">
        <motion.div
          className="min-h-[50vh] flex flex-col justify-center gap-8"
          initial="initial"
          animate={isInView ? "animate" : null}
          variants={containerVariants}
        >
          <motion.h1 variants={textVariants}>About us</motion.h1>

          <motion.p variants={textVariants}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            quam ipsam dolores reprehenderit quaerat iure ab vitae enim facilis
            sint nihil sit perspiciatis nulla ullam dignissimos eveniet sed a
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias, quam ipsam dolores reprehenderit quaerat iure ab vitae
            enim facilis sint nihil sit perspiciatis nulla ullam dignissimos
            eveniet sed a cupiditate.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default About;
