import React, { useEffect, useState } from "react";
import BenefitsHeadings from "./BenefitsHeadings";
import service_data from "../data/services";

const RemarkableBenefits = () => {
  //   const { ref, inView } = useInView({ threshold: 0.2 });
  const [selectedServiceId, setSelectedServiceId] = useState(null); // No item selected by default
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 970); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Automatically select the first item on desktop if no item is selected
    if (
      !isMobile &&
      selectedServiceId === null &&
      service_data.length > 0 &&
      isMobile === window.innerWidth < 970
    ) {
      setSelectedServiceId(service_data[0].id);
    }
  }, [isMobile, selectedServiceId]);

  const handleServiceClick = (id) => {
    setSelectedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section>
      <h1 className="w-[90%] md:[85%] text-center m-auto cinzel text-4xl font-bold pt-[100px] pb-[50px]">
        The Remarkable Benefits of Learning the Quran Online With Us
      </h1>

      <div className="flex w-[85%] m-auto justify-between gap-[10px] md:flex-row flex-col md:text-left text-center max-w-[1450px]">
        <p className="poppins text-[17px] ">
          One of the greatest advantages of learning the Quran online through
          Islami Zone is the unparalleled access to exceptional teachers from
          countries such as the USA, Pakistan, Egypt, Jordan, and Saudi Arabia.
          Unlike being restricted to local instructors, students can benefit
          from a diverse pool of knowledgeable and experienced teachers. Our
          instructors are fluent in English, Arabic, and Urdu, ensuring that
          learners at all levels can comfortably begin their journey with
          Tajweed and Arabic, even if they lack prior proficiency in the
          language. At Islami Zone, we provide comprehensive lessons in Quranic
          recitation, Basic Tajweed, Arabic, Qirat, Ijazah, and Memorization for
          students of all ages.
        </p>
        <p className="poppins text-[17px]">
          While learning the Quran during childhood offers many advantages, it's
          important to remember that it’s never too late to start embracing the
          divine teachings of the holy book. Whether you are a child, teenager,
          or adult, you can begin your Quranic studies at any point in life.
          Online learning is particularly beneficial for children, as it aligns
          with their natural affinity for technology. With the flexibility of
          online classes at Islami Zone, incorporating Quranic education into a
          busy schedule becomes effortless, making it easier than ever to
          prioritize spiritual growth and religious learning.
        </p>
      </div>

      <div>
        <div className="services-section">
          <div className="service-list max-w-[1450px]">
            <div className="service-main">
              {service_data.map((item) => (
                <div key={item.id}>
                  <BenefitsHeadings
                    img={item.number_img}
                    heading={item.heding}
                    isSelected={item.id === selectedServiceId}
                    onClick={() => handleServiceClick(item.id)}
                    isMobile={isMobile}
                    id={item.id}
                  />

                  {/* For mobile view, render the detail directly below the heading */}
                  {isMobile && selectedServiceId === item.id && (
                    <div className="flex justify-center">
                      {/* <h1>{item.heding}</h1> */}
                      {/* <p>{item.detail_about_project}</p> */}
                      <img src={item.poject_img} alt={item.heding} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* For desktop, render the detail on the right */}
            {!isMobile && selectedServiceId && (
              <div className="service-detail">
                {/* <h1>
                  {
                    service_data.find((item) => item.id === selectedServiceId)
                      ?.heding
                  }
                </h1> */}
                {/* <p>
                  {
                    service_data.find((item) => item.id === selectedServiceId)
                      ?.detail_about_project
                  }
                </p> */}
                <img
                  src={
                    service_data.find((item) => item.id === selectedServiceId)
                      ?.poject_img
                  }
                  alt=""
                />
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default RemarkableBenefits;
