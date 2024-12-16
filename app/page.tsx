"use client";
import { motion, useScroll } from "framer-motion";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Objectives from "./components/Objectives";
import Timeline from "./components/Timeline";
import Timer from "./components/Timer";
import Tracks from "./components/Tracks";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
        }}
      />
      <Header />
      <Hero />
      <About />
      <Tracks />
      {/* <Timeline /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
