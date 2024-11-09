import React from "react";
import Button from "../../button/Page";
import contact from "../../../../../public/images/contact.png";
import Image from "next/image";
const ContactUs = () => {
  return (
    <div className="mt-[217px] py-[60px] px-2 lg:px-[250px] bg-[url('/images/ground.png')] relative">
      <div className="max-w-[569px] p-[30px] mx-auto md:mx-0 bg-[#FFFFFF4D] flex flex-col gap-8 items-center text-center z-10">
        <h4 className="font-extrabold text-[32px] text-bblack ">
          Get Special Offers for Organizations
        </h4>
        <p className="font-normal text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Button title="Contact Us" width="w-[212px]" />
        <Image
          src={contact}
          alt="img.."
          className="absolute max-w-[22.2396vw] bottom-0 right-[13.021vw] -z-0 hidden md:block"
        />
      </div>
    </div>
  );
};

export default ContactUs;
