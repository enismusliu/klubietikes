import React from "react";
import TopProjects from "./_components/top-projects";
import TopActivities from "./_components/top-activities";
import TopPodcasts from "./_components/top-podcasts";
import HeroSection from "./_components/hero-section";
import HaveQuestions from "@/components/have-questions";
import Sponsors from "@/components/sponsors";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col gap-10 pb-10 md:pb-20">
        <Sponsors />
        <TopProjects />
        <TopActivities />
        <TopPodcasts />
        <HaveQuestions className="container" />
      </div>
    </div>
  );
};

export default Home;
