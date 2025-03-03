import React from "react";
import ChooseIslamiZone from "../data/ChooseIslamiZone.js";
const WhyIslamiZone = () => {
  return (
    <section>
      <h1 className="text-center cinzel text-4xl font-bold pt-[60px] pb-[50px]">
        Why Choose Islami Zone?
      </h1>
      <div className="w-[85%] max-w-[1450px] m-auto bg-[#246545] flex justify-evenly gap-[20px] p-[30px] pt-[50px] pb-[50px] rounded-[12px] mb-20 shadow-[8px_8px_12px_rgba(0,0,0,0.25)]  flex-col md:flex-row">
        {ChooseIslamiZone.map((value, i) => (
          <div
            key={i}
            className="text-center flex flex-col gap-5 mb-10 md:mb-0 md:w-[33%]"
          >
            <img src={value.img} alt="" className="block m-auto" />
            <h3 className="text-[15px] text-[#fff] font-bold cinzel">
              {value.heading}
            </h3>
            <p className="poppins text-[13px] font-light text-[#eaeaea]">
              {value.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyIslamiZone;
