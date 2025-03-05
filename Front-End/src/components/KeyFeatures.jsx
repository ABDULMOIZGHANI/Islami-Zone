import React from "react";
import features from "../data/keyFeatures.js";
const KeyFeatures = () => {
  return (
    <section>
      <h1 className="text-center cinzel text-4xl font-bold pt-[50px] pb-[50px]">
        Key Features of Our Islami Zone
      </h1>
      <div className="w-[90%] md:w-[85%] max-w-[1450px] m-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] auto-rows-fr">
        {features.map((feature, i) => (
          <div
            key={i}
            className="shadow-[5px_5px_12px_0px_rgba(0,0,0,0.25)] w-full border-[#245545] border-3 p-3 pt-5 pb-5 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]"
          >
            <img className="block m-auto" src={feature.img} alt="" />
            <h3 className="text-[22px] font-bold p-4 cinzel">
              {feature.heading}
            </h3>
            <p className="poppins text-[14px] font-light text-[#171717]">
              {feature.para}
            </p>
          </div>
        ))}
      </div>

      <div className="w-[90%] md:w-[85%] max-w-[1450px] m-auto text-center ">
        <h1 className="text-center cinzel text-4xl font-bold pt-[50px] pb-[50px]">
          Qualified Male & Female Quran Teachers at Islami Zone
        </h1>{" "}
        <p className="text-[18px] text-[#171717] poppins text-center">
          At Islami Zone, we are committed to providing quality Quran education
          to students worldwide. We offer highly qualified and experienced male
          and female teachers to ensure that every student feels comfortable and
          engaged in their learning journey. Whether you are a beginner or
          looking to advance your Quranic knowledge, our teachers are dedicated
          to guiding you with Tajweed, Tafseer, and Islamic studies in an
          interactive and supportive environment.
        </p>
        <div className="">
          <img
            src="/AboutUs/MALE_FEMALE_TEACHERS.png"
            alt=""
            className="md:w-[612px] w-[85%] m-auto mt-16"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
