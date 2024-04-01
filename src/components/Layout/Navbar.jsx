import React, { useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="flex justify-between items-center md:h-[10vh] h-14 px-5 ">
      <h1 className="text-[#a67c00] font-org font-semibold text-xl md:text-3xl uppercase">
        Moon Magic
      </h1>
      <RxHamburgerMenu
        className="md:hidden text-[#a67c00] text-xl"
        onClick={() => {
          setView(!view);
        }}
      />
      <div className="md:flex hidden justify-between items-center gap-72">
        <ul className="md:flex font-org gap-10 ">
          <li className="">Collection</li>
          <li className="">Collection</li>
          <li className="">Collection</li>
          <li className="">Collection</li>
          <li className="">Collection</li>
        </ul>
        <div className="relative ">
          <LiaShoppingBagSolid className="text-3xl text-[#a67c00]" />
          <h1 className="text-[8px] bg-[#b7884a] py-[1px] px-[6px] absolute top-0 left-0 rounded-full">
            1
          </h1>
        </div>
      </div>
      {view ? (
        <div className="flex md:hidden flex-col absolute top-14 z-10 p-10 left-0 items-center gap-10 w-full bg-white">
          <ul className="md:flex font-org flex-col flex gap-8 ">
            <li className="">Collection</li>
            <li className="">Collection</li>
            <li className="">Collection</li>
            <li className="">Collection</li>
            <li className="">Collection</li>
          </ul>
          <div className="relative ">
          <LiaShoppingBagSolid className="text-3xl text-[#a67c00]" />
            <h1 className="text-[8px] bg-[#b7884a] py-[1px] px-[6px] absolute top-0 left-0 rounded-full">
              1
            </h1>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
