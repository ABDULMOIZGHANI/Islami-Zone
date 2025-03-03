import React from "react";
import OurMission from "../components/OurMission";
import WhyIslamiZone from "../components/WhyIslamiZone";
import EnrollNow from "../components/EnrollNow";
import FeedbackForm from "../components/FeedbackForm";

const AboutUs = () => {
  return (
    <>
      <div>
        <main className="w-[90%] md:w-[85%] m-auto max-w-[1450px]">
          <h1 className="text-center cinzel text-4xl font-bold pt-[60px] pb-[50px]">
            About Islami Zone
          </h1>
          <p className="text-[18px] text-[#171717] poppins text-center">
            Welcome to Islami Zone, your trusted online Quran learning institute
            connecting passionate teachers with dedicated students worldwide. We
            specialize in providing high-quality education in Quranic studies,
            Tajweed, and the Arabic language, ensuring a seamless and effective
            learning experience for all ages. <br /> At Islami Zone, we pride
            ourselves on offering a unique approach to online Quran education by
            using custom-built programs and tools specifically designed for
            interactive learning. Unlike traditional platforms, we do not rely
            on third-party video conferencing tools; instead, we deliver a
            tailored learning environment for maximum engagement and growth.
          </p>
          <img
            src="/AboutUs/AboutUs Section.png"
            alt=""
            className="block m-auto center mt-[-100px] md:mt-[-220px] relative z-[-1]"
          />
        </main>

        <OurMission />
        <WhyIslamiZone />
        <EnrollNow />
        <FeedbackForm />
      </div>
    </>
  );
};

export default AboutUs;
