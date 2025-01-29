import React from "react";
import HeroBanner from "../components/HeroBanner";
import Image1 from "../assets/Snaps/31.jpg";
import MyGalleryImage from "../components/Gallery/MyGalleryImage";
import MyGalleryVideo from "../components/Gallery/MyGalleryVideo";
function Gallery() {
  return (
    <>
      <HeroBanner
        // sectionName="02 - MY PROJECTS"
        pageTitle="Gallery"
        Imagee={Image1}
        PageTitle2=" PITCH DECK2"
      />
      <MyGalleryImage />
      <MyGalleryVideo />
    </>
  );
}

export default Gallery;
