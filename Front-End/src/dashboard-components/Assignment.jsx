import React, { useEffect, useState } from "react";
import { useCoursesContext } from "../context/courseContext";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Assignment = () => {
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const [userCNIC, setUserCNIC] = useState("");
  const { isLoading, allStudentsData, allTeachersData } = useCoursesContext();

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    setUserID(localStorage.getItem("user_id"));
    setUserCNIC(localStorage.getItem("CNIC"));
  }, []);

  console.log("User ID:", userID);
  console.log("User Name:", userName);
  console.log("User CNIC:", userCNIC);
  console.log("All Teachers", allTeachersData);

  const currentStudent = allStudentsData?.find(
    (student) => student._id === userID
  );

  let filteredTeacher = null;

  if (currentStudent) {
    filteredTeacher = allTeachersData
      .filter((teacher) => teacher.CNIC === Number(currentStudent.teacher))
      .map((name) => name.name);
  }

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="overflow-x-auto">
      {!currentStudent ? (
        <div className="w-[100%]  mx-auto mt-12">
          <h2 className="text-xl cinzel font-semibold text-gray-800 mb-4">
            Assignment
          </h2>
          <table className="w-[100%] border border-gray-300 rounded-lg overflow-x-auto">
            <tbody>
              {userID === "67bea3852df014b331adcdfd" ? (
                // Table for Admin (userID matches)
                <table className="w-[100%] overflow-x-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="p-3">Name</th>
                      <th className="p-3">Days</th>
                      <th className="p-3">Timing</th>
                      <th className="p-3">Course</th>
                      <th className="p-3">Teacher</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allStudentsData.map((student, index) => (
                      <tr key={index} className="border-t border-gray-300">
                        <td className="p-3">{student.name}</td>
                        <td className="p-3">{student.days.join(", ")}</td>
                        <td className="p-3">{student.timing[0] || "N/A"}</td>
                        <td className="p-3">{student.chooseCourse || "N/A"}</td>
                        <td className="p-3">{student.teacher[0] || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                // Tables for Non-Admin (userID does not match)
                <div>
                  {/* Table 1: Students Assigned to the Teacher */}
                  <table className="w-full mb-8 overflow-x-auto">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="p-3">Name</th>
                        <th className="p-3">Days</th>
                        <th className="p-3">Timing</th>
                        <th className="p-3">Course</th>
                        <th className="p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allStudentsData
                        .filter((student) => student.teacher[0] === userCNIC)
                        .map((student, index) => (
                          <tr key={index} className="border-t border-gray-300">
                            <td className="p-3">{student.name}</td>
                            <td className="p-3">{student.days.join(", ")}</td>
                            <td className="p-3">
                              {student.timing[0] || "N/A"}
                            </td>
                            <td className="p-3">
                              {student.chooseCourse || "N/A"}
                            </td>
                            <td className="p-3">
                              <Link
                                to={`/dashboard/assignment/add-assignment/${student._id}`}
                              >
                                <Button value="+" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>

                  {/* Table 2: Assignments for Students Assigned to the Teacher */}
                  <table className="w-full overflow-x-auto">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="p-3">Your Student's Lessons</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allStudentsData
                        .filter((student) => student.teacher[0] === userCNIC)
                        .map((student, index) => (
                          <React.Fragment key={index}>
                            {/* Display Student Name */}
                            <tr className="border-t border-gray-300">
                              <td
                                colSpan="3"
                                className="p-3 font-bold bg-gray-100"
                              >
                                {student.name}
                              </td>
                            </tr>
                            {/* Display Assignments */}
                            {student.assignment &&
                            student.assignment.length > 0 ? (
                              student.assignment.map(
                                (assignment, assignmentIndex) => (
                                  <tr
                                    key={assignmentIndex}
                                    className="border-t border-gray-300"
                                  >
                                    <td className="p-3 pl-6">{assignment}</td>
                                  </tr>
                                )
                              )
                            ) : (
                              <tr className="border-t border-gray-300">
                                <td
                                  colSpan="3"
                                  className="p-3 pl-6 text-gray-500"
                                >
                                  No assignments found.
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-[100%] mx-auto mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Student Assignment
          </h2>
          <table className="w-[100%] border border-gray-300 rounded-lg overflow-x-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Your Lesson Topic</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Teacher</th>
              </tr>
            </thead>
            <tbody>
              {currentStudent.days?.map((day, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="p-3">
                    {currentStudent.assignment[index] || "N/A"}
                  </td>
                  <td className="p-3">
                    {currentStudent.chooseCourse || "N/A"}
                  </td>
                  <td className="p-3">{filteredTeacher[0] || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Assignment;
