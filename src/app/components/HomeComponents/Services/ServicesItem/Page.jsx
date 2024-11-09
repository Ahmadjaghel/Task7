import Image from "next/image";
import React from "react";

const ServicesItem = ({ item }) => {
  return (
    <div className="w-[330px]">
      <Image
        src={item.img}
        alt="img..."
        className="w-[330px] h-[302px] mb-[20px] rounded-3xl"
      />
      <div className="flex flex-col gap-3">
        <p className="font-bold text-2xl text-bblack">{item.title}</p>
        <p className="font-normal text-lg text-bblack">{item.des}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
