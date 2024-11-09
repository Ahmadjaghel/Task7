import React from "react";

const FormItem = ({ title, Type, des }) => {
  return (
    <div className="flex flex-col items-start gap-[10px] ">
      <label className="font-semibold text-lg text-[#333333]">{title}</label>
      <input
        type={Type}
        placeholder={des}
        className="border border-solid border-[#33333333] w-full lg:w-[318px] h-[50px] pl-6 rounded-lg"
      />
    </div>
  );
};

export default FormItem;
