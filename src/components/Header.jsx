import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { BsCart } from "react-icons/bs";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
    // console.log("Hi")
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoSearch />,
      name: "Search"
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "New"
    },
    {
      icon: <IoIosHelpBuoy />,
      name: "Help"
    },
    {
      icon: <MdOutlineAssignmentInd />,
      name: "Sign In"
    },
    {
      icon: <BsCart />,
      name: "Cart",
      sup: "(2)"
    }
  ]
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 z-[9999999]"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="bg-white h-full w-[400px] absolute duration-[400ms]"
          onClick={(e) => {
            e.stopPropagation(); //prevent parent style of click hide side menu
          }}
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 z-[999] bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/logo.png" className="w-full" alt="" />
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-black mx-2">
              Farmer Mor
            </span>{" "}
            Konapara, Dhaka, Bangladesh{" "}
            <RxCaretDown
              onClick={showSideMenu}
              className="inline text-[25px] font-bold text-[#fc8019]"
            />
          </div>
          <nav className="hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px]">
            {
              links.map(
                (link, index) => {
                  return <li key={index} className="flex items-center gap-2 hover:text-[#fc8019]" >
                    {link.icon}
                    {link.name}
                    <sup>{link.sup}</sup>
                  </li>
                }
              )
            }           
          </nav>
        </div>
      </header>
    </>
  );
}
