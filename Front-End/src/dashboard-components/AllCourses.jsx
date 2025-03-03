import React from "react";
import { useCoursesContext } from "../context/courseContext";
import { IconButton } from "@material-tailwind/react";
import axios from "axios";

const AllCourses = () => {
  const { isLoading, allCourses } = useCoursesContext();
  //   console.log(allCourses);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8008/coursedelete/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <h1 className="text-[20px] cinzel font-bold mb-[20px]">All Courses</h1>

      <div className="flex flex-wrap gap-6">
        {isLoading
          ? "...LOADING"
          : allCourses.map((course) => (
              <div
                key={course._id}
                class="w-[300px] bg-[#D8D8D8] shadow flex flex-col gap-3 p-[20px] rounded-t-[20px] rounded-br-[20px] justify-between"
              >
                <div>
                  <div className="flex justify-between">
                    <h2 class="cinzel font-bold text-[20px] text-[#171717]">
                      {course.title}
                    </h2>

                    <IconButton
                      variant="outlined"
                      size="sm"
                      onClick={(e) => handleDelete(course._id)}
                    >
                      <i className="fas fa-trash" />
                    </IconButton>
                  </div>

                  <p class="poppins text-[#555] text-sm mt-2">
                    <b>Category:</b> {course.category}
                  </p>
                  <p class="poppins text-[#555] text-sm mt-2">
                    <b>Course Detail:</b> {course.detail.slice(0, 120)}...
                  </p>
                </div>
              </div>
            ))}
      </div>
    </main>
  );
};

export default AllCourses;
