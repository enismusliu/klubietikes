import React from "react";
import TopProjects from "./_components/top-projects";
import TopActivities from "./_components/top-activities";
import TopPodcasts from "./_components/top-podcasts";
import HeroSection from "./_components/hero-section";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div id="scroll-to" className="pt-10 md:pt-20" />
      <div className="flex flex-col gap-10 pb-10 md:pb-20">
        <TopProjects />
        <TopActivities />
        <TopPodcasts />
      </div>
    </div>
  );
};

export default Home;
