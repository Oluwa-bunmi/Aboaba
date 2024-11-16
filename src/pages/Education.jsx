import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { edudata } from "../constant/data";

import childrenOne from "../assets/children-one.png";
import childrenTwo from "../assets/children-two.png";
import Footer from "../components/Footer";

const Education = () => {
  return (
    <>
      <Header />
      <Banner
        heading="Education for Children"
        title="Adebowale Abo Aba's children deserve the opportunity to learn, grow, and build brighter futures. Yet, limited resources and access to quality education present a challenge. With your support, we aim to change that by providing affordable, high-quality education that every child in our community can access."
      />
      <section className="py-14">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-[55px]">
            <img src={childrenOne} alt="" className="w-[306px]" />
            <img src={childrenTwo} alt="" className="w-[306px]" />
          </div>
          <div>
            <p className="text-[25px] mt-14 pl-6">Our Key Initiatives</p>
            {edudata.map((data, index) => (
              <ul key={index} className="!list-inside list-disc pl-6">
                <li className="text-[25px] pl-2">{data}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Education;
