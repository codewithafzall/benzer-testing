import React from "react";
import SolutionCard from "./SolutionCard";

const Solution = () => {
  return (
    <div className="bg-white p-5">
      <div className="border-b-2 border-[#2B2631] py-7">
        <h1 className="text-[#2B2631] uppercase text-[11vw] ml-2 exp-bold">
          Solutions
        </h1>
        <h1 className="text-[#2B2631] uppercase text-[8vw] ml-2 exp-reg">
          over scope
        </h1>
      </div>
      <p className="text-[#443C4E] exp-reg ml-2 text-lg mt-10">
        The North Star that has shaped our approach to Launch, sustain & pivot
        brands across industries
      </p>
      <div className="my-14">
        <SolutionCard/>
      </div>
    </div>
  );
};

export default Solution;
