import React from "react";
import steps from "../data/threeSteps.js";

const SimpleSteps = () => {
  return (
    <section>
      <h1 className="text-center cinzel text-4xl font-bold pt-[100px] pb-[50px]">
        BEGIN YOUR LEARNING JOURNEY IN 3 SIMPLE STEPS
      </h1>

      <div className="w-[90%] md:w-[85%] max-w-[1450px] m-auto flex md:flex-row flex-col">
        {steps.map((step, i) => (
          <div
            key={i}
            className="md:w-[33%] w-[100%] bg-[#E9F0EC] border-[#246545] border-b-2 md:border-b-0 md:border-r-2  pl-[40px] pr-[40px] pt-[20px] pb-[20px] justify-center"
          >
            <h1 className="poppins number-size font-semibold text-[#246545] mr-[12px]">
              {step.step}
            </h1>
            <div className="">
              <h3 className="text-center poppins text-[24px] font-semibold text-[#246545] mt-[26px] mb-[10px]">
                {step.heading}
              </h3>
              <p className="text-center poppins text-[13px] text-[#246545]">
                {step.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimpleSteps;
