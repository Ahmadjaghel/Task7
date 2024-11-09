import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import popular1 from "../../../../../public/images/popular1.png";
import popular2 from "../../../../../public/images/popular2.png";
import popular3 from "../../../../../public/images/popular3.png";
import popular4 from "../../../../../public/images/popular4.png";
import PopularItem from "./PopularItem/Page";
const Popular = () => {
  const items = [
    {
      img: popular1,
      title: "Lucca Bike Tour",
      price: "34 €",
      date: "EVERY DAY",
      number: "3-10 PP",
      dis: "A tour of the city and its surroundings led by a professional guide ...",
    },
    {
      img: popular2,
      title: "Wine tasting In Tuscany",
      price: "34 €",
      date: "MONDAY",
      number: "3-10 PP",
      dis: "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
    },
    {
      img: popular3,
      title: "Cinque Terre Tour",
      price: "34 €",
      date: "TO BE DECIDED",
      number: "10-50 PP",
      dis: "Visiting the 5 Terre is a must, and you can never go there enough ...",
    },
    {
      img: popular4,
      title: "Siena and Surroundings",
      price: "34 €",
      date: "TO BE DECIDED",
      number: "5-10 PP",
      dis: "Visit the beautiful Siena and the cities that surround it to experience ...",
    },
  ];
  return (
    <div className="pt-[120px] px-[13.021vw] ">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-[60px]">
        <p className="font-extrabold text-[32px]">
          Explore Our Popular Destinantions{" "}
        </p>
        <div className="flex gap-5">
          <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#EFEFEF] text-[#333333] rounded-full">
            <IoIosArrowBack size={22} className="opacity-60" />
          </div>
          <div className="w-[50px] h-[50px] flex justify-center items-center bg-myPrimary text-white rounded-full">
            <IoIosArrowForward size={22} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center gap-8 lg:gap-0 lg:justify-between items-center flex-wrap">
        {items.map((ele, ind) => (
          <PopularItem item={ele} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
