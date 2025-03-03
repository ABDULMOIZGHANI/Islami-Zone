import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { handleError, handleSuccess } from "../components/utils";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCoursesContext } from "../context/courseContext";

const TeacherForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, allTeachersData } = useCoursesContext();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    email: "",
    country: "",
    phoneNumber: "",
    whatsappNumber: "",
    CNIC: "",
    experience: "",
    password: "",
    confirmPassword: "",
    language: "",
    hearAboutUS: "",
    teacherDescription: "",
  });

  const currTeacher = allTeachersData.find((teacher) => teacher._id === id);

  useEffect(() => {
    if (currTeacher) {
      setFormData({
        name: currTeacher.name || "",
        gender: currTeacher.gender || "",
        age: currTeacher.age || "",
        email: currTeacher.email || "",
        country: currTeacher.country || "",
        phoneNumber: currTeacher.phoneNumber || "",
        whatsappNumber: currTeacher.whatsappNumber || "",
        CNIC: currTeacher.CNIC || "",
        experience: currTeacher.experience || "",
        language: currTeacher.language || [],
        hearAboutUS: currTeacher.hearAboutUS || "",
        teacherDescription: currTeacher.teacherDescription || "",
      });
    }
  }, [currTeacher]);

  if (isLoading || !currTeacher) {
    return <p>Loading...</p>; // or any loading spinner component
  }

  console.log(currTeacher);
  const date = new Date(currTeacher.createdAt);
  console.log("DATE", date);

  // Format the date and time
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Use 12-hour format (AM/PM)
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log(name, value, type, checked);

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        language: checked
          ? [...prev.language, value]
          : prev.language.filter((lang) => lang !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8008/teacher/update/${id}`,
        formData
      );

      if (response.data.success) {
        handleSuccess("Teacher's data updated successfully!");
        setTimeout(() => navigate("/dashboard/all-teachers"), 1000);
      } else {
        handleError(response.data.message);
      }
    } catch (error) {
      console.error("Error updating teacher:", error);
      handleError("Failed to update teacher.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="relative w-[100%] md:w-[669px] z-10 h-auto bg-[#F6F6F6] rounded-[25px] flex flex-col pt-[60px] pb-[70px] pr-[20px] pl-[20px] m-auto shadow-[0_0_20px_10px_rgba(0,0,0,0.25)]"
      >
        <h1 className="cinzel text-[20px] font-bold">Teacher Details</h1>
        <div className="flex flex-col">
          <input
            type="text"
            value={formData.name}
            name="name"
            placeholder="Enter Your Full Name *"
            required
            onChange={handleChange}
            className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
          />
          <br />
          <div className="w-[100%] flex gap-[20px]">
            <input
              type="text"
              name="gender"
              value={formData.gender}
              placeholder="Enter Your Gender *"
              required
              onChange={handleChange}
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              placeholder="Enter Your Age *"
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-[100%] flex gap-[20px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email *"
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Country *"
              name="country"
              value={formData.country}
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-[100%] flex gap-[20px]">
            <input
              type="number"
              placeholder="Phone Number *"
              name="phoneNumber"
              value={formData.phoneNumber}
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Whatsapp Number *"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
          </div>
          <br />

          <div className="w-[100%] flex gap-[20px]">
            <input
              type="number"
              placeholder="Enter Your CNIC Number *"
              name="CNIC"
              value={formData.CNIC}
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Years of Experience *"
              name="experience"
              value={formData.experience}
              required
              className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              onChange={handleChange}
            />
          </div>
          <br />

          {/* LANGUAGES */}
          <div>
            <h3 className="cinzel text-[20px] font-semibold text-[#171717] mb-[10px]">
              Which Language(s) Do You Speak and Understand?
            </h3>
            <div className="flex flex-wrap gap-4 mb-[20px] poppins text-[#171717] ">
              {["English", "Urdu"].map((language) => (
                <label key={language} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="language"
                    value={language}
                    checked={formData.language.includes(language)}
                    onChange={handleChange}
                    className="w-5 h-5 accent-blue-500"
                  />
                  <span className="text-lg font-medium text-[#171717]">
                    {language}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* "Where did you hear about us?" Dropdown */}
          <div className="w-full max-w-md mb-6">
            <label
              htmlFor="source"
              className="block text-lg font-medium text-[#171717] mb-2"
            >
              Where did you hear about us?
            </label>
            <select
              id="source"
              onChange={handleChange}
              name="hearAboutUS"
              value={formData.hearAboutUS}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Social Media">Facebook</option>
              <option value="Social Media">Youtube</option>
              <option value="Social Media">Instagram</option>
              <option value="Friend or Family">Friend or Family</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Google Search">Google Search</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <textarea
              placeholder="Describe yourself as a Teacher"
              required
              name="teacherDescription"
              value={formData.teacherDescription}
              rows={7}
              onChange={handleChange}
              className="w-[100%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />
          </div>
        </div>
        <br />
        <Button value={"Submit"} />
      </form>
    </div>
  );
};

export default TeacherForm;
