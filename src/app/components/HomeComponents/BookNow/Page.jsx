import Image from "next/image";
import React from "react";
import FormItem from "./FormItem/Page";
import bookNow from "../../../../../public/images/bookNow.png";
const BookNow = () => {
  return (
    <div className=" py-[60px] px-2 lg:px-[250px] bg-[url('/images/ground.png')] bg-no-repeat bg-cover relative -z-20">
      <div className="w-full md:w-[734px] m-auto lg:m-0">
        <h4 className="text-center font-extrabold text-[32px] text-bblack">
          Book Now Bike
        </h4>
        <form className="w-full bg-[#FFFFFF4D] px-[34px] py-[30px] flex flex-col gap-[30px] items-center rounded-3xl">
          <div className="flex flex-col lg:flex-row w-full gap-[30px] justify-center">
            <FormItem
              title="Name and Surname"
              Type="text"
              des="Enter your name and surname"
            />
            <FormItem
              title="Email Address"
              Type="email"
              des="Enter your email address"
            />
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-[30px] justify-center">
            <FormItem
              title="Telephone Number"
              Type="text"
              des="Enter your telephone number"
            />
            <div className="flex flex-col  gap-[10px] justify-cente0r">
              <label className="font-semibold text-lg text-[#333333]">
                Service Type
              </label>
              <select className="border border-solid border-[#33333333] wfull lg:w-[318px] h-[50px] pl-6 rounded-lg">
                <option value="1">Select the service types</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-[30px] justify-center">
            <FormItem title="Date" Type="date" des="Select the date" />
            <FormItem title="Time" Type="time" des="Select the time" />
          </div>
          <input
            type="submit"
            className="w-[212px] bg-myPrimary px-6 py-[10px] rounded-full text-white text-xl font-semibold"
            value="Book Now"
          />
        </form>
      </div>
      <Image
        src={bookNow}
        alt="img..."
        className="absolute max-w-[37.709vw] max-h-[542px] bottom-[-34px] right-[10.417vw]  hidden lg:block -z-10"
      />
    </div>
  );
};

export default BookNow;
