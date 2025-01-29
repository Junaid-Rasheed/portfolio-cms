import React from "react";
import HeroBanner from "../components/HeroBanner";
import Image1 from "../assets/Snaps/36.jpg";
import ContactForm from "../components/Contact/ContactForm";
function Contact() {
  return (
    <>
      <HeroBanner
        sectionName="06 - Contact ME"
        pageTitle="Get in Touch"
        Imagee={Image1}
        PageTitle2=" PITCH DECK6"
      />{" "}
      <ContactForm />
    </>
  );
}

export default Contact;
