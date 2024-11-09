import Image from "next/image";
import React from "react";
import publicTours from "../../../../../public/images/publicTours.png";
import privateTours from "../../../../../public/images/privateTours.png";
import persons from "../../../../../public/images/icon_private.png";
import calendar from "../../../../../public/images/uicons_calendar.png";
import clock from "../../../../../public/images/uicons_clock.png";
import tour from "../../../../../public/images/icon _tour.png";
import car from "../../../../../public/images/icon_car.png";
import HeroItem from "./HeroItem/Page";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  const items = [
    { icon: persons, title: "Number of people", select: "Choose number" },
    { icon: calendar, title: "Date", select: "Choose Date" },
    { icon: clock, title: "Time", select: "Choose Time" },
    { icon: tour, title: "Tour", select: "Select Tour" },
    { icon: car, title: "Transportation", select: "Select Transportation" },
  ];
  return (
    <div className="w-screen flex justify-center pt-10 sm:pt-[11.945vh]">
      <div>
        <div className="flex flex-col items-center gap-4 text-white mb-[60px]">
          <h2 className="text-center text-7xl font-normal ">
            Enjoy in the best way!
          </h2>
          <p className="text-center font-bold text-2xl">
            Enjoy our services for your trip anytime
          </p>
        </div>
        <div className="bg-[#FFFFFF33] p-5">
          <div className="flex">
            <div className="flex gap-[10px] items-center bg-white p-4 w-fit rounded-tl-xl">
              <Image src={publicTours} alt="img..." className="w-6" />
              <p className="text-myPrimary font-semibold text-lg">
                Public Tours
              </p>
            </div>
            <div className="flex gap-[10px] items-center bg-[#FFFFFF66] p-4 w-fit rounded-tr-xl">
              <Image src={privateTours} alt="img..." className="w-6" />
              <p className="font-semibold text-lg text-white">Private Tours</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center bg-white rounded-r-xl rounded-bl-xl ">
            <div className="flex flex-wrap pl-7 gap-6">
              {items.map((ele, ind) => (
                <HeroItem item={ele} key={ind} />
              ))}
              <div className=" w-20 min-w-20 h-20 my-4 mr-3 bg-myPrimary text-white flex justify-center items-center rounded-xl">
                <CiSearch size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
