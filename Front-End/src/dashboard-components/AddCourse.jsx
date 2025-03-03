import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    category: "",
    img: "",
    mainImg: "",
    title: "",
    detail: "",
    whatYouLearn_Title: "",
    whatYouLearn_Detail: "",
    importanceTitle: "",
    ImportanceHeading: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8008/addCourses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Optionally reset the form after successful submission
      setFormData({
        category: "",
        img: "",
        mainImg: "",
        title: "",
        detail: "",
        whatYouLearn_Title: "",
        whatYouLearn_Detail: "",
        importanceTitle: "",
        ImportanceHeading: "",
      });

      alert("Course added successfully!");
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <main>
      <h1 className="text-[20px] cinzel font-bold mb-[20px]">Add Course</h1>

      <form
        onSubmit={handleSubmit}
        className="relative w-[100%]  z-10 h-auto bg-[#F6F6F6] rounded-[25px] flex flex-col pt-[60px] pb-[70px] pr-[20px] pl-[20px] m-auto shadow-[0_0_20px_10px_rgba(0,0,0,0.25)]"
      >
        {/* Course Category */}

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full sm:w-[100%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
        >
          <option value="" disabled>
            Select Course Category *
          </option>
          <option value="courses-for-childrens">Course For Childrens</option>
          <option value="courses-for-adults">Course For Adults</option>
          <option value="courses-for-females">Course For Females</option>
        </select>

        <br />

        {/* Course Images */}
        <input
          type="text"
          name="img"
          placeholder="Image URL *"
          value={formData.img}
          onChange={handleChange}
          required
          className="w-[100%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
        />
        <br />
        <input
          type="text"
          name="mainImg"
          placeholder="Main Image URL *"
          value={formData.mainImg}
          onChange={handleChange}
          required
          className="w-[100%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
        />
        <br />

        {/* Course Title */}
        <input
          type="text"
          name="title"
          placeholder="Course Title *"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-[100%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
        />
        <br />

        {/* Course Detail */}
        <textarea
          name="detail"
          placeholder="Course Detail *"
          value={formData.detail}
          onChange={handleChange}
          required
          rows="5"
          className="w-[100%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
        ></textarea>
        <br />

        {/* What You Will Learn */}
        <input
          type="text"
          name="whatYouLearn_Title"
          placeholder="What You Learn - Title *"
          value={formData.whatYouLearn_Title}
          onChange={handleChange}
          required
          className="w-[100%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
        />
        <br />
        <textarea
          name="whatYouLearn_Detail"
          placeholder="What You Learn - Details *"
          value={formData.whatYouLearn_Detail}
          onChange={handleChange}
          required
          rows="5"
          className="w-[100%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
        ></textarea>
        <br />

        {/* Course Importance */}
        <input
          type="text"
          name="importanceTitle"
          placeholder="Importance Title *"
          value={formData.importanceTitle}
          onChange={handleChange}
          required
          className="w-[100%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
        />
        <br />
        <textarea
          name="ImportanceHeading"
          placeholder="Importance Heading *"
          value={formData.ImportanceHeading}
          onChange={handleChange}
          required
          rows="5"
          className="w-[100%] border border-[#B7B7B7] rounded-[7px] px-[18px] py-[10px] poppins"
        ></textarea>
        <br />

        {/* Submit Button */}
        <Button value="Submit" />
      </form>
    </main>
  );
};

export default AddCourse;
