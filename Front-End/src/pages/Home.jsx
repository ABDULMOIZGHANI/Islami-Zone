import React from "react";
import MainSection from "../components/MainSection";
import SecondSection from "../components/SecondSection";
import SimpleSteps from "../components/SimpleSteps";
import OnlineClasses from "../components/OnlineClasses";
import RemarkableBenefits from "../components/RemarkableBenefits";
import KeyFeatures from "../components/KeyFeatures";
import Testimonials from "../components/Testimonials";
import FeedbackForm from "../components/FeedbackForm";

const Home = () => {
  return (
    <>
      <MainSection />
      <SecondSection />
      <SimpleSteps />
      <OnlineClasses />
      <RemarkableBenefits />
      <KeyFeatures />
      <Testimonials />
      <FeedbackForm />
    </>
  );
};

export default Home;
