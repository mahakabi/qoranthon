"use client";
import About from "./components/About";
import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Objectives from "./components/Objectives";
import Tracks from "./components/Tracks";
import EmergingTechnologies from "./components/EmergingTechnologies";
import Timeline from "./components/Timeline";
import ProgressBar from "./components/ProgressBar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Prizes from "./components/Prize";
import Partners from "./components/Partners";
import Reqierment from "./components/Reqierment";
// import ContactUs from "./components/ContactUs";

export default function Home() {

  return (
    <div className="view">
      <ProgressBar />
      <ScrollToTopButton />
      <Header />
      <Hero />
      <div className="w-full h-1 bg-secondary"></div>
      <About />
      <Objectives />
      {/* <div className="w-full h-1 bg-secondary"></div> */}
      <Tracks />
      <EmergingTechnologies />
      <Prizes />
      <Reqierment />
      <Timeline />
      <Partners />
      <FAQ />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </div>
  );
}
