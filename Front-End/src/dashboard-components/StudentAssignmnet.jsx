import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { handleError, handleSuccess } from "../components/utils";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCoursesContext } from "../context/courseContext";

const StudentAssignment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, allStudentsData } = useCoursesContext();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    assignment: [],
    assignmentCompleted: false,
  });

  const existingStudent = allStudentsData.find((student) => student._id === id);

  useEffect(() => {
    if (existingStudent) {
      setFormData({
        assignment: existingStudent.assignment || [],
        assignmentCompleted: existingStudent.assignmentCompleted || false,
      });
    }
  }, [existingStudent]);

  if (isLoading || !existingStudent) {
    return <p>Loading...</p>;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAssignmentChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      assignment: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8008/students/update/${id}`,
        {
          assignment: formData.assignment,
          assignmentCompleted: formData.assignmentCompleted,
        }
      );

      if (response.data.success) {
        handleSuccess("Student assignment updated successfully!");
        setTimeout(() => navigate("/dashboard/assignment"), 1000);
      } else {
        handleError(response.data.message);
      }
    } catch (error) {
      console.error("Error updating student assignment:", error);
      handleError("Failed to update student assignment.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        id="studentForm"
        className="relative w-[100%] md:w-[669px] z-10 h-auto bg-[#F6F6F6] rounded-[25px] flex flex-col pt-[60px] pb-[70px] pr-[20px] pl-[20px] m-auto shadow-[0_0_20px_10px_rgba(0,0,0,0.25)]"
      >
        <h1 className="cinzel text-[20px] font-bold">
          Update Student Assignment
        </h1>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="assignment">
            Assignment Subjects (comma separated)
          </label>
          <input
            type="text"
            name="assignment"
            value={formData.assignment.join(", ")}
            placeholder="Enter Assignment Subjects *"
            required
            onChange={handleAssignmentChange}
            className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
          />
          <br />

          <label className="font-bold" htmlFor="assignmentCompleted">
            Assignment Completed
          </label>
          <input
            type="checkbox"
            name="assignmentCompleted"
            checked={formData.assignmentCompleted}
            onChange={handleChange}
            className="w-5 h-5 accent-blue-500"
          />
          <br />
        </div>
        <Button value={"Update Assignment"} />
      </form>
    </div>
  );
};

export default StudentAssignment;
