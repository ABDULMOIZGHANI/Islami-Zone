import React from "react";

const BenefitsHeadings = ({
  img,
  heading,
  isSelected,
  onClick,
  isMobile,
  id,
}) => {
  return (
    <div className="service-name" id={id} onClick={onClick}>
      <div className="left-container">
        <img src={img} alt="" />
        <p className="cinzel">{heading} </p>
      </div>

      <div
        className="icon"
        style={{ display: !isMobile && isSelected ? "block" : "none" }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      <div
        className={`icon icon-for-mob ${
          isMobile && isSelected ? "rotate" : ""
        }`}
        style={{ display: isMobile ? "block" : "none" }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default BenefitsHeadings;
