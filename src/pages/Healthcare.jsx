import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import medicalOne from "../assets/medical-one.png";
import medicalTwo from "../assets/medical-two.png";
import Footer from '../components/Footer';
const Healthcare = () => {
  return (
    <>
      <Header />
      <Banner
        heading="Healthcare Access"
        title="In Adebowale Abo Aba, many families face long journeys to access essential medical care, especially in emergencies. Let’s establish a nearby healthcare facility that offers both general and urgent care services, bringing vital health resources within reach of every resident. This includes child health programs, preventive care, and community health education to reduce preventable illnesses."
      />
      <section className="py-14 bg-[#E4E0FE69]">
        <div className="container flex flex-col gap-14">
          <div className="flex flex-col sm:flex-row gap-[55px]">
            <img src={medicalOne} alt="" className="w-[306px]" />
            <img src={medicalTwo} alt="" className="w-[306px]" />
          </div>
          <p className="text-[25px] leading-[30px]">
            Your support will help fund the clinic’s construction, essential
            medical supplies, and the hiring of qualified healthcare
            professionals dedicated to providing compassionate care. Together,
            we can build a healthier, safer future for all.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Healthcare