import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Device from "./Device";
import Footer from "./Footer";
import General from "./General";
import Header from "./Header";

import Project from "./Project";
import SideBar from "./SideBar";
import { TbHeadset } from "react-icons/tb";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/");
    else navigate("/login");
  }, []);

  return (
    <div className="flex relative bg-slate-100 ">
      <div className="absolute bottom-5 right-4 text-3xl rounded-full p-3 bg-blue-900 text-white">
        <TbHeadset />
      </div>
      <SideBar />
      <div className="basis-[85%]  border-2">
        <Header />

        <Project />
        <General />
        <Device />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
