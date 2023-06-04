import React from "react";
import { Che, Second, Third } from "./Donut";
function General() {
  return (
    <div className=" mx-8 flex-wrap flex   mt-3">
      <div className="w-2/6  border-2 my-2 bg-white py-4">
        <h2 className="ml-6 my-2 ">General Information</h2>
        <div className="flex  justify-around  text-slate-400 text-sm">
          <ul className="">
            <li className="mt-2">Projects</li>
            <li className="mt-2">Users</li>
            <li className="mt-2">Channels</li>
            <li className="mt-2"> Device</li>
          </ul>
          <ul>
            <li>
              {" "}
              <div className="mt-3  h-3 w-36 rounded-full mx-3 bg-gray-100">
                <div className="w-8 h-3 rounded-full bg-blue-950"></div>
              </div>
            </li>
            <li>
              {" "}
              <div className="my-4  h-3 w-36 rounded-full mx-3 bg-gray-100">
                <div className="w-36 h-3 rounded-full bg-blue-950"></div>
              </div>
            </li>
            <li>
              {" "}
              <div className="my-4  h-3 w-36 rounded-full mx-3 bg-gray-100">
                <div className="w-36 h-3 rounded-full bg-blue-950"></div>
              </div>
            </li>
            <li>
              {" "}
              <div className="my-3  h-3 w-36 rounded-full mx-3 bg-gray-100">
                <div className="w-1/2 h-3 rounded-full bg-blue-950"></div>
              </div>
            </li>
          </ul>
          <ul>
            <li className="mt-2">02/10</li>
            <li className="mt-2">03/03</li>
            <li className="mt-2">10/10</li>
            <li className="mt-2">05/10</li>
          </ul>
        </div>
      </div>
      <div className="w-2/6 my-2   py-4 bg-white border-2">
        <h2 className="ml-9 my-2">Live Statistics</h2>
        <div className="flex justify-evenly">
          <div className="w-20 flex flex-col">
            <Che />
            <p className=" text-sm text-center border-blue-400 border-2 mt-3 text-blue-400 ">
              Info
            </p>
          </div>
          <div className="w-20 flex flex-col">
            <Second />
            <p className=" text-sm text-center border-blue-400 border-2 mt-3 text-blue-400">
              Warnings
            </p>
          </div>
          <div className="w-20 flex flex-col">
            <Third />
            <p className=" text-sm text-center border-blue-400 border-2 mt-3 text-blue-400">
              Errors
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="border-2 w-2/6 flex my-2 bg-white  justify-end">
        <div className=" ">
          <h2 className="ml-6 my-2">Location-Devices</h2>
          <img
            src="https://i.stack.imgur.com/XPIko.png"
            style={{ width: "400px" }}
            className="h-36"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default General;
