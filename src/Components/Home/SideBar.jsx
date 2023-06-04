import React from "react";
import { GoHistory } from "react-icons/go";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { MdCampaign, MdVideoLibrary } from "react-icons/md";
import { GiNestedHexagons } from "react-icons/gi";
import { SiQzone } from "react-icons/si";
import "./Home.css";
function SideBar() {
  return (
    <div className="basis-[15%] h-screen Color">
      <div className="flex flex-col  text-white">
        <img src="./Image/future.png" className="h-15 w-40 mt-5 ml-6" alt="" />
        <ul className="pt-10 ">
          <li className="py-3 px-6 flex bg-blue-950">
            <AiOutlineStock className="mt-1 mx-3 text-xl" /> Dashboard
          </li>
          <li className="py-3 px-6 flex">
            <MdCampaign className="mt-1 mx-3 text-xl" /> Campaigns
          </li>
          <li className="py-3 px-6 flex">
            <HiOutlineCommandLine className="mt-1 mx-3 text-xl" /> Command
          </li>
          <li className="py-3 px-6 flex">
            <SiQzone className="mt-1 mx-3 text-xl" /> Zones
          </li>
          <li className="py-3 px-6 flex">
            <GiNestedHexagons className="mt-1 mx-3 text-xl" /> Channels
          </li>
          <li className="py-3 px-6 flex">
            <BsLaptop className="mt-1 mx-3 text-xl" /> Devices
          </li>
          <li className="py-3 px-6 flex">
            <MdVideoLibrary className="mt-1 mx-3 text-xl" /> Media
          </li>
          <li className="py-3 px-6 flex">
            <GoHistory className="mt-1 mx-3 text-xl" /> History
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
