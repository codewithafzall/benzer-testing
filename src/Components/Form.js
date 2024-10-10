import React from "react";

export const Form = () => {
  return (
    <div className="w-[90%] mx-auto">
      <form className="bg-white px-4 pt-6 pb-20 rounded-tl-xl rounded-br-xl text-[#443C4E]">
        <div className="flex justify-between items-center uppercase">
          <h1 className="exp-bold text-[4vw]">work with us</h1>
          <h1 className="exp-bold text-[4vw]">join us</h1>
        </div>
        <h1 className="text-[7vw] exp-bold uppercase tracking-tight leading-snug my-10">
          build a solution
          <br />
          for your business
        </h1>
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
        <p className="text-sm exp-reg mt-7">*All fields must be filled to proceed</p>
        <button className="inline-flex items-center text-lg justify-center py-3 px-8 exp-bold mt-10 text-[#443C4E] border-2 border-[#443C4E] rounded-tl-xl rounded-br-xl">
          Submit
        </button>
      </form>
    </div>
  );
};
