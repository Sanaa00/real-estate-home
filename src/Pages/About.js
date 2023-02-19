import React from "react";
import ButtobBlue from "../Component/ButtobBlue";
import UserNumber from "../Component/UserNumber";
import Numbers from "../Component/Numbers";
import VideoAbout from "../Component/VideoAbout";
function About() {
  return (
    <>
      <div className="mt-20 flex-col flex lg:flex-row justify-between lg:h-96 bg-gray-100 pt-10">
        <div className="lg:w-1/2">
          <VideoAbout />
        </div>
        <div className="lg:w-1/2 mt-4 lg:mt-0 px-6">
          <p className="text-lg">About Us</p>
          <p className="text-[30px] sm:text-[40px] lg:text-[30px] font-bold">
            Who We Are?
          </p>
          <p className="text-lg  font-semibold">
            WE are Leading The Real Estate Marketplace in Nigeria
          </p>
          <p className="text-sm mt-3 lg:mt-1">
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
