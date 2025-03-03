import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import axios from "axios";
import { handleSuccess } from "./utils";

const FeedbackForm = () => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8008/testimonial", {
        userName,
        email,
        country,
        message,
      })
      .then((result) => {
        // console.log(result);
        setName("");
        setEmail("");
        setCountry("");
        setMessage("");
        handleSuccess("Thank For your Feedback");
      })
      .catch((err) => console.log("ERROR", err));
  };

  return (
    <Section>
      <img
        src="./sectionImages/Feedback-Masjid.png"
        className="w-[100%] mt-[20px]"
        alt=""
      />
      <MainBox>
        <h1 className="text-center cinzel text-4xl font-bold pt-[80px] pb-[50px]">
          Get in Touch with Us
        </h1>
        <form
          action=""
          className="relative w-[90%] md:w-[669px] 2xl:w-[800px]  z-10 h-auto bg-[#F6F6F6] rounded-[25px] flex flex-col pt-[60px] pb-[70px] pr-[20px] pl-[20px] m-auto shadow-[0_0_20px_10px_rgba(0,0,0,0.25)]"
          onSubmit={Submit}
        >
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              required
              value={userName}
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <div className="w-[100%] flex gap-[20px]">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                required
                value={country}
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <br />
            <textarea
              placeholder="Enter your message here...."
              required
              rows={7}
              value={message}
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
          </div>
          <Button value={"Submit"} />
        </form>
      </MainBox>
      <Img
        className="w-[100%]"
        src="/sectionImages/FeedBack-Masjid-Bottom.png"
        alt=""
      />
    </Section>
  );
};

export default FeedbackForm;

const MainBox = styled.section`
  margin-top: -20px;
  background-image: url("/sectionImages/Feedback-bg.png"); /* Replace with your image path */
  background-size: cover; /* Ensures the image covers the entire section */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents repeating */
  width: 100%; /* Ensures full width */
  height: 120vh; /* Adjust as needed */
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;
