import Image from "next/image";
import React from "react";

const HeroItem = ({ item }) => {
  return (
    <div className=" flex items-start my-7 gap-[7px] bg-white">
      <Image src={item.icon} alt="img..." className="w-6 h-6" />
      <div className="flex flex-col gap-[6px]">
        <p className="font-semibold text-lg text-[#333333]">{item.title}</p>
        <select className="font-normal text-lg text-[#333333] opacity-80">
          <option value="1">{item.select}</option>
        </select>
      </div>
    </div>
  );
};

export default HeroItem;
