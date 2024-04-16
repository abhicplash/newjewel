import React from "react";
import Layout from "../Layout/Layout";
import { jweldata } from "../../utils/data/JwellData";
import { Link } from "react-router-dom";

function Collections() {
  return (
    <Layout>
      <div className="w-full h-96 bg-bannergold bg-cover  bg-center " />
      <div className="bg-[#fef8f3]">
        <h1 className="text-center text-4xl md:text-5xl font-org py-14">
          Our Collection
        </h1>
        <div className="flex flex-wrap justify-center gap-8 px-36">
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Ring
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Necklace
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Earings
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Bracelets
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Others
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Ring
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Necklace
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Earings
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Bracelets
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Others
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Ring
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Necklace
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Earings
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Bracelets
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Others
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Ring
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Necklace
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Earings
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Bracelets
          </h1>
          <h1 className="border py-2 px-10 shadow-sm shadow-[#b7884a] rounded-l-full rounded-r-full border-[#b7884a]">
            Others
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-12 px-28 py-20 ">
          {jweldata.map((list) => (
            <div className="font-org flex flex-col items-center gap-3">
              <Link to={"/collections/" + list.id}>
                <img
                  className="cursor-pointer shadow-md shadow-[#382526] 
                    rounded-b-full rounded-t-full w-60 h-[23rem]"
                  src={list.image}
                  alt=""
                />
              </Link>
              <div>
                <h1>{list.name}</h1>
                <h1 className="italic text-[#c6b7a9]">by MOONMAGIC</h1>
                <h1>$300</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Collections;
