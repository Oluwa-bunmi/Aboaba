import React from "react";
import heroImg from "../assets/hero-img.png";
const Hero = () => {
  return (
    <section className="bg-black">
      <div className="container grid lg:grid-cols-2 pb-8 pt-28 items-center">
        <p className="text-[27px] leading-[32px] text-white">
          <span className="text-primary">Join us</span> in uplifting lives in Abo-Aba by supporting
          critical projects in education, healthcare, and community
          well-being. Together, we can build a brighter tomorrow.
        </p>
        <img src={heroImg} alt="hero-img" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
