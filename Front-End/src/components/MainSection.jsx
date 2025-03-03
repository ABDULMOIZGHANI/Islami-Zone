import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import axios from "axios";
import { handleError, handleSuccess } from "./utils";

const MainSection = () => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8008/free-trial", { userName, email, number })
      .then((result) => {
        setName("");
        setEmail("");
        setNumber("");
        // console.log(result);
        handleSuccess("Your free trial form submited successfully");
      })
      .catch((err) => handleError("Fail to submit the form"));
  };

  return (
    <Section>
      <div className="w-[95%] md:w-[85%] xlg:w-[100px] max-w-[1450px] m-auto h-[100%] flex items-center">
        <form
          action=""
          className="w-[100%] md:w-[419px] h-[500px] sm:h-[550px] md:h-[550px] lg:h-[480px] bg-[#fff] rounded-[25px] flex flex-col justify-between pt-[60px] pb-[70px] pr-[20px] pl-[20px]"
          onSubmit={Submit}
        >
          <h1 className="poppins text-[29px] font-bold text-center">
            Sign up for free trial
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              name=""
              id=""
              value={userName}
              placeholder="Name"
              required
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="Whatsapp Number"
              required
              value={number}
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={(e) => setNumber(e.target.value)}
            />
            <br />
          </div>
          <Button value={"Submit"} />
        </form>
      </div>
    </Section>
  );
};

export default MainSection;

const Section = styled.main`
  background-image: url("/sectionImages/MAIN SECTION BG.png"); /* Replace with your image path */
  background-size: cover; /* Ensures the image covers the entire section */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents repeating */
  width: 100%; /* Ensures full width */
  height: 90vh; /* Adjust as needed */
`;
