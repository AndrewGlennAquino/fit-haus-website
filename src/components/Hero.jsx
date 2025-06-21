import { useRef } from "react";
import { motion, useInView } from "motion/react";

/**
 * Hero component where the video/image, header text, and height are customizeable
 *
 * @param {*} props boolean if src is .mp4, source of video/image, and array of strings for header
 */
const Hero = ({ video, src, stringArray }) => {
  const ref = useRef(null); // ref.current.isInView

  /**
   * isInView is true if component is in viewprt, otherwise false
   * store value in ref
   */
  const isInView = useInView(ref, { once: true });

  // Animation variants for header container
  const headerContainerVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.75,
        staggerChildren: 0.25,
      },
    },
  };

  // Animation variants for header text
  const headerVariants = {
    initial: { opacity: 0, x: 150, y: 150, scale: 0.25 },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return video ? (
    <section
      id="hero"
      ref={ref}
      className={`w-full min-h-[100vh] p-default flex flex-col justify-center items-start relative`}
    >
      <video
        src={src}
        playsInline
        autoPlay
        muted
        loop
        className="w-full h-full absolute inset-0 -z-1 object-cover"
      />

      <motion.div
        initial="initial"
        animate={isInView ? "animate" : null}
        variants={headerContainerVariants}
      >
        {stringArray.map((string) => (
          <motion.h1
            key={string}
            className="hero-header text-shadow"
            variants={headerVariants}
          >
            {string}
          </motion.h1>
        ))}
      </motion.div>
    </section>
  ) : (
    <section
      id="hero"
      ref={ref}
      className={`w-full min-h-[50vh] p-default flex flex-col justify-center items-start relative`}
    >
      <img
        src={src}
        loading="lazy"
        className="w-full h-full absolute inset-0 -z-1 object-cover"
      />

      <motion.div
        initial="initial"
        animate={isInView ? "animate" : null}
        variants={headerContainerVariants}
      >
        {stringArray.map((string) => (
          <motion.h1
            key={string}
            className="hero-header text-shadow"
            variants={headerVariants}
          >
            {string}
          </motion.h1>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
