import { motion } from "motion/react";
import Hero from "../components/Hero";
import tempHeroVideo from "../assets/videos/temp-hero-video.mp4";
import { AboutCondensed } from "./About";
import { ServicesCondensed } from "./Services";
import { MembershipCondensed } from "./Membership";
import { LocationCondensed } from "./Location";

/**
 * Landing page that users see on first load and return to home
 */
const Home = () => {
  return (
    <>
      <Hero
        video={true}
        src={tempHeroVideo}
        stringArray={["La Casa", "De Todos"]}
        height={100}
      />
      <AboutCondensed />
      <ServicesCondensed />
      <MembershipCondensed />
      <LocationCondensed />
    </>
  );
};

export default Home;
