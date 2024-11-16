import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Donation from "../components/Donation";
import childrenOne from "../assets/children-one.png";
import childrenTwo from "../assets/children-two.png";
import medicalOne from "../assets/medical-one.png";
import medicalTwo from "../assets/medical-two.png";
import welfareOne from "../assets/welfare-one.png";
import welfareTwo from "../assets/welfare-two.png";
import communityOne from "../assets/community-one.png";
import communityTwo from "../assets/community-two.png";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Donation
        title="Education for Children"
        description=" Help provide quality education, school supplies, and scholarships
            for children in the community."
        imgOne={childrenOne}
        imgTwo={childrenTwo}
        path="/education-donation"
      />
      <Donation
        title="Healthcare Access"
        description="Contribute to building local healthcare facilities,providing medical supplies, and
supporting emergency services."
        imgOne={medicalOne}
        imgTwo={medicalTwo}
        path="/healthcare-donation"
      />
      <Donation
        title="Child Support and Welfare"
        description="Support programs that provide food, shelter,
and healthcare to vulnerable children in the
community."
        path="/children-donation"
        imgOne={welfareOne}
        imgTwo={welfareTwo}
      />
      <Donation
        title="Community Well-being"
        description="Help fund water, sanitation, and food security initiatives to improve overall community health
and living conditions."
        path="/community-donation"
        imgOne={communityOne}
        imgTwo={communityTwo}
      />
      <Footer />
    </>
  );
};

export default Home;
