import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbHeadset } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
function Header() {
  return (
    <div className="flex justify-end py-5 text-xl pr-8 text-blue-400 bg-white">
      <TbHeadset className="mx-6 " />
      <IoNotificationsOutline className="mx-4" />
      <AiOutlineUser className=" mx-6" />
    </div>
  );
}

export default Header;
