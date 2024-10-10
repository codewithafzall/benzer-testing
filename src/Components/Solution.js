import React from "react";
import SolutionCard from "./SolutionCard";

const Solution = () => {
  return (
    <div className="bg-white">
      <div className="bg-white py-5 w-[85%] sm:w-10/12 mx-auto">
        <div className="border-b-2 border-[#2B2631] py-7">
          <h1 className="text-[#2B2631] uppercase text-[11vw] sm:text-[9vw] xl:text-[7vw] ml-2 exp-bold">
            Solutions
          </h1>
          <h1 className="text-[#2B2631] uppercase text-[8vw] sm:text-[6vw] xl:text-[4vw] ml-2 exp-reg">
            over scope
          </h1>
        </div>
        <p className="text-[#443C4E] exp-reg ml-2 text-lg mt-10 capitalize xl:text-xl">
          The North Star that has shaped our approach <span className="sm:hidden">to Launch, sustain & pivot brands across industries</span>
        </p>
        <p className="text-[#443C4E] exp-reg ml-2 text-lg xl:text-xl capitalize hidden sm:block">
          to Launch, sustain & pivot brands across industries
        </p>
        <div className="my-14 sm:hidden">
          <SolutionCard />
        </div>
      </div>
    </div>
  );
};

export default Solution;
