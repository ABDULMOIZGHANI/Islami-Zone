import React from "react";
import styled from "styled-components";

const SecondSection = () => {
  return (
    <Section>
      <LeftDiv>
        <img src="/sectionImages/Left Design.png" alt="" />
      </LeftDiv>
      <RightDiv>
        <img src="/sectionImages/Right Design.png" alt="" />
      </RightDiv>

      <h1 className="text-center cinzel text-4xl font-bold pt-[100px] pb-[50px] resp">
        What is Isami Zone Project?
      </h1>

      <div className="flex md:w-[68%] w-[90%] max-w-[1450px] m-auto gap-[30px] items-center justify-between mb-[60px] flex-col md:flex-row">
        <p className="poppins text-[19px] text-[#171717] md:text-left text-center">
          <b>Islami Zone</b> is an online institute that connects teachers and
          students passionate about learning the Quran, Tajweed, or the Arabic
          language. It offers a unique approach by leveraging custom-built
          programs and applications specifically designed for effective
          learning. Unlike other platforms, Islami Zone operates independently
          without relying on third-party video conferencing tools or software.
        </p>
        <img src="/sectionImages/QURANPAK.png" alt="" />
      </div>

      <iframe
        className="m-auto mb-[20px] md:h-[600px] md:w-[85%] w-[90%] max-w-[1450px] h-[300px]"
        src="https://www.youtube.com/embed/sLaWTuFGQm0?si=RT-BFUfk2xbuFVFx"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Section>
  );
};

export default SecondSection;

const Section = styled.section`
  position: relative;
`;

const LeftDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 100%;
    /* max-width: 100px; */
  }
  @media (max-width: 768px) {
    /* display: none; */
    width: 150px;
  }
  @media (max-width: 520px) {
    /* display: none; */
    width: 120px;
    /* padding-bottom: 500px; */
  }
`;

const RightDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: 100%;
    /* max-width: 100px; */
  }
  @media (max-width: 768px) {
    width: 150px;
  }
  @media (max-width: 520px) {
    /* display: none; */
    width: 120px;
    /* padding-bottom: 500px; */
  }
`;
