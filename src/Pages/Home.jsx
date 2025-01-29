import React from "react";
import HeroBanner from "../components/HeroBanner";
import Image1 from "../../src/assets/Snaps/32.jpg";
import MeetMax from "../components/Home/MeetMax";
import MaxEducation from "../components/Home/MaxEducation";
import MaxSkills from "../components/Home/MaxSkills";
import HoobiesActivities from "../components/Home/HoobiesActivities";
import GivingBack from "../components/Home/GivingBack";
import MyAncestry from "../components/Home/MyAncestry";
import Personalitytype from "../components/Home/Personalitytype";

function Home() {
  return (
    <>
      <HeroBanner
        sectionName="01 - MEET MAX"
        pageTitle="Maxwell Blanksby"
        Subtitle="HS Class of 2027"
        Imagee={Image1}
        PageTitle2=" PITCH DECK"
      />
      <MeetMax />
      <MaxEducation />
      <MaxSkills />
      <HoobiesActivities />
      <GivingBack />
      <MyAncestry />
      <Personalitytype />
    </>
  );
}

export default Home;
