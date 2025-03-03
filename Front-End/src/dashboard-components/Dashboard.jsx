import React, { useEffect, useState } from "react";
import DashboardSideBar from "./DashboardSideBar";
import { useParams } from "react-router-dom";
import Home from "./Home";
import AllStudents from "./AllStudents";
import Feedback from "./Feedback";
import ApprovedFeedbacks from "./ApprovedFeedbacks";
import AllCourses from "./AllCourses";
import AddCourse from "./AddCourse";
import FreeTrial from "./FreeTrial";
import AllTeachers from "./AllTeachers";
import StudentForm from "./StudentForm";
import TeacherForm from "./TeacherForm";
import Assignment from "./Assignment";
import StudentAssignment from "./StudentAssignmnet";

const Dashboard = () => {
  const { page, value, id } = useParams();
  const page2 = `${page}/${value}`;

  // console.log(page, "/", value);

  return (
    <main className="flex">
      <DashboardSideBar />
      <div className="w-[100%] p-4">
        {page === "home" && <Home />}
        {page === "recent-feedbacks" && <Feedback />}
        {page === "approved-feedbacks" && <ApprovedFeedbacks />}
        {page === "all-courses" && <AllCourses />}
        {page === "add-courses" && <AddCourse />}
        {page2 === "all-students/student-form" && <StudentForm />}
        {`${page}/${value}` === "all-students/undefined" && <AllStudents />}
        {page2 === "all-teachers/teacher-form" && <TeacherForm />}
        {`${page}/${value}` === "all-teachers/undefined" && <AllTeachers />}
        {page === "free-trial" && <FreeTrial />}
        {page2 === "assignment/undefined" && <Assignment />}
        {page2 === "assignment/add-assignment" && <StudentAssignment />}
      </div>
    </main>
  );
};

export default Dashboard;
