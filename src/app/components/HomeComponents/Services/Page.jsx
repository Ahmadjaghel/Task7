import React from "react";
import serves1 from "../../../../../public/images/serves1.png";
import serves2 from "../../../../../public/images/serves2.png";
import serves3 from "../../../../../public/images/serves3.png";
import serves4 from "../../../../../public/images/serves4.png";
import ServicesItem from "./ServicesItem/Page";
const Services = () => {
  const items = [
    {
      img: serves1,
      title: "Bike and rickshaw rental",
      des: "Book your quality vehicle quickly for an hour or all day!",
    },
    {
      img: serves2,
      title: "Guided tour of the countryside",
      des: "Live the real Lucchese experience by visiting the suburbs by bike!",
    },
    {
      img: serves3,
      title: "Taxi and NCC service",
      des: "Do you need not only a bike but also a driver? Then you have found the right place!",
    },
    {
      img: serves4,
      title: "Bus Package",
      des: "Do you need not only a bike but also a driver? Then you have found the right place!",
    },
  ];
  return (
    <div className="px-[13.021vw] pt-[120px] pb-[63px] flex flex-wrap gap-[33px] justify-center items-center">
      {items.map((ele, ind) => (
        <ServicesItem item={ele} key={ind} />
      ))}
    </div>
  );
};

export default Services;
