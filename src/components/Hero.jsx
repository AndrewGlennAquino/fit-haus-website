import { motion } from "motion/react";
import tempHeroVideo from "../assets/videos/temp-hero-video.mp4";

const Hero = () => {
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
    initial: { opacity: 0, y: 250, scale: 1.25 },
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
        whileInView="animate"
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
