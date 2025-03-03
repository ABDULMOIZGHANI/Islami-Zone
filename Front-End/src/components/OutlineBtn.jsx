import React from "react";
import styled from "styled-components";

const OutlineBtn = ({ value }) => {
  return (
    <MainButton className="text-base poppins bg-[#fff] pl-10 pr-10  pb-2.5 pt-2.5 text-[#246545] rounded-lg cursor-pointer">
      {value}
    </MainButton>
  );
};

export default OutlineBtn;

const MainButton = styled.button`
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: solid 2px #246545;
`;
