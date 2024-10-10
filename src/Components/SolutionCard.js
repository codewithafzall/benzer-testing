import React from "react";

const cardData = [
    {
      title: "DEFINE",
      subTitle: "strategy & consultation",
      description: "Retaining Amex India’s customer base during an acquisition freeze",
      bgImage: "../assets/Solution1.png"
    },
    {
      title: "DESIGN",
      subTitle: "ONLINE MARKETING EXPERIENCE",
      description: "Turning HRX into a 1,000 Crore Brand using dms",
      bgImage: "assets/Solution2.png"
    },
    {
      title: "DEPLOY",
      subTitle: "COMMERCE SOLUTIONS",
      description: "Remodelling Rostaa through e-commerce to unlock 4X ROI",
      bgImage: "assets/Solution3.png"
    },
    {
      title: "DISTRIBUTE",
      subTitle: "GROWTH MARKETING",
      description: "Selling elevator online through a unique lead strategy that became a global benchmark",
      bgImage: "assets/Solution4.png"
    }
  ];
  
  function CardComponent() {
    return (
      <div className="grid grid-cols-1 gap-x-4 gap-y-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card rounded-tl-xl rounded-br-xl flex flex-col justify-between"
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "75vh"
            }}
          >
            <h1 className="text-[10vw] tracking-wider ml-6 mt-3 text-white exp-bold">
              {card.title}
            </h1>
            <div className="bottom-0">
              <h1 className="text-[6vw] whitespace-normal w-3/4 uppercase font-semibold ml-6 text-white exp-reg">
                {card.subTitle}
              </h1>
              <p className="text-white capitalize exp-reg mt-4 mx-6 font-thin text-sm">
                {card.description}
              </p>
              <button className="bg-white relative text-sm exp-reg bg-opacity-10 backdrop-filter ml-6 backdrop-blur-sm text-white px-7 py-5 mt-7 mb-10 rounded-tl-xl rounded-br-xl">
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default CardComponent;
  