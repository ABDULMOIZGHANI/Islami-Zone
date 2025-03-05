import React, { useEffect, useState } from "react";
import {
  AboutUs,
  Courses,
  CoursesCategory,
  Contacts,
} from "../data/AboutUs.js";
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const location = useLocation();
  const [conditions, setConditions] = useState(false);

  const handleConditions = () => {
    setConditions((prev) => !conditions);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer>
      <div className="md:h-[400px] h-auto bg-[#246545] w-[100%]">
        <div className="w-[90%] md:w-[85%] flex justify-between m-auto pt-16 text-white md:flex-row flex-col max-w-[1450px]">
          <div className="About">
            <h2 className="cinzel text-[26px] font-bold mb-6">About Us</h2>
            {AboutUs.map((val, index) => (
              <div
                key={index}
                className="flex gap-[14px] items-center mb-[23px]"
              >
                <i className="fa-solid fa-chevron-right text-[12px]"></i>
                {val.value === "Terms And Conditions" ||
                val.value === "Privacy Policy" ? (
                  <p
                    className="poppins text-[16px] text-[#f9f9f9] cursor-pointer"
                    onClick={handleConditions}
                  >
                    {val.value}
                  </p>
                ) : (
                  <Link to={val.link}>
                    <p className="poppins text-[16px] text-[#f9f9f9]">
                      {val.value}
                    </p>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="About">
            <h2 className="cinzel text-[26px] font-bold mb-6">
              Courses For You
            </h2>
            {Courses.map((val, index) => (
              <div
                key={index}
                className="flex gap-[14px] items-center mb-[23px]"
              >
                <i className="fa-solid fa-chevron-right text-[12px]"></i>
                <Link to={val.link}>
                  <p className="poppins text-[16px] text-[#f9f9f9]">
                    {val.value}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          <div className="About">
            <h2 className="cinzel text-[26px] font-bold mb-6">
              Courses Category
            </h2>
            {CoursesCategory.map((val, i) => (
              <div key={i} className="flex gap-[14px] items-center mb-[23px]">
                <i className="fa-solid fa-chevron-right text-[12px]"></i>
                <Link to={val.link}>
                  <p className="poppins text-[16px] text-[#f9f9f9]">
                    {val.value}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          <div className="About">
            <h2 className="cinzel text-[26px] font-bold mb-6">
              Contact Details
            </h2>
            {Contacts.map((val, i) => (
              <div key={i} className="flex gap-[14px] items-center mb-[23px]">
                <i className="fa-solid fa-chevron-right text-[12px]"></i>
                <Link to={val.link}>
                  <p className="poppins text-[16px] text-[#f9f9f9]">
                    {val.value}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1e1e1e] ">
        <div className="w-[90%] md:w-[85%] m-auto h-[104px] flex justify-between items-center max-w-[1450px]">
          <Link to="/home">
            <h2 className="cinzel text-[26px] font-bold text-[#fff]">
              Islami Zone
            </h2>
          </Link>

          <div className="flex gap-[10px]">
            <Link to="https://www.instagram.com/islami__zone/" target="_blank">
              <FaInstagramSquare className="text-[40px] text-[#fff]" />
            </Link>
            <Link
              to="https://www.facebook.com/islamizoneonlinequran"
              target="_blank"
            >
              <FaFacebookSquare className="text-[40px] text-[#fff]" />
            </Link>
            <Link
              to="https://www.youtube.com/@rizwanfareedofficial"
              target="_blank"
            >
              <FaYoutube className="text-[40px] text-[#fff]" />
            </Link>
          </div>

          <p className="poppins text-[16px] text-[#fff] hidden md:block">
            Copyright reserves Islami Zone
          </p>
        </div>

        <p className="poppins text-[16px] text-center pb-[20px] text-[#fff] sm:block md:hidden">
          Copyright @ Islami Zone (Mobile)
        </p>
      </div>

      {conditions && (
        <Conditions className="max:w-[650px]  bg-[#fff]">
          <div
            onClick={handleConditions}
            className="absolute right-[10px] top-[10px] cursor-pointer"
          >
            ✖️
          </div>
          <h1 className="cinzel text-[24px] font-extrabold mb-[10px]">
            Terms & Conditions
          </h1>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>1. </strong>Tuition fees must be paid in advance and are
            non-refundable.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>2. </strong>
            All classes will be scheduled according to Pakistan Standard Time
            (PST), and time zone changes will not affect class timings.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>3. </strong>
            Make-up classes are only provided if a tutor misses a lesson, but
            not for student absences.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>4. </strong>
            Classes will not be conducted on Islamic holidays such as
            Eid-ul-Fitr, Eid-ul-Adha, 9-10 Muharram, and 27th Ramadan, but will
            be rescheduled accordingly.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>5. </strong>
            If tuition fees are not paid by the due date, Islami Zone reserves
            the right to discontinue classes and terminate enrollment without
            prior notice.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>6. </strong>
            Students are responsible for attending classes on time, and while
            reminder messages may be sent, attendance remains their
            responsibility.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>7. </strong>
            Islami Zone reserves the right to refuse service to anyone without
            explanation.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>8. </strong> By clicking "Submit," you agree to receive
            WhatsApp notifications regarding your enrollment, including updates
            on application status and other relevant information, with the
            option to opt out anytime.
          </p>
        </Conditions>
      )}
    </footer>
  );
};

export default Footer;

const Conditions = styled.div`
  position: fixed;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust for exact center */
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  z-index: 1000; /* Ensure it appears above other content */
  max-height: 90vh; /* Limit height to 80% of the viewport */
  overflow-y: auto; /* Add scroll if content exceeds height */

  @media (max-width: 520px) {
    width: 95%;
    height: auto;
  }
`;
