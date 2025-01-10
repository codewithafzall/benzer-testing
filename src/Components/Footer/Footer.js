import React from "react";
import Contact from "./FooterImages/Contact.png";
import Career from "./FooterImages/Career.png";
import About from "./FooterImages/About.png";
import Work from "./FooterImages/Work.png";
import Logo from "./FooterImages/FooterLogo.png";
import ContactMobile from "./FooterImages/ContactMobile.png";
import CareerMobile from "./FooterImages/CareerMobile.png";
import AboutMobile from "./FooterImages/AboutMobile.png";
import WorkMobile from "./FooterImages/WorkMobile.png";

const Footer = () => {
  // Array of items to loop through for mobile and desktop sections
  const sections = [
    { title: "About", imgDesktop: About, imgMobile: AboutMobile },
    { title: "Work", imgDesktop: Work, imgMobile: WorkMobile },
    { title: "Career", imgDesktop: Career, imgMobile: CareerMobile },
    { title: "Contact", imgDesktop: Contact, imgMobile: ContactMobile },
  ];

  return (
    <div className="w-[85%] sm:w-9/12 py-16 mx-auto">
      {/* Desktop view */}
      <div className="md:flex justify-between items-center hidden">
        {sections.map((section, index) => (
          <img loading="lazy" className="md:max-w-[140px] lg:max-w-[180px] xl:max-w-[250px] w-full object-contain" key={index} src={section.imgDesktop} alt={section.title} />
        ))}
      </div>

      {/* Mobile view */}
      <div className="md:hidden justify-evenly items-center flex flex-col gap-y-6">
        {sections.map((section, index) => (
          <div key={index} className="w-full relative">
            <img src={section.imgMobile} className="w-full" alt={section.title} />
            <h1 className="text-sm sm:text-2xl exp-reg uppercase text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              {section.title}
            </h1>
          </div>
        ))}
      </div>

      {/* Footer logo and bottom section */}
      <img src={Logo} className="w-full my-6 sm:my-10 lg:border-b-2 border-[#AEAAB2] pb-6 sm:pb-10" alt="Logo" />
      <div className="lg:flex justify-between items-center hidden">
        <div className="flex text-lg items-center justify-between gap-x-6 uppercase exp-reg text-[#AEAAB2]">
          <h1>LinkedIn</h1>
          <h1>Instagram</h1>
          <h1>X</h1>
          <h1>YouTube</h1>
        </div>
        <p className="text-[#AEAAB2] exp-light text-xs">
          All rights reserved. Designed, developed & powered by HOWL Digital Agency
        </p>
      </div>

      <div className="flex flex-col justify-between items-center lg:hidden">
        <div className="flex text-xs items-center border-b-2 border-[#AEAAB2] pb-8 w-full  justify-between gap-x-6 uppercase exp-reg text-[#AEAAB2]">
          <h1>LinkedIn</h1>
          <h1>Instagram</h1>
          <h1>X</h1>
          <h1>YouTube</h1>
        </div>
        <p className="text-[#AEAAB2] mt-4 exp-light text-xs">
          All rights reserved. Designed, developed & powered by HOWL Digital Agency
        </p>
      </div>
    </div>
  );
};

export default Footer;
