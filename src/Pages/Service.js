import React from "react";
import FeatureListed from "../Component/FeatureListed";
import ServiceCards from "../Component/ServiceCards";
function Service() {
  return (
    <>
      <div className=" flex flex-col items-center justify-between mt-20  bg-gray-100 pt-10">
        {" "}
        <p>OUR SERVICE</p>
        <p className="text-2xl font-bold my-3">What We Do Offer</p>
        <ServiceCards />
        <FeatureListed />
      </div>
    </>
  );
}

export default Service;
