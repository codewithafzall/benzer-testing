import React from "react";

const Hero = () => {
  return (
        <div className="banner flex flex-col items-center justify-center rounded-tl-xl rounded-br-xl">
        <div className="text-[11vw] mt-10 relative tracking-tight leading-tight exp-bold text-center uppercase text-white">
            <h1>Three</h1>
            <h1>Billion</h1>
            <h1>Customers</h1>
        </div>
        <div className="capitalize relative text-center exp-reg text-[#AEAAB2] text-[4vw] mt-7">
            <p>Making a niche</p>
            <p>Out of driving impact</p>
        </div>
        <button className="bg-white relative text-lg exp-reg bg-opacity-10 backdrop-filter flex mx-auto backdrop-blur-sm text-white px-14 py-5 mt-12 rounded-tl-xl rounded-br-xl">
            Play Reel
        </button>
        </div>
  );
};

export default Hero;
