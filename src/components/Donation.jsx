import React from 'react'

import { Link } from 'react-router-dom';

const Donation = ({description, title, imgOne, imgTwo, path}) => {
  return (
    <section
      className="bg-[#E4E0FE69]">
      <div className="container grid lg:grid-cols-2 gap-5 py-14 items-center">
        <div className="flex flex-col sm:flex-row gap-7">
          <img src={imgOne} alt="" className="w-full" />
          <img src={imgTwo} alt="" className="w-full" />
        </div>
        <div>
          <h1 className="text-secondary font-bold text-[32px] leading-[38px]">
            {title}
          </h1>
          <p className="mt-4 mb-8 text-2xl leading-7">
           {description}
          </p>
          <Link
            to={path}
            className="bg-primary text-dark py-3 rounded-[28px] font-bold px-6 text-[22px]"
          >
            Support now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Donation