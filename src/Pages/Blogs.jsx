import React from "react";
import HeroBanner from "../components/HeroBanner";
import BlogBasic from "../components/Blog/BlogBasic";
import Image1 from "../assets/Snaps/33.jpg";
function Blogs() {
  return (
    <>
      <HeroBanner
        sectionName="05 - My Blog"
        pageTitle="My Blogs"
        Imagee={Image1}
        PageTitle2=" PITCH DECK5"
      />
      <BlogBasic />
    </>
  );
}

export default Blogs;
