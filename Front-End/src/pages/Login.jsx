import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../components/utils";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      const response = await fetch("http://localhost:8008/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response from serverr:", result);
      const { success, message, error, token, user } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user.id);
        localStorage.setItem("name", user.name);
        localStorage.setItem("CNIC", user.CNIC);
        setTimeout(() => {
          navigate("/dashboard/home");
          // Window.Reload()
          window.location.reload();
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

      <div className=" w-[90%] md:w-[85%] m-auto">
        <h1 className="text-center cinzel text-4xl font-bold pt-[80px] pb-[30px]">
          Great to See You Again! Please Sign In
        </h1>

        <form
          onSubmit={handleSubmit}
          action=""
          className="relative md:w-[669px] z-10 h-auto bg-[#F6F6F6] rounded-[25px] flex flex-col pt-[60px] pb-[70px] pr-[20px] pl-[20px] m-auto shadow-[0_0_20px_10px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Email"
              name="email"
              required
              onChange={handleChange}
              className=" border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />

            <input
              type="password"
              onChange={handleChange}
              name="password"
              id="password"
              placeholder="Password"
              required
              className=" border border-[#B7B7B7] rounded-[7px] pr-[15px] pl-[18px] pt-[10px] pb-[10px] poppins"
            />
            <br />
          </div>
          <Button value={"LogIn"} />
          <p className="text-center text-[#383838] mt-[20px] poppins font-light">
            Don't have an account ?{" "}
            <Link to="/signup" className="underline text-[#246545] font-bold">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

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
