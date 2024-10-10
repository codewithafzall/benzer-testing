import React from "react";

const Hero = () => {
  return (
        <div className="banner flex flex-col items-center justify-center sm:py-[10%] md:py-[5%] rounded-tl-xl rounded-br-xl">
        <div className="text-[11vw] sm:text-[7vw] xl:text-[6vw] mt-10 sm:mt-[7rem] relative tracking-tight leading-tight exp-bold text-center uppercase text-white">
            <h1>Three<span className="hidden sm:inline ml-6">Billion</span></h1>
            <h1 className="block sm:hidden">Billion</h1>
            <h1>Customers</h1>
        </div>
        <div className="capitalize relative text-center exp-reg text-[#AEAAB2] sm:text-white text-[4vw] sm:text-[2vw] lg:text-[1.5vw] mt-7 sm:mt-4">
            <p>Making a niche <span className="hidden sm:inline">Out of driving impact</span></p>
            <p className="block sm:hidden">Out of driving impact</p>
        </div>
        <button className="bg-white relative text-sm exp-reg bg-opacity-15 backdrop-filter flex mx-auto backdrop-blur-sm text-white px-10 py-3 mt-12 sm:mt-24 xl:mt-32 rounded-tl-xl rounded-br-xl">
            Play Reel
        </button>
        </div>
  );
};

export default Hero;
