import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { edudata } from "../constant/data";

import childrenOne from "../assets/children-one.png";
import childrenTwo from "../assets/children-two.png";

const Education = () => {
  return (
    <>
      <Header />
      <Banner
        heading="Education for Children"
        title="Adebowale Abo Aba's children deserve the opportunity to learn, grow, and build brighter futures. Yet, limited resources and access to quality education present a challenge. With your support, we aim to change that by providing affordable, high-quality education that every child in our community can access."
      />
      <section className=" py-14">
        <div className="container">
          <div className="flex gap-[21px]">
            <img src={childrenOne} alt="" className="w-fll" />
            <img src={childrenTwo} alt="" className="w-ful" />
          </div>
          <div>
            <p className="text-[25px]/';.">Our Key Initiatives</p>
            {edudata.map((data, index) => (
              <ul key={index} className="!list-inside list-disc">
                <li className="text-[25px]">{data}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
