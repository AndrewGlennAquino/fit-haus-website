import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Hero from "../components/Hero";
import tempLocationImage from "../assets/images/temp-location-image.jpg";

/**
 * Condensed Google maps component for home page
 */
export const LocationCondensed = () => {
  const ref = useRef(null); // ref.current.isInView

  const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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
    <section
      id="location"
      ref={ref}
      className="bg-ghost h-condensed p-default flex flex-col justify-center gap-8"
    >
      <motion.div
        className="flex flex-col justify-center gap-4"
        initial="initial"
        animate={isInView ? "animate" : null}
        variants={containerVariants}
      >
        <motion.h1 variants={textVariants}>Location</motion.h1>
        <motion.p variants={textVariants}>
          Calle Vallarta #40, Mazamitla, Mexico
        </motion.p>

        <motion.div
          className="flex justify-center items-center"
          variants={textVariants}
        >
          <iframe
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/view?zoom=19&center=19.9143%2C-103.0249&key=${key}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

/**
 * Condensed Google maps component for home page
 */
const Location = () => {
  const ref = useRef(null); // ref.current.isInView

  const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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
      <Hero video={false} src={tempLocationImage} stringArray={["Location"]} />
      <section
        id="location"
        ref={ref}
        className="bg-ghost h-condensed p-default flex flex-col justify-center gap-8"
      >
        <motion.div
          className="flex flex-col justify-center gap-4"
          initial="initial"
          animate={isInView ? "animate" : null}
          variants={containerVariants}
        >
          <motion.h1 variants={textVariants}>Location</motion.h1>
          <motion.p variants={textVariants}>
            Calle Vallarta #40, Mazamitla, Mexico
          </motion.p>

          <motion.div
            className="flex justify-center items-center"
            variants={textVariants}
          >
            <iframe
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/view?zoom=19&center=19.9143%2C-103.0249&key=${key}`}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Location;
