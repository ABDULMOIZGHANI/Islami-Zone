import React from "react";
import { useCoursesContext } from "../context/courseContext";
import { Button, IconButton } from "@material-tailwind/react";
import axios from "axios";

const FreeTrial = () => {
  const { isLoading, freeTrialsData } = useCoursesContext();
  console.log("FREE TRIAL", freeTrialsData);

  const handleDelete = (id) => {
    // console.log("ID:", id);

    axios
      .delete("http://localhost:8008/free-trial/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="text-[20px] cinzel font-bold mb-[20px]">
        Free Trial Students Data
      </h1>
      <div className="flex flex-wrap gap-6">
        {isLoading
          ? "...LOADING"
          : freeTrialsData.map((freeTrial) => (
              <div
                key={freeTrial._id}
                class="w-[300px] bg-[#D8D8D8] shadow flex flex-col gap-3 p-[20px] rounded-t-[20px] rounded-br-[20px]"
              >
                <div className="flex justify-between">
                  <h2 class="cinzel font-bold text-[20px] text-[#171717]">
                    {freeTrial.userName}
                  </h2>

                  <IconButton
                    variant="outlined"
                    size="sm"
                    onClick={(e) => handleDelete(freeTrial._id)}
                  >
                    <i className="fas fa-trash" />
                  </IconButton>
                </div>

                <p class="poppins text-[#555] text-sm mt-2">
                  Email: {freeTrial.email}
                </p>
                <p class="poppins text-[#555] text-sm mt-2">
                  Number: {freeTrial.number}
                </p>
              </div>
            ))}
      </div>
    </>
  );
};

export default FreeTrial;
