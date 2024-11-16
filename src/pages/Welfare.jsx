import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import welfareOne from "../assets/welfare-one.png";
import welfareTwo from "../assets/welfare-two.png";
const Welfare = () => {
  return (
    <>
      <Header />
      <Banner
        heading="Child Support and Welfare"
        title="In Adebowale Abo Aba, many children face daily challenges that limit their access to essential resources, proper nutrition, education, and healthcare. Our Child Support and Welfare program is designed to bridge these gaps and create lasting change by providing a strong foundation for the community’s youngest members."
      />
      <section className="py-14 bg-[#E4E0FE69]">
        <div className="container flex flex-col gap-14">
          <div className="flex flex-col sm:flex-row gap-[55px]">
            <img src={welfareOne} alt="" className="w-[306px]" />
            <img src={welfareTwo} alt="" className="w-[306px]" />
          </div>
          <p className="text-[25px] leading-[30px]">
            With your help, we can build a support system for these children
            that goes beyond basic needs, equipping them with tools, resources,
            and encouragement to pursue their dreams and contribute positively
            to their community. Join us in nurturing the next generation by
            supporting our Child Support and Welfare program today.
          </p>
        </div>
      </section>
    </>
  );
}

export default Welfare