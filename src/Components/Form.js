import React, { useState } from "react";

export const Form = () => {
  // State to manage form type
  const [isJoinUs, setIsJoinUs] = useState(false);

  // Function to handle button click
  const handleFormTypeChange = (type) => {
    setIsJoinUs(type === "join");
  };

  return (
    <div className="w-[85%] sm:w-full mx-auto">
      <form className="bg-white px-4 pt-6 pb-20 sm:pb-10 rounded-tl-xl rounded-br-xl text-[#443C4E]">
        <div className="flex justify-between items-center uppercase sm:mx-5">
          {/* Buttons to toggle form type */}
          <button
            type="button"
            onClick={() => handleFormTypeChange("work")}
            className={`exp-bold text-[4vw] sm:text-[3vw] uppercase ${
              !isJoinUs ? "border-b-2 border-black pb-1" : "text-[#AEAAB2]"
            }`}
          >
            work with us
          </button>
          <button
            type="button"
            onClick={() => handleFormTypeChange("join")}
            className={`exp-bold text-[4vw] sm:text-[3vw] uppercase ${
              isJoinUs ? "border-b-2 border-black pb-1" : "text-[#AEAAB2]"
            }`}
          >
            join us
          </button>
        </div>

        {/* Dynamic main heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:mt-20">
          <h1 className="text-[8vw] lg:ml-5 sm:text-[5vw] sm:w-1/2 exp-bold uppercase tracking-tight leading-snug my-10 sm:my-0">
            {isJoinUs
              ? "build impact with us"
              : "build a solution for your business"}
          </h1>

          {/* Common fields */}
          <div className="sm:w-1/2 sm:px-5 xl:px-14">
            <input
              type="text"
              className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg w-full"
              placeholder="NAME"
            />
            <input
              type="text"
              className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg mt-7 w-full"
              placeholder="EMAIL"
            />
            <input
              type="text"
              className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg mt-7 w-full"
              placeholder="CONTACT NUMBER"
            />

            {/* Conditional fields based on form type */}
            {isJoinUs ? (
              <>
                <input
                  type="text"
                  className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg mt-7 w-full"
                  placeholder="DESIRED POSITION"
                />
                <input
                  type="text"
                  className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg mt-7 w-full"
                  placeholder="LINKEDIN"
                />
                <input
                  type="file"
                  className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg mt-7 w-full"
                  placeholder="UPLOAD YOUR RESUME"
                />
                <input
                  type="text"
                  className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg mt-7 w-full"
                  placeholder="COVER LETTER"
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg mt-7 w-full"
                  placeholder="COMPANY NAME"
                />
                <input
                  type="text"
                  className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg mt-7 w-full"
                  placeholder="YOUR ROLE"
                />
                <input
                  type="text"
                  className="exp-reg border-b-2 border-[#443C4E] focus:outline-none py-2 text-lg mt-7 w-full"
                  placeholder="MESSAGE"
                />
              </>
            )}

            <p className="text-sm exp-reg mt-7">
              *All fields must be filled to proceed
            </p>
            <button className="inline-flex items-center sm:w-full text-lg justify-center py-3 px-8 exp-bold mt-10 text-[#443C4E] border-2 border-[#443C4E] rounded-tl-xl rounded-br-xl">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
