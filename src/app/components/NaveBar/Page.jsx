"use client";
import React, { useState } from "react";
import Logo from "../../../../public/images/logo.png";
import Close from "../../../../public/images/close.svg";
import Menu from "../../../../public/images/menu.svg";
import NavItems from "./NavItems/Page";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import MoreItems from "./MoreItems/Page";
import SignUp from "../SignUp/Page";

const NavBar = () => {
  const items = ["Home", "About Us", "Tour Packages", "Contact Us"];
  const [dialog, setDialog] = useState("");
  function showMenu() {
    const menu = document.querySelector(".ulmenu");
    menu.classList.toggle("translate-x-full");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("bg-nav");
    nav.classList.toggle("bg-[#FFFFFF33]");
    setActive(!active);
  }
  console.log(dialog);
  const [active, setActive] = useState(true);
  return (
    <div className="w-full z-30 ">
      <nav className="nav flex justify-between items-center bg-[#FFFFFF33] transition-all h-24 2xl:h-[170px] px-5 md:px-9  lg:px-[13.021vw] ">
        <Image src={Logo} alt="logo..." className=" w-20  2xl:w-[133px]" />
        <div className=" flex gap-[8.698vw] justify-between">
          <div className="hidden 2xl:flex items-center ">
            <NavItems items={items} />
          </div>
          <div className="hidden sm:block">
            <MoreItems fun={setDialog} showMenu={() => console.log("hi")} />
          </div>
        </div>

        {active ? (
          <div className="2xl:hidden " onClick={showMenu}>
            <IoMenu size={40} className="text-white" />
          </div>
        ) : (
          <div className="2xl:hidden " onClick={showMenu}>
            <IoClose size={40} className="text-white" />
          </div>
        )}
      </nav>
      <div className="ulmenu 2xl:hidden translate-x-full  fixed w-full transition-all transition-100 bg-nav ">
        <div>
          <NavItems items={items} />
        </div>
        <div className="mx-auto w-fit my-[60px] sm:hidden">
          <MoreItems fun={setDialog} showMenu={showMenu} />
        </div>
      </div>
      {dialog ? <SignUp fun={setDialog} dialog={dialog} /> : null}
    </div>
  );
};

export default NavBar;
