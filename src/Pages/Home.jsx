import React from "react";
import HeroBanner from "../components/HeroBanner";
import HomeFlex from "../components/HomeFlex";
import HomeIntro from "../components/HomeIntro";
import HomeKeyAchievement from "../components/HomeKeyAchievement";
function Home() {
  return (
    <>
      <HeroBanner
        sectionName="Section 1"
        sectionNo="01"
        pageTitle="Maxwell Blanksby"
        description="High School Student at Catlin Gabel | Aspiring AI & Quantum Computing Expert | Innovator, Strategist, and STEM Enthusiast with a Passion for Cutting-Edge Technology."
      />
      <HomeFlex />
      <HomeIntro />
      <HomeKeyAchievement />
    </>
  );
}

export default Home;
