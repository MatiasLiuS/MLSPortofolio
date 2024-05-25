import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section id='home' className="w-full py-40 pb-20 flex flex-col lg:flex-row items-center border-b-[1px] font-titleFont border-b-black">
        <LeftBanner />
        <RightBanner />
    </section>
  );
}

export default Banner;
