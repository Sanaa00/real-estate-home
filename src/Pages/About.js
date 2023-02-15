import React from "react";
import ButtobBlue from "../Component/ButtobBlue";
import UserNumber from "../Component/UserNumber";
import Numbers from "../Component/Numbers";
function About() {
  return (
    <>
      <div className="mt-20 flex justify-between h-96 bg-gray-100">
        <div>video</div>{" "}
        <div className="w-1/2">
          <p className="text-lg">About Us</p>
          <p className="text-[40px] font-bold">Who We Are?</p>
          <p className="text-lg font-semibold">
            WE are Leading The Real Estate Marketplace in Nigeria
          </p>
          <p className="text-sm mt-3">
            Over 20,000 people work for us in more than 30 starts all over this
            breath of global combinedd with specialist serices
          </p>
          <UserNumber />
          <ButtobBlue text="See More" width="60" />
        </div>
      </div>
      <Numbers />
    </>
  );
}

export default About;
