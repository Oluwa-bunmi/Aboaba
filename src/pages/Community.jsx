import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import communityOne from "../assets/community-one.png";
import communityTwo from "../assets/community-two.png";
const Community = () => {
  return (
    <>
      <Header />
      <Banner
        heading="Community Well-being"
        title="At the heart of Adebowale Abo Aba’s progress is the well-being of its people. Our Community Well-being initiative aims to uplift and empower every resident by focusing on essential needs like clean water, food security, sanitation, and general health resources. When these foundational needs are met, the entire community can thrive, fostering a cycle of health, stability, and productivity."
      />
      <section className="py-14 bg-[#E4E0FE69]">
        <div className="container flex flex-col gap-14">
          <div className="flex flex-col sm:flex-row gap-[55px]">
            <img src={communityOne} alt="" className="w-[306px]" />
            <img src={communityTwo} alt="" className="w-[306px]" />
          </div>
          <p className="text-[25px] leading-[30px]">
            With your support, we can build a stronger, healthier community
            where everyone has the resources they need to thrive. Contribute to
            the well-being of Adebowale Abo Aba and join us in creating a
            lasting impact.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Community;
