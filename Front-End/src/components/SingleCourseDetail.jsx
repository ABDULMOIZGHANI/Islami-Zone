import React from "react";
import { useCoursesContext } from "../context/courseContext";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import MainSection from "./MainSection";
import Spinner from "./Spinner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

const SingleCourseDetail = () => {
  const { isLoading, allCourses } = useCoursesContext();
  const { id } = useParams();

  // Find the course by its ID or title
  const course = allCourses.find((course) => course.title === id);
  // console.log(course);

  return (
    <div className="relative">
      <LeftStars src="/courses/Lstars.png" alt="" />
      <RightStars src="/courses/Stars.png" alt="" />
      {!course ? (
        <Spinner />
      ) : (
        <div className="p-4 md:w-[85%] max-w-[1450px] m-auto">
          <h1 className="text-center cinzel text-4xl font-bold pt-[60px] pb-[50px]">
            {course.title}
          </h1>
          <p className="text-[18px] text-[#171717] poppins text-center mb-[80px]">
            {course.definition}////
          </p>

          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {course.detail}
          </ReactMarkdown>
          <div className="flex justify-center mb-[50px] h-[200px]">
            <img src={course.img} alt={course.title} className="block center" />
          </div>
          <h2 className="text-center cinzel text-4xl font-bold pb-[50px]">
            {course.whatYouLearn_Title}
          </h2>
          <p className="text-[18px] text-[#171717] poppins text-center mb-[80px]">
            {course.whatYouLearn_Detail}
          </p>
          <h2 className="text-center cinzel text-4xl font-bold pb-[50px]">
            {course.importanceTitle}
          </h2>
          <p className="text-[18px] text-[#171717] poppins text-center mb-[80px]">
            {course.ImportanceHeading}
          </p>

          {/* <h1 className="text-center cinzel text-4xl font-bold pt-[60px] pb-[50px]">
            {course.title}
          </h1>
          <ReactMarkdown>{course.detail}</ReactMarkdown>
          <div className="flex justify-center mb-[50px] h-[200px]">
            <img src={course.img} alt={course.title} className="block center" />
          </div>
          <h2 className="text-center cinzel text-4xl font-bold pb-[50px]">
            {course.whatYouLearn_Title}
          </h2>
          <ReactMarkdown>{course.whatYouLearn_Detail}</ReactMarkdown>
          <h2 className="text-center cinzel text-4xl font-bold pb-[50px]">
            {course.importanceTitle}
          </h2>
          <ReactMarkdown>{course.ImportanceHeading}</ReactMarkdown> */}

          <div className="flex flex-col items-center mb-[30px]">
            <h1 className="text-center cinzel text-4xl font-bold  pb-[50px]">
              Start Your Journey Today
            </h1>
            <p className="text-[18px] text-[#171717] poppins text-center mb-[50px]">
              The <b>{course.title}</b> at <b>Islami Zone</b> is more than just
              a lesson—it's the first step towards understanding and living by
              Allah’s words. Whether you’re taking your first step in Quranic
              learning or helping your child begin theirs, this course is your
              gateway to a lifetime of spiritual growth and rewards.
            </p>
            <Link to="/">
              <Button value="Get Free Trial Class" />
            </Link>
          </div>
        </div>
      )}

      <MainSection />
    </div>
  );
};

export default SingleCourseDetail;

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
