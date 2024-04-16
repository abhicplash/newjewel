import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function HomeCollections() {
  return (
    <div className="bg-[#fef8f3] h-[100vh] w-full flex justify-center gap-12 ">
      <div className="pt-8 flex flex-col gap-5 items-start">
        <h1 className="text-6xl font-org">
          Our <br /> Collection <br /> Of Jewellery
        </h1>
        <Link to={"/collections"}>
          <button className="flex uppercase text-[#311e21] mt-16 justify-center items-center gap-2 font-org">
            shop now
            <div className="border-l-2 border-b-2 text-xl p-2 border-[#311e21] rounded-full ">
              <GoArrowUpRight />
            </div>
          </button>
        </Link>
      </div>
      <div className="flex gap-12 items-center">
        <div className="font-org flex flex-col gap-3">
          <img
            className="rounded-b-full rounded-t-full w-60 h-[23rem]"
            src="https://img.freepik.com/free-photo/close-up-engagement-ring_23-2149430767.jpg"
            alt=""
          />
          <div>
            <h1>Elegent Rings</h1>
            <h1 className="italic text-[#c6b7a9]">by MOONMAGIC</h1>
            <h1>$300</h1>
          </div>
        </div>
        <div className="font-org flex flex-col gap-3">
          <img
            className="rounded-b-full rounded-t-full w-60 h-[23rem]"
            src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw988ae6ca/images/hi-res/50D5PTNXHAA02_1.jpg"
            alt=""
          />
          <div>
            <h1>Dashing Necklace</h1>
            <h1 className="italic text-[#c6b7a9]">by MOONMAGIC</h1>
            <h1>$300</h1>
          </div>
        </div>
        <div className="font-org flex flex-col gap-3">
          <img
            className="rounded-b-full rounded-t-full w-60 h-[23rem]"
            src="https://www.jewelegance.com/cdn/shop/products/JG-1903-3647.jpg?v=1675540199"
            alt=""
          />
          <div>
            <h1>Necklace Set</h1>
            <h1 className="italic text-[#c6b7a9]">by MOONMAGIC</h1>
            <h1>$300</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCollections;
