import React from "react";

const FormItem = ({ title, Type, dis }) => {
  return (
    <div className="flex flex-col items-start gap-[10px]">
      <label className="font-semibold text-lg text-[#333333] opacity-60">
        {title}
      </label>
      <input
        type={Type}
        placeholder={dis}
        className="border border-solid border-[#33333333] w-full h-[50px] pl-6 rounded-lg"
      />
    </div>
  );
};

export default FormItem;
