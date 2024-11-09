import Link from "next/link";
import React from "react";

const NavItems = ({ items }) => {
  return (
    <>
      <ul className="flex flex-col gap-10 items-center  2xl:flex-row text-white text-xl font-semibold ">
        <li className=" min-w-fit flex  items-center w-full h-[65px]  2xl:w-auto 2xl:h-auto 2xl:ps-0">
          <Link
            href="/Pages/Home"
            className="bg-active 2xl:bg-transparent rounded-[5px] w-full h-full
            ps-5 2xl:ps-0 text-start "
          >
            {items[0]}
          </Link>
        </li>
        <li className=" min-w-fit flex  items-center w-full h-[65px]  2xl:w-auto 2xl:h-auto 2xl:ps-0">
          <Link
            href="/Pages/About"
            className="bg-active 2xl:bg-transparent rounded-[5px] w-full h-full
            ps-5 2xl:ps-0 text-start "
          >
            {items[1]}
          </Link>
        </li>
        <li className=" min-w-fit flex  items-center w-full h-[65px]  2xl:w-auto 2xl:h-auto 2xl:ps-0">
          <Link
            href="/Pages/Home"
            className="bg-active 2xl:bg-transparent rounded-[5px] w-full h-full
            ps-5 2xl:ps-0 text-start "
          >
            {items[2]}
          </Link>
        </li>
        <li className=" min-w-fit flex  items-center w-full h-[65px]  2xl:w-auto 2xl:h-auto 2xl:ps-0">
          <Link
            href="/Pages/Home"
            className="bg-active 2xl:bg-transparent rounded-[5px] w-full h-full
            ps-5 2xl:ps-0 text-start "
          >
            {items[3]}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
