import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import FAQs from "../data/FAQS";
import FeedbackForm from "../components/FeedbackForm";
import { Link } from "react-router-dom";

const FAQS = () => {
  return (
    <section className="relative overflow-hidden">
      <div className=" w-[85%] m-auto">
        <LeftStars src="/courses/Lstars.png" alt="" />
        <RightStars src="/courses/Stars.png" alt="" />

        <div className="flex flex-col items-center">
          <h1 className="text-center cinzel text-4xl font-bold pt-[90px] md:pt-[60px] pb-[20px]">
            Ask Us Anything
          </h1>
          <p className="text-[18px] text-[#171717] poppins text-center mb-[20px]">
            Have any questions? We are here to assist you
          </p>
          <div>
            <Link to="/contact-us">
              <Button value="Contact Us" className="block m-auto" />
            </Link>
          </div>
        </div>

        <h1 className="text-center cinzel text-4xl font-bold pt-[60px] pb-[50px]">
          FAQs
        </h1>

        <div className="flex gap-[15px] flex-wrap items-stretch justify-around mb-[50px] max-w-[1450px] m-auto">
          {FAQs.map((faq, i) => (
            <div
              key={i}
              className="rounded-t-2xl rounded-br-2xl glassyBG w-[350px] shadow p-[20px] mb-[20px]"
            >
              <h3 className="cinzel text-[18px] font-bold mb-[10px]">
                {faq.quest}
              </h3>
              <p className="poppins text-[15px] font-light text-[#171717]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <RightStar src="./sectionImages/RightStar.png" alt="" />
      </div>
      <FeedbackForm />
    </section>
  );
};

export default FAQS;

const LeftStars = styled.img`
  position: absolute;
  left: 0px;
  top: 10px;
  @media (max-width: 768px) {
    /* display: none; */
    width: 80px;
  }
`;

const RightStars = styled.img`
  position: absolute;
  right: 0px;
  top: 10px;
  @media (max-width: 768px) {
    /* display: none; */
    width: 80px;
  }
`;

const RightStar = styled.img`
  position: absolute;
  right: -50px;
  top: 110vh;
  z-index: -1;
`;
