import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { GiHeartNecklace } from "react-icons/gi";
import { GiFeatherNecklace } from "react-icons/gi";
import { LiaRingSolid } from "react-icons/lia";
import { GiGemChain } from "react-icons/gi";
import { GiDropEarrings } from "react-icons/gi";

function Homeitems() {
  return (
    <div className="flex md:flex-row flex-wrap px-8 md:px-0 w-full md:h-60 py-8 bg-[#f9f0e7] justify-center gap-14">
      <div className="flex items-center justify-center flex-col gap-3 text-[#6c5e5b]">
        <GiBigDiamondRing className="text-8xl  rounded-full p-4 bg-[#f5e8dc]" />
        <h1 className="font-org font-semibold">Rings</h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 text-[#6c5e5b]">
        <GiCrystalEarrings className="text-8xl  rounded-full p-4 bg-[#f5e8dc]" />
        <h1 className="font-org font-semibold">Earrings</h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 text-[#6c5e5b]">
        <GiHeartNecklace className="text-8xl  rounded-full p-4 bg-[#f5e8dc]" />
        <h1 className="font-org font-semibold">Necklace</h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 text-[#6c5e5b]">
        <GiFeatherNecklace className="text-8xl  rounded-full p-4 bg-[#f5e8dc]" />
        <h1 className="font-org font-semibold">Custom made</h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 text-[#6c5e5b]">
        <LiaRingSolid className="text-8xl  rounded-full p-4 bg-[#f5e8dc]" />
        <h1 className="font-org font-semibold">Simple Designs</h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 text-[#6c5e5b]">
        <GiGemChain className="text-8xl  rounded-full p-4 bg-[#f5e8dc]" />
        <h1 className="font-org font-semibold">Handmande</h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 text-[#6c5e5b]">
        <GiDropEarrings className="text-8xl  rounded-full p-4 bg-[#f5e8dc]" />
        <h1 className="font-org font-semibold">Fancy</h1>
      </div>
    </div>
  );
}

export default Homeitems;
