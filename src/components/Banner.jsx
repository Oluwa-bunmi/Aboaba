import React from 'react'

const Banner = ({heading,title}) => {
  return (
    <section className='bg-black text-white text-center'>
      <div className="container pb-8 pt-28 ">
        <h1 className="text-[36px] font-extrabold text-primary">{heading}</h1>
        <p className='lg:w-[651px] mx-auto text-[22px]'>{title}</p>
      </div>
    </section>
  );
}

export default Banner