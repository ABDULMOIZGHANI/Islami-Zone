import React from "react";

const OurMission = () => {
  return (
    <section className="w-[85%] md:w-[75%] max-w-[1450px] flex justify-between items-center m-auto mt-[60px] flex-col md:flex-row ">
      <div className="w-[100%] md:w-[50%]">
        <h2 className="text-[38px] font-bold cinzel">Our Mission</h2>
        <p className="poppins text-[17px] text-[#171717]">
          Our mission is to promote Quranic knowledge and nurture both spiritual
          and academic development in students worldwide. With a team of highly
          qualified and experienced instructors, we provide personalized Quran
          lessons that cater to the needs of every learner, whether you are a
          beginner or looking to deepen your understanding of the Quran.
        </p>
      </div>
      <div className="w-[420px] md:mt-[0px] mt-[30px]">
        <img src="/AboutUs/Mockup-IslamiZone.png" alt="Mockup-IslamiZone" />
      </div>
    </section>
  );
};

export default OurMission;
