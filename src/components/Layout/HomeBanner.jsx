import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import model1 from "../../Assets/home/one.jpeg";
import { IoInfiniteOutline } from "react-icons/io5";

function HomeBanner() {
  return (
    <div className="md:flex h-[90vh] w-full">
      <div
        className="  bg-[#726e5a] flex justify-center items-center 
         relative text-center h-1/2 md:h-full w-full"
      >
        <div className="hidden md:flex text-[#e6e6e2] items-center text-sm font-org capitalize gap-5  h-8 -rotate-90 absolute left-[-200px] ">
          <h1>rings</h1>
          <div className="w-10 h-0.5 bg-[#e6e6e2]"></div>
          <h1>Earrings</h1>
          <div className="w-10 h-0.5 bg-[#e6e6e2]"></div>
          <h1>Bracelets</h1>
          <div className="w-10 h-0.5 bg-[#e6e6e2]"></div>
          <h1>Necklace</h1>
          {/* <div className="w-10 h-0.5 bg-[#e6e6e2]"></div> */}
        </div>
        <div className="flex-col md:gap-10 gap-5 flex text-[#e6e6e2] font-org">
          <div className=" md:gap-5 gap-1 flex   flex-col  ">
            <h1 className="text-3xl md:text-5xl capitalize">
              authentic hand made
            </h1>
            <h1 className="text-3xl md:text-5xl uppercase">
              Designed jewellery
            </h1>
            <h1 className="text-sm px-5">
              each piece is born from hands of our dedicated craftsmen,who{" "}
              <br className="hidden md:flex" /> embrace the art of jewelry
              making
            </h1>
          </div>
          <button className="flex uppercase justify-center items-center gap-2">
            shop now
            <div className="border-l-2 border-b-2 text-xl p-2 rounded-full">
              <GoArrowUpRight />
            </div>
          </button>
        </div>
        <IoInfiniteOutline className="hidden md:flex text-[#e6e6e2]/10 z-10 to-20 text-[25rem] md:text-[55rem] absolute " />
      </div>
      <div className=" md:w-2/5 md:h-full overflow-hidden w-full h-1/2 bg-red-950 ">
        <img src={model1} alt="" className="h-96 md:h-full  w-full  " />
      </div>
    </div>
  );
}

export default HomeBanner;
