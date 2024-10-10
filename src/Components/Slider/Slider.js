import React, { useState } from 'react';
import Slider1 from "./Slider1.png";
import Slider2 from "./Slider2.png";
import Slider3 from "./Slider3.png";
import Slider4 from "./Slider4.png";
import Slider5 from "./Slider5.png";

const Slider = () => {

  const slides = [
    { image: Slider1, title: "AQUATIEN" },
    { image: Slider2, title: "FLOH" },
    { image: Slider3, title: "NIYO" },
    { image: Slider4, title: "PLUCKK" },
    { image: Slider5, title: "BAGGIT" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); 
  };

  return (
    <div className='w-[90%] mx-auto mb-12'>
     
      <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} className='w-full' />
      
      
      <div className='flex justify-between items-center mt-6 px-2'>
        
        <h1 className='exp-bold text-[6vw] tracking-wide text-white'>
          {slides[currentSlide].title}
        </h1>
        
        <div className='flex justify-center items-center gap-x-4'>
         
          <button 
            onClick={handlePrev} 
            className='inline-flex items-center justify-center w-14 h-14 text-white text-xl border-2 border-white rounded-tr-xl rounded-bl-xl'>
            {"<"}
          </button>
          
          <button 
            onClick={handleNext} 
            className='inline-flex items-center justify-center w-14 h-14 text-white text-xl border-2 border-white rounded-tl-xl rounded-br-xl'>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
