import React from "react";
import logo from "../../../../public/images/logo.png";
import Image from "next/image";
const Footer = () => {
  const services = [
    "Bike and Rickshaw rental",
    "Guided Tours of Lucca",
    "Guided Bike Tour of Lucca",
    "Trip In The Tuscan Hills",
    "Transportation With Luxury Cars",
    "Wine Tours By Bus With Guide",
  ];
  const home = ["Home", "About Us", "Tour Packages"];
  const help = ["Terms of Use", "Provicy Policy"];
  const contacts = [
    "Piazza Napoleone, Lucca, Tuscany",
    "+39 346 368 5708",
    "	italiainlimo@gmail.com",
  ];
  return (
    <div className="bg-bblack py-[40px] px-[13.021vw]">
      <Image src={logo} alt="logo..." className=" w-20  2xl:w-[133px]" />
      <div className="flex flex-wrap gap-[4.881vw]">
        <div>
          <p className="mb-[20px] text-white">Services</p>
          <div className="flex flex-col gap-[10px]">
            {services.map((ele, ind) => (
              <p className="text-white" key={ind}>
                {ele}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-[20px] text-white">Home</p>
          <div className="flex flex-col gap-[10px]">
            {home.map((ele, ind) => (
              <p className="text-white" key={ind}>
                {ele}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-[20px] text-white">Help</p>
          <div className="flex flex-col gap-[10px]">
            {help.map((ele, ind) => (
              <p className="text-white" key={ind}>
                {ele}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-[20px] text-white">Contacts</p>
          <div className="flex flex-col gap-[10px]">
            {contacts.map((ele, ind) => (
              <p className="text-white" key={ind}>
                {ele}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-[20px] text-white">Social Media</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
