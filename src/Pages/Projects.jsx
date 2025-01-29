import React from "react";
import HeroBanner from "../components/HeroBanner";
import Image1 from "../../src/assets/Snaps/28.jpg";
import MyProjects from "../components/Projects/MyProjects";

function Projects() {
  return (
    <>
      <HeroBanner
        // sectionName="02 - MY PROJECTS"
        pageTitle="My Projects "
        Imagee={Image1}
        PageTitle2=" PITCH DECK2"
      />{" "}
      <MyProjects />
    </>
  );
}

export default Projects;
