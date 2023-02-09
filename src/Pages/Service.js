import React from "react";
import ServiceCards from "../Component/ServiceCards";
function Service() {
  return (
    <>
      <div className=" flex flex-col items-center justify-between mt-20  h-72 ">
        {" "}
        <p>Our Service</p>
        <p>What We Do Offer</p>
        <ServiceCards />
      </div>
    </>
  );
}

export default Service;
