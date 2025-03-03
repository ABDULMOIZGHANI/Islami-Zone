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
    </section>
  );
};

export default KeyFeatures;
