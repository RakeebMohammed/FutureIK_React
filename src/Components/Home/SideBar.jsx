import React from "react";
import { GoHistory } from "react-icons/go";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { MdCampaign, MdVideoLibrary } from "react-icons/md";
import { GiNestedHexagons } from "react-icons/gi";
import { SiQzone } from "react-icons/si";
function SideBar() {
  return (
    <div className="basis-[15%] h-screen bg-blue-900">
      <div className="flex flex-col  text-white">
        <h2 className="pt-5 text-3xl  px-12">FutureIK </h2>
        <p style={{ fontSize: "9px" }} className=" px-12">
          Technologies Pvt Ltd{" "}
        </p>
        <ul className="pt-10 ">
          <li className="py-3 px-6 flex bg-blue-950">
            <AiOutlineStock className="mt-1 mx-2" /> Dashboard
          </li>
          <li className="py-3 px-6 flex">
            <MdCampaign className="mt-1 mx-2" /> Campaigns
          </li>
          <li className="py-3 px-6 flex">
            <HiOutlineCommandLine className="mt-1 mx-2" /> Command
          </li>
          <li className="py-3 px-6 flex">
            <SiQzone className="mt-1 mx-2" /> Zones
          </li>
          <li className="py-3 px-6 flex">
            <GiNestedHexagons className="mt-1 mx-2" /> Channels
          </li>
          <li className="py-3 px-6 flex">
            <BsLaptop className="mt-1 mx-2" /> Devices
          </li>
          <li className="py-3 px-6 flex">
            <MdVideoLibrary className="mt-1 mx-2" /> Media
          </li>
          <li className="py-3 px-6 flex">
            <GoHistory className="mt-1 mx-2" /> History
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
