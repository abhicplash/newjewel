import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full bg-[#f9f0e7] flex font-org  px-32
     justify-center gap-14 flex-col h-96"
    >
      <div className="flex  justify-between  gap-10 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-[#a67c00] text-3xl uppercase font-semibold  font-org">
            moon magic
          </h1>
          <p className="w-56">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1>MENU</h1>
          <ul>
            <li>collection</li>
            <li>collection</li>
            <li>collection</li>
            <li>collection</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="uppercase">contact us</h1>
          <div className="flex  items-center">
            <IoLocationSharp />
            Dubai,UAE
          </div>
        </div>
        <div className="flex flex-col gap-5 text-right">
          <h1 className="uppercase">Follow us</h1>
          <div className="flex gap-5 text-xl text-[#a67c00]">
            <FaInstagram />
            <FaXTwitter />
            <FaFacebookSquare />
            <FaRegEnvelope />
          </div>
        </div>
      </div>
      <div className=" w-full  h-0.5 bg-[#cfc7c0]" />
    </div>
  );
};

export default Footer;
