import React from "react";
import Layout from "../Layout/Layout";
import { jweldata } from "../../utils/data/JwellData";
import { Link, useParams } from "react-router-dom";

const SingleJewel = () => {
  const { id } = useParams();
  const singleData = jweldata;

  return (
    <Layout>
      {singleData
        .filter((item) => item.id == id)
        .map((single) => (
          <div className="h-[90vh] w-full flex relative z-10">
            <img
              className="absolute top-[20%] left-[41.5%] rounded-t-full rounded-b-full
               w-60 h-[23rem] shadow-sm"
              src={single.image}
              alt=""
            />
            <div className="w-full">
              <img
                className="w-full h-full"
                src=" https://i.ebayimg.com/images/g/iusAAOSw-kZjCG5z/s-l400.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-full bg-[#726e5a] flex  justify-center ">
              <div className="flex flex-col font-org items-center justify-center w-[30rem] gap-5">
                <h3 className="text-5xl    font-bold">{single.name}</h3>
                <h3 className="text-3xl ">{"$" + single.price}</h3>
                <p className="px-16 text-center text-xl ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                {/* <Link to={"/cart"}> */}
                  <button className=" mt-14 border  hover:bg-[#4f4c3f] px-10 py-3 rounded-full border-[#f9f0e7] text-[#f9f0e7]">
                    ADD TO CART
                  </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        ))}
    </Layout>
  );
};

export default SingleJewel;
