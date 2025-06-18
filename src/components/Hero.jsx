import { useRef } from "react";
import { motion, useInView } from "motion/react";
import tempHeroVideo from "../assets/videos/temp-hero-video.mp4";

const Hero = () => {
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
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  // Animation variants for header text
  const headerVariants = {
    initial: { opacity: 0, y: 150, scale: 0.25 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="w-full min-h-dvh relative flex flex-col justify-center items-end"
    >
      <video
        src={tempHeroVideo}
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
        <motion.h1
          className="hero-header text-shadow"
          variants={headerVariants}
        >
          La Casa
        </motion.h1>
        <motion.h1
          className="hero-header text-shadow"
          variants={headerVariants}
        >
          De Todos
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;
