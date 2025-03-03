import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { handleError, handleSuccess } from "../components/utils";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
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

  // console.log(formData);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Final Form Data:", formData); // Log data before sending
    sendToBackend(formData);
  };

  const sendToBackend = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:8008/auth/signup/teacher",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        handleError(error);
      } else {
        handleError(message);
      }

      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <section className="mb-[40px] relative">
      <LeftStars src="/courses/Lstars.png" alt="" />
      <RightStars src="/courses/Stars.png" alt="" />

      <div className="w-[90%]  md:w-[85%] m-auto max-w-[1450px]">
        <h1 className="text-center cinzel text-4xl font-bold pt-[90px] md:pt-[80px] pb-[30px]">
          Register Now to Get Started
        </h1>
        <p className="text-[18px] text-[#171717] poppins text-center mb-[30px]">
          Enroll now by filling out the registration form below and submitting
          it. Our team will contact you shortly on the phone number or email
          address you provide to schedule your assessment and class timings.
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative w-[100%] md:w-[669px] z-10 h-auto bg-[#F6F6F6] rounded-[25px] flex flex-col pt-[40px] pb-[40px] pr-[20px] pl-[20px] m-auto shadow-[0_0_20px_10px_rgba(0,0,0,0.25)]"
        >
          <h1 className="cinzel text-[20px] font-bold">Teacher Details</h1>
          <div className="flex flex-col">
            <input
              type="text"
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
                placeholder="Enter Your Gender *"
                required
                onChange={handleChange}
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
              />
              <input
                type="number"
                name="age"
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
                placeholder="Email *"
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Country *"
                name="country"
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
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Whatsapp Number *"
                name="whatsappNumber"
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
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Years of Experience *"
                name="experience"
                autoComplete="new-password"
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
                onChange={handleChange}
              />
            </div>
            <br />

            <div className="w-[100%] flex gap-[20px]">
              <input
                type="password"
                placeholder="Password *"
                name="password"
                autoComplete="new-password"
                required
                className="w-[50%] border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm Password *"
                name="confirmPassword"
                autoComplete="new-password"
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
    </section>
  );
};

export default Registration;

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
