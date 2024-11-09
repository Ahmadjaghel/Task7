import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import profile from "../../../../../public/images/profil.png";
import Card from "./CustomersCard/Page";
const Cutomers = () => {
  const items = [
    {
      img: profile,
      name: "Lyod Gomez",
      des: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
    {
      img: profile,
      name: "Lyod Gomez",
      des: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
  ];
  return (
    <div className="pt-[120px] px-[13.021vw] ">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-[60px]">
        <p className="font-extrabold text-[32px]">Happy Customers Says</p>
        <div className="flex gap-5">
          <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#EFEFEF] text-[#333333] rounded-full">
            <IoIosArrowBack size={22} className="opacity-60" />
          </div>
          <div className="w-[50px] h-[50px] flex justify-center items-center bg-myPrimary text-white rounded-full">
            <IoIosArrowForward size={22} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-[20px]">
        <Card item={items[0]} />
        <Card item={items[1]} />
      </div>
    </div>
  );
};

export default Cutomers;
