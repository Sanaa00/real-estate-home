import React from "react";
import ButtobBlue from "../Component/ButtobBlue";
import ButtonSky from "../Component/ButtonSky";
import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";
import HomeForm from "../Component/HomeForm";

function Home() {
  return (
    <>
      <div className="flex-col flex lg:flex-row justify-between items-center mt-10 lg:mt-20 pt-10">
        <div className="lg:w-1/2 flex flex-col justify-between lg:h-64">
          <p className="font-bold text-[30px] sm:text-[40px]">
            Find Your Beautiful <span className="text-blue-700">Home</span> With
            Us
          </p>
          <p className="text-sm">
            Track down the idea spot to be live with your familly.
          </p>
          <div className="mt-2 lg:mt-0 flex flex-row h-8">
            <ButtobBlue text="You're looking for this " width="60" />
            <ButtonSky text="Watch Video" width="60" />
          </div>
        </div>
        <div className="mt-10 lg:mt-0 flex-col justify-center lg:w-1/2 ">
          <div className="flex flex-row-reverse">
            <img
              src={house1}
              alt="house"
              className="h-16 w-48 md:2-60 object-cover rounded-tl-[50px]  shadow-sm
              "
            />
          </div>

          <img
            src={house3}
            alt="house"
            className="h-32 w-full object-cover rounded-tl-[50px] mt-2  shadow-sm "
          />
          <img
            src={house2}
            alt="house "
            className="h-16 w-52 md:2-60  object-cover rounded-tl-[50px] place-content-end mt-2  shadow-sm"
          />
        </div>
      </div>
      <HomeForm />
    </>
  );
}

export default Home;
