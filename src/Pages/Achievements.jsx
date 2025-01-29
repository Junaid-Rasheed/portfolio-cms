import React from "react";
import AcademicAcheivement from "../components/Achievement/AcademicAcheivement";
import HeroBanner from "../components/HeroBanner";
import Image1 from "../assets/Snaps/29.jpg";
function Achievements() {
  return (
    <>
      <HeroBanner
        sectionName="03 - Academic Achievement"
        pageTitle="Achievements"
        Imagee={Image1}
        PageTitle2=" PITCH DECK3"
      />{" "}
      <AcademicAcheivement />
    </>
  );
}

export default Achievements;
