"use client";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Objectives from "./components/Objectives";
import Tracks from "./components/Tracks";
import EmergingTechnologies from "./components/EmergingTechnologies";
import Timeline from "./components/Timeline";
import ProgressBar from "./components/ProgressBar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Prizes from "./components/Prize";
import ContactUs from "./components/ContactUs";

export default function Home() {

  return (
    <div className="view">
      <ProgressBar />
      <ScrollToTopButton />
      <Header />
      <Hero />
      <About />
      <Objectives />
      <Tracks />
      <EmergingTechnologies />
      <Prizes />
      <Timeline />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}
