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
      <div className="flex justify-between items-center">
        <div className="w-1/2 flex flex-col justify-between items-start h-64">
          <p className="font-bold text-[40px]">
            Find Your Beautiful <span className="text-blue-700">Home</span> With
            Us
          </p>
          <p className="text-sm">
            Track down the idea spot to be live with your familly.
          </p>
          <div className="flex">
            <ButtobBlue props="You're looking for this " />
            <ButtonSky props="Watch Video" />
          </div>
        </div>
        <div className="flex-col justify-center w-1/2 ">
          <div className="flex flex-row-reverse">
            <img
              src={house1}
              alt="house"
              className="h-16 w-48 object-cover rounded-tl-[50px]  shadow-sm
              "
            />
          </div>

          <img
            src={house3}
            alt="house"
            className="h-32 w-full object-cover rounded-tl-[50px] mt-2  shadow-sm"
          />
          <img
            src={house2}
            alt="house "
            className="h-16 w-52 object-cover rounded-tl-[50px] place-content-end mt-2  shadow-sm"
          />
        </div>
      </div>
      <HomeForm />
    </>
  );
}

export default Home;
