import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useCoursesContext } from "../context/courseContext.jsx";

const Testimonials = () => {
  const { isLoading, allTestimonialData } = useCoursesContext();
  // console.log("TESTI", allTestimonialData);

  return (
    <Section>
      <h1 className="text-center cinzel text-4xl font-bold pt-[120px] pb-[20px]">
        What Students Say
      </h1>

      <QuranImg src="/KeyFeaturesSection/QURANPAK2.png" alt="" />

      <div className="w-[100%] max-w-[1450px] m-auto bg-[#ffffff] h-[60vh] md:h-[80vh] flex items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          autoHeight={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {allTestimonialData
            .filter((testimonial) => testimonial.approve === true)
            .map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard>
                  <div className="flex justify-center items-center">
                    <img
                      src="/KeyFeaturesSection/Testimonial.png"
                      alt="User Icon"
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </div>

                  <h2 className="text-[22px] cinzel font-bold text-[#171717] p-3">
                    {testimonial.userName}
                  </h2>
                  <h3 className="text-[15px] poppins font-semibold text-[#171717] pb-4">
                    {testimonial.country}
                  </h3>
                  <p className="text-[14px] poppins font-light text-[#171717]">
                    {testimonial.message}
                  </p>
                </TestimonialCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Testimonials;

const Section = styled.section`
  position: relative;
`;

const QuranImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0px;
  width: 189px;
`;

const TestimonialCard = styled.div`
  background-color: rgba(219, 219, 219, 0.3);
  backdrop-filter: blur(15px);
  width: 100%;
  max-width: 398px;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 0.25);
  min-height: 400px; /* Set a consistent height for all cards */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;*/
`;
