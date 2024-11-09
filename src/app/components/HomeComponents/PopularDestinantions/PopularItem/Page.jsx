import Image from "next/image";
import React from "react";
import calendar from "../../../../../../public/images/uicons_calendar.svg";
import persons from "../../../../../../public/images/private-tours.svg";
const PopularItem = ({ item }) => {
  return (
    <div className="w-[330px]">
      <Image
        src={item.img}
        alt="img..."
        className="w-[330px] h-[404px] mb-[16px] rounded-3xl"
      />
      <div className="flex flex-col gap-3">
        <p className="font-bold text-2xl">{item.title}</p>
        <p className="font-semibold text-lg text-bblack opacity-80">
          from
          <span className="ml-[10px] text-myPrimary font-extrabold text-2xl opacity-100">
            {item.price}
          </span>
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-[6px]">
            <Image src={calendar} alt="img..." />
            <p className="text-myPrimary font-semibold text-base">
              {item.date}
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <Image src={persons} alt="img..." />
            <p className="text-myPrimary font-semibold text-base">
              {item.number}
            </p>
          </div>
        </div>
        <p className="font-normal text-lg">{item.dis}</p>
      </div>
    </div>
  );
};

export default PopularItem;
