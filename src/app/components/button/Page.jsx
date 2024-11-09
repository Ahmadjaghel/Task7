import React from "react";

const Button = ({ title, width }) => {
  return (
    <button
      className={`${width} bg-myPrimary px-6 py-[10px] rounded-full text-white text-xl font-semibold`}
    >
      {title}
    </button>
  );
};

export default Button;
