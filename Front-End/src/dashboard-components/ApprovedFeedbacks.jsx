import React, { useState } from "react";
import { useCoursesContext } from "../context/courseContext";
import { IconButton } from "@material-tailwind/react";
import Button from "../components/Button";
import axios from "axios";

const ApprovedFeedbacks = () => {
  const { isLoading, allTestimonialData } = useCoursesContext();
  // console.log("all testimonials", allTestimonialData);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8008/deleteTestimonial/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleApprove = async (id) => {
    try {
      const response = await axios.put(
        "http://localhost:8008/approve-testimonial/" + id
      );
    } catch (error) {
      console.error("Error approving testimonial:", error);
    }
  };

  return (
    <main>
      <h1 className="text-[20px] cinzel font-bold mb-[20px]">
        All Recent Feedbacks Which is approved by an admin
      </h1>

      <div className="flex flex-wrap gap-6">
        {isLoading
          ? "...LOADING"
          : allTestimonialData
              .filter((feedback) => feedback.approve === true)
              .map((feedback) => (
                <div
                  key={feedback._id}
                  class="w-[300px] bg-[#D8D8D8] shadow flex flex-col gap-3 p-[20px] rounded-t-[20px] rounded-br-[20px] justify-between"
                >
                  <div>
                    <div className="flex justify-between">
                      <h2 class="cinzel font-bold text-[20px] text-[#171717]">
                        {feedback.userName}
                      </h2>

                      <IconButton
                        variant="outlined"
                        size="sm"
                        onClick={(e) => handleDelete(feedback._id)}
                      >
                        <i className="fas fa-trash" />
                      </IconButton>
                    </div>

                    <p class="poppins text-[#555] text-sm mt-2">
                      <b>Email:</b> {feedback.email}
                    </p>
                    <p class="poppins text-[#555] text-sm mt-2">
                      <b>Message:</b> {feedback.message}
                    </p>
                  </div>
                </div>
              ))}
      </div>
    </main>
  );
};

export default ApprovedFeedbacks;
