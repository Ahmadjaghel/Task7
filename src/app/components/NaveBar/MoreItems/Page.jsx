import React from "react";
import Button from "../../button/Page";

const MoreItems = ({ fun, showMenu }) => {
  const signfun = () => {
    fun("signUp");
    showMenu();
  };
  const signinfun = () => {
    fun("signin");
    showMenu();
  };
  return (
    <div className=" flex gap-[22px] flex-col sm:flex-row items-center">
      <select className="bg-transparent text-white opacity-60 w-[59px] font-semibold text-xl">
        <option value="Eng" className="inline-block bg-nav ">
          Eng
        </option>
        <option value="Arabic" className="inline-block bg-nav ">
          Arabic
        </option>
      </select>
      <button
        className="text-xl font-semibold   text-white"
        onClick={signinfun}
      >
        Login
      </button>
      <div onClick={signfun}>
        <Button title="SignUp" width="w-[168px]" />
      </div>
    </div>
  );
};

export default MoreItems;
