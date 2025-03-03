import React from "react";
import styled from "styled-components";
import FeedbackForm from "../components/FeedbackForm";

const ContactUs = () => {
  return (
    <section>
      <div className="relative">
        <LeftStars src="/courses/Lstars.png" alt="" />
        <RightStars src="/courses/Stars.png" alt="" />

        <div className="flex flex-col items-center">
          <h1 className="text-center cinzel text-4xl font-bold pt-[60px] pb-[20px]">
            Contact Us
          </h1>
        </div>

        <FeedbackForm />
      </div>
    </section>
  );
};

export default ContactUs;

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
