import React from "react";
import styled from "styled-components";

const Button = ({ value }) => {
  return (
    <MainButton className="text-base poppins bg-[#246545] pl-12 pr-12  pb-3 pt-3 text-[#f9f9f9] rounded-lg cursor-pointer">
      {value}
    </MainButton>
  );
};

export default Button;

const MainButton = styled.button`
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #22543d;
    box-shadow: 3px 5px 4px 0px rgba(0, 0, 0, 0.25);
    transition: 0.3s all ease;
  }
`;
