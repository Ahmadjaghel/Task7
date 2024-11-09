import Image from "next/image";
import React from "react";
import layer from "../../../../../../public/images/Layer1.png";
const Card = ({ item }) => {
  return (
    <div className="max-w-[600px] min-w-[480px] flex flex-col items-center text-center border border-solid border-[#EFEFEF] p-[30px]">
      <div>
        <Image src={item.img} alt="img.." />
        <p>{item.name}</p>
      </div>
      <div className="flex flex-col">
        <Image src={layer} alt="img..." className="opacity-10" />
        <p>{item.des}</p>
        <Image src={layer} alt="img..." className="opacity-10 self-end" />
      </div>
    </div>
  );
};

export default Card;
