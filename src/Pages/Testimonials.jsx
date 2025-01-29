import React from "react";
import HeroBanner from "../components/HeroBanner";
import Image1 from "../assets/Snaps/30.jpg";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
function Testimonials() {
  return (
    <>
      <HeroBanner
        sectionName="04 - Teachers Testimonials"
        pageTitle="Testimonials "
        Imagee={Image1}
      />{" "}
      <TestimonialCard />
    </>
  );
}

export default Testimonials;
