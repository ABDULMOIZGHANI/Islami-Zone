import React, { useState } from "react";
import styled from "styled-components";

const TermsConditions = () => {
  const [conditions, setConditions] = useState(false);

  const handleConditions = () => {
    setConditions((prev) => !conditions);
  };

  // console.log(conditions);

  return (
    <div>
      <h1 className="cinzel text-[20px] font-bold">Enrollment Form</h1>
      <p className="poppins text-[14px] text-[#171717] font-light mt-[5px]">
        Please complete the admissions form below to register, or give us a
        call. We will reach out to you using the contact details provided in the
        form to arrange an assessment and schedule your classes.
      </p>
      <p
        className="poppins text-[18px] text-[#246545] font-bold mb-[30px] cursor-pointer"
        onClick={handleConditions}
      >
        Please read Terms & Conditions for enrolled students
      </p>
      {conditions && (
        <Conditions className="max:w-[650px] h-[100vh] bg-[#fff]">
          <div
            onClick={handleConditions}
            className="absolute right-[10px] top-[10px] cursor-pointer"
          >
            ✖️
          </div>
          <h1 className="cinzel text-[24px] font-extrabold mb-[10px]">
            Terms & Conditions
          </h1>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>1. </strong>Tuition fees must be paid in advance and are
            non-refundable.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>2. </strong>
            All classes will be scheduled according to Pakistan Standard Time
            (PST), and time zone changes will not affect class timings.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>3. </strong>
            Make-up classes are only provided if a tutor misses a lesson, but
            not for student absences.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>4. </strong>
            Classes will not be conducted on Islamic holidays such as
            Eid-ul-Fitr, Eid-ul-Adha, 9-10 Muharram, and 27th Ramadan, but will
            be rescheduled accordingly.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>5. </strong>
            If tuition fees are not paid by the due date, Islami Zone reserves
            the right to discontinue classes and terminate enrollment without
            prior notice.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>6. </strong>
            Students are responsible for attending classes on time, and while
            reminder messages may be sent, attendance remains their
            responsibility.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>7. </strong>
            Islami Zone reserves the right to refuse service to anyone without
            explanation.
          </p>
          <p className="mb-[10px] poppins text-[16px] font-light">
            <strong>8. </strong> By clicking "Submit," you agree to receive
            WhatsApp notifications regarding your enrollment, including updates
            on application status and other relevant information, with the
            option to opt out anytime.
          </p>
        </Conditions>
      )}
    </div>
  );
};

export default TermsConditions;

const Conditions = styled.div`
  position: fixed;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust for exact center */
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  z-index: 1000; /* Ensure it appears above other content */
  max-height: 100vh; /* Limit height to 80% of the viewport */
  overflow-y: auto; /* Add scroll if content exceeds height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 520px) {
    width: 95%;
    height: auto;
  }
`;
