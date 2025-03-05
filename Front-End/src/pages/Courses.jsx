import React, { useEffect } from "react";
import styled from "styled-components";
import { useCoursesContext } from "../context/courseContext";
import Button from "../components/Button";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const Courses = () => {
  const { isLoading, allCourses } = useCoursesContext();
  // console.log("ALLCOURSES", allCourses);
  const { courseName } = useParams();
  // console.log("courseName: ", courseName);

  const filteredCourses = [
    "courses-for-childrens",
    "courses-for-adults",
    "courses-for-females",
  ].includes(courseName)
    ? allCourses.filter((course) => course.category === courseName)
    : allCourses;
  // console.log("FILTER", filteredCourses);

  return (
    <div className="relative">
      <LeftStars src="/courses/Lstars.png" alt="" />
      <RightStars src="/courses/Stars.png" alt="" />
      <section className="w-[90%] md:w-[85%] m-auto max-w-[1450px]">
        <h1 className="text-center cinzel text-4xl font-bold pt-[60px] pb-[50px]">
          {courseName === "courses-for-childrens" && "Courses For Childrens"}
          {courseName === "courses-for-adults" && "Courses For Adults"}
          {courseName === "courses-for-females" && "Courses For Females"}
          {courseName === "AllCourses" && "All Courses"}
        </h1>
        <p className="text-[18px] text-[#171717] poppins text-center mb-[80px]">
          Welcome to the Courses section of Islami Zone, your trusted
          destination for learning and understanding the divine teachings of
          Islam. We offer a wide range of carefully designed Islamic courses for
          children, adults, and females, ensuring everyone can deepen their
          connection with the Quran and Sunnah.
        </p>

        {!filteredCourses.length ? (
          <div className="text-center cinzel text-[20px] text-[#171717]">
            <Spinner />
          </div>
        ) : (
          <div className="flex justify-between gap-[10px] flex-wrap mb-[40px] flex-col md:flex-row">
            {isLoading ? (
              <Spinner />
            ) : (
              filteredCourses.map((course) => (
                <div
                  key={course._id}
                  className="md:w-[30%] mb-[20px] glassyBG shadow text-center flex flex-col gap-3 p-[20px] rounded-t-[20px] rounded-br-[20px]"
                >
                  <div className="flex justify-center bg-[#fff] rounded-[12px] py-[30px]">
                    <img src={course.img} alt={course.title} />
                  </div>
                  <h2 className="cinzel font-bold text-[20px] text-[#171717]">
                    {course.title}
                  </h2>
                  <p className="poppins text-[15px] text-[#171717] font-light">
                    {course.definition.slice(0, 203)}...
                  </p>
                  <div className="mt-[10px]">
                    <Link to={`/course-detail/${course.title}`}>
                      <Button value="Read More" {...course} />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>
      <RightStar src="./sectionImages/RightStar.png" alt="" />
    </div>
  );
};

export default Courses;

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
