import React from "react";

function HomeWorkshop() {
  return (
    <div className="flex md:flex-row flex-col w-full gap-3 md:h-[100vh] bg-[#726f5b] text-[#e7e4e2] px-5 py-6 md:px-32 justify-center items-center relative">
      <h1 className="text-4xl  md:text-7xl md:absolute  font-org md:top-20 md:left-56 ">
        DTOPAZ
      </h1>
      <h1 className="text-3xl md:text-6xl md:absolute  font-org top-52 left-72">
        WORKSHOP
      </h1>
      <img
        src="https://media.istockphoto.com/id/617896650/photo/craft-jewelery-making.jpg?s=612x612&w=0&k=20&c=UFruy7o2mUEXsHVEWZ8kxv-eSuX_rxiJ6c4yvOtwWuU="
        alt=""
        className="md:w-[45rem] w-[30rem] md:h-[30rem] rounded-r-full rounded-l-full"
      />
      <p className="w-72 md:text-start text-justify font-org md:absolute left-[55rem] top-64">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab beatae
        ducimus excepturi architecto sit error rerum consequuntur minus totam
        odit qui, alias sunt sapiente blanditiis in harum ut neque illum. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. <br /> <br /> Dolore, dolores,
        itaque reprehenderit corporis quibusdam, odit voluptas dolor culpa
        facere amet quas suscipit error beatae. Itaque quis exercitationem
        quidem quo obcaecati.
      </p>
    </div>
  );
}

export default HomeWorkshop;
