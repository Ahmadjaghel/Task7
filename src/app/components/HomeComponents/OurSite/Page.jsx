import Image from "next/image";
import React from "react";
import site from "../../../../../public/images/site.png";
const OurSite = () => {
  const items = [
    { number: "20+", title: "Years Experience" },
    { number: "100+", title: "Happy Customer" },
    { number: "15+", title: "Choice of Services" },
    { number: "10+", title: "Professional Guides" },
  ];
  return (
    <div className="mt-[120px] px-[13.021vw] pl-[15.902vwpx] flex flex-col lg:flex-row justify-between items-center ">
      <Image src={site} alt="img...." className="max-w-[450px]" />
      <div className="max-w-[700px]">
        <p className="font-semibold text-base text-bblack opacity-60 mb-[6px]">
          WELCOME TO OUR SITE!
        </p>
        <div className="flex flex-col gap-8">
          <h4 className="font-extrabold text-[32px] text-bblack">
            We are the best company for your visit
          </h4>
          <p className="font-normal text-lg text-bblack">
            After decades of experience, and a whole life in Lucca, we offer you
            the most complete tourism service in the city. In addition to having
            bikes and rickshaws to have as much fun as you want, you have the
            choice of tour guides with whom to tour and drivers for your every
            need! We offer packages in the way that you get the most at the
            lowest price. Book with us and we will always be available for you!
          </p>
          <div className="flex flex-wrap gap-[50px]">
            {items.map((ele, ind) => (
              <div className="w-[83px]" key={ind}>
                <h6 className="text-myPrimary font-bold text-[32px]">
                  {ele.number}
                </h6>
                <p className="font-normal text-base text-bblack opacity-60">
                  {ele.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSite;
