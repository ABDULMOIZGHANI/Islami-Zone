import React, { useEffect } from "react";
import {
  AboutUs,
  Courses,
  CoursesCategory,
  Contacts,
} from "../data/AboutUs.js";
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

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
              Courses For You
            </h2>
            {Courses.map((val, index) => (
              <div
                key={index}
                className="flex gap-[14px] items-center mb-[23px]"
              >
                <i className="fa-solid fa-chevron-right text-[12px]"></i>
                <p className="poppins text-[16px] text-[#f9f9f9]">
                  {val.value}
                </p>
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
              Courses Category
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
    </footer>
  );
};

export default Footer;
