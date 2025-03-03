import React, { useEffect } from "react";
import { useCoursesContext } from "../context/courseContext";
import { IconButton } from "@material-tailwind/react";
import Button from "../components/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const AllStudents = () => {
  const { isLoading, allStudentsData } = useCoursesContext();

  // console.log("ALL STUDENTS", allStudentsData);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8008/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="text-[20px] cinzel font-bold mb-[20px]">All Students</h1>
      <div className="flex flex-wrap gap-6">
        {isLoading
          ? "...LOADING"
          : allStudentsData.map((student) => (
              <div
                key={student._id}
                class="w-[300px] bg-[#D8D8D8] shadow flex flex-col gap-3 p-[20px] rounded-t-[20px] rounded-br-[20px]"
              >
                <div className="flex justify-between">
                  <h2 class="cinzel font-bold text-[20px] text-[#171717]">
                    {student.name}
                  </h2>

                  <IconButton
                    variant="outlined"
                    size="sm"
                    onClick={(e) => handleDelete(student._id)}
                  >
                    <i className="fas fa-trash" />
                  </IconButton>
                </div>

                <p class="poppins text-[#555] text-sm mt-2">
                  Email: {student.email}
                </p>
                <p class="poppins text-[#555] text-sm mt-2">
                  Number: {student.phoneNumber}
                </p>
                <Link
                  to={`/dashboard/all-students/student-form/${student._id}`}
                >
                  <div className="mt-[10px] m-auto">
                    <Button value="About Student" />
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </>
  );
};

export default AllStudents;
