import React from "react";
// import Total from "./Total";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Layout from "../Layout/Layout";
import { jweldata } from "../../utils/data/JwellData";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartPage = () => {
  const cartItems = jweldata;

  return (
    <Layout>
      <div className="flex font-org border">
        <div className="w-full px-56 gap-20 items-center min-h-[90vh]  justify-center flex">
          <div className="w-full ">
            <div className="flex w-full bg-[#726f5b] px-4 h-9 items-center border justify-between text-[#f9f0e7]">
              <h1>Product </h1>
              <h1>Quantity </h1>
              <h1>Price </h1>
            </div>
            <div className="flex flex-col gap-6 pt-6">
              <div
                className="flex px-3 w-full h-40 text-[#726f5b] pr-10 py-1 shadow-sm 
               border-[#f9f0e7] shadow-[#726f5b] justify-between items-center  "
              >
                <img
                  className="w-[6.5rem] h-full "
                  src="https://i.ebayimg.com/images/g/iusAAOSw-kZjCG5z/s-l400.jpg"
                  alt=""
                />
                <div className="flex justify-center items-center gap-3">
                  <FaPlus className="text-xs text-[#726f5b]" />
                  <input
                    type="text"
                    value="1"
                    name=""
                    id=""
                    className="w-6 border text-[#726f5b] text-center flex justify-center items-center font-bold pb-1"
                  />
                  <FaMinus className="text-xs text-[#726f5b]" />
                </div>
                <h1 className="text-sm font-sans font-semibold ">$30</h1>
              </div>
              <div
                className="flex px-3 w-full h-40 text-[#726f5b] pr-10 py-1 shadow-sm 
               border-[#f9f0e7] shadow-[#726f5b] justify-between items-center  "
              >
                <img
                  className="w-[6.5rem] h-full "
                  src="https://i.ebayimg.com/images/g/iusAAOSw-kZjCG5z/s-l400.jpg"
                  alt=""
                />
                <div className="flex justify-center items-center gap-3">
                  <FaPlus className="text-xs text-[#726f5b]" />
                  <input
                    type="text"
                    value="1"
                    name=""
                    id=""
                    className="w-6 border text-[#726f5b] text-center flex justify-center items-center font-bold pb-1"
                  />
                  <FaMinus className="text-xs text-[#726f5b]" />
                </div>
                <h1 className="text-sm font-sans font-semibold ">$30</h1>
              </div>
            </div>
          </div>
          <div className="w-2/4 h-96 shadow-sm shadow-[#726f5b]">
            <div className="flex flex-col items-center justify-center gap-10 py-12">
              <h1 className="uppercase text-4xl font-bold  ">DtopaZ</h1>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between w-52 drop-shadow-xl ">
                  <h1>Quantity</h1>
                  <h1 className="font-sans">2</h1>
                </div>
                <div className="flex  justify-between w-52   drop-shadow-xl">
                  <h1>Price</h1>
                  <h1 className="font-sans">$60</h1>
                </div>
              </div>
              <button className="font-semibold bg-[#726f5b] text-[#f9f0e7] border px-10 py-3 mt-8 rounded-full">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
