import React from "react";
import TopProjects from "./_components/top-projects";
import TopActivities from "./_components/top-activities";
import TopPodcasts from "./_components/top-podcasts";

const Home = () => {
  return (
    <div className="container h-full">
      <TopProjects />
      <hr />
      <TopActivities />
      <hr />
      <TopPodcasts />
      <hr />
    </div>
  );
};

export default Home;
