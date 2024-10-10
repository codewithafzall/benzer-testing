import React from "react";
import Slider from "../Components/Slider/Slider";

const Moonshots = () => {
  return (
    <>
      <div className="mt-20 text-white w-[85%] sm:w-10/12 pb-12 mx-auto leading-snug border-b-2 border-white">
        <h1 className="text-[7vw] sm:text-[5vw] xl:text-[3vw] exp-reg">TURNING</h1>
        <h1 className="text-[10vw] sm:text-[7vw] xl:text-[5vw] exp-bold">MOONSHOTS</h1>
        <h1 className="text-[7vw] sm:text-[5vw] xl:text-[3vw] exp-reg">INTO</h1>
        <h1 className="text-[10vw] sm:text-[7vw] xl:text-[5vw] exp-bold">BENCHMARKS</h1>
      </div>
      <p className="text-white my-12 exp-light text-lg w-[85%] mx-auto sm:hidden">
        A Founder with a dream, a legacy business looking to define its next
        stage of growth & everything in between - that is HOWL’s range. Vast,
        paired with the ability to dig in, our success is measured by the
        challenges we address and the impact we create.
      </p>
      <p className="text-white my-12 exp-light text-lg sm:w-10/12 mx-auto hidden sm:block">
        A Founder with a dream, a legacy business looking to define its next<br/>
        stage of growth & everything in between - that is HOWL’s range.<br/><br/> Vast,
        paired with the ability to dig in, our success is measured by the<br/>
        challenges we address and the impact we create.
      </p>
      <Slider />
      <div className="w-[80%] sm:w-10/12 mx-auto mb-10">
        <div className="text-[12vw] exp-bold text-white py-10 leading-snug border-b-2 border-white sm:hidden">
          <h1>WE</h1>
          <h1>CLOSED</h1>
          <h1>OUR</h1>
          <h1>FIRST</h1>
          <h1>RETAINER</h1>
          <h1>WITHOUT</h1>
          <h1>A LOGO</h1>
        </div>
        <div className="text-[12vw] sm:text-[7vw] md:text-[5vw] uppercase exp-bold text-white py-10 leading-snug border-b-2 border-white hidden sm:block">
          <h1>we closed our<br/> first retainer <br/>without a logo</h1>
        </div>
        <p className="text-white my-12 exp-light text-lg">
          Turns out clear strategy and objectives prioritise everything.
          <br /> A learning we apply to everything we’ve gone on to do
        </p>
        <button className="inline-flex items-center text-lg justify-center py-3 px-8 exp-reg text-white border-2 border-white rounded-tl-xl rounded-br-xl">
          About Howl
        </button>
        <h1 className="text-[16vw] sm:text-[10vw] md:text-[8vw] exp-bold text-white mt-20">HELLO</h1>
      </div>
    </>
  );
};

export default Moonshots;
