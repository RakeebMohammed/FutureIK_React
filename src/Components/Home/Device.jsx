import React from "react";
import { Usage } from "./Donut";

function Device() {
  return (
    <div className="flex mx-8 pb-3">
      <div className="w-2/6 my-2 bg-white py-4 border-2">
        <h2 className="ml-6 mb-4 ">Device Status</h2>
        <div className="flex flex-row justify-around text-xs text-gray-500">
          <ul>
            <li className="">Device Name</li>
            <li className="mt-2">Test Device 01</li>{" "}
            <li className="mt-2">Test Device 02</li>{" "}
            <li className="mt-2">Test Device 03</li>{" "}
            <li className="mt-2">Test Device 04</li>{" "}
            <li className="mt-2">Test Device 05</li>{" "}
          </ul>
          <ul>
            <li className="">Status</li>
            <li className="text-white border-2 bg-green-600 mt-2 rounded-md  px-1">
              Online
            </li>{" "}
            <li className="border-2 text-white bg-green-600  mt-1 rounded-md  px-1">
              Online
            </li>{" "}
            <li className="border-2 bg-red-700 text-white mt-1 rounded-md  px-1">
              Offline
            </li>{" "}
            <li className="border-2 bg-red-700 text-white mt-1 rounded-md  px-1">
              Offline
            </li>{" "}
            <li className="border-2 text-white bg-green-600  mt-2 rounded-md  px-1">
              Online
            </li>
          </ul>

          <ul>
            <li>Last Response</li>
            <li className="mt-2">Wed Apr 26 2023,03:00:10</li>
            <li className="mt-2">Wed Apr 26 2023,15:00:10</li>

            <li className="mt-2">Wed Apr 26 2023,20:00:10</li>

            <li className="mt-2">Wed Apr 26 2023,10:00:10</li>

            <li className="mt-2">Wed Apr 26 2023,12:00:10</li>
          </ul>
        </div>
      </div>
      <div className="w-2/6 my-2 bg-white pt-4 border-2">
        <h2 className="ml-8">Activity Logs</h2>
        <div className="flex justify-evenly py-2 border-b-2 mx-3 text-gray-400">
          <div className="flex flex-col">
            <h2 className="text-md ml-4">Device</h2>
            <p className="text-xs ml-4">
              FutureIK-device 1 report generated succesfully
            </p>
          </div>
          <div className="flex flex-col">
            <p>16 March,2023</p>
            <p>06:30:25 PM</p>
          </div>
        </div>
        <div className="flex justify-evenly py-2 border-b-2 mx-3  text-gray-400">
          <div className="flex flex-col">
            <h2 className="text-md">Campaign</h2>
            <p className="text-xs">FutureIK-cinemas modified succesfully</p>
          </div>
          <div className="flex flex-col">
            <p>16 March,2023</p>
            <p>06:30:25 PM</p>
          </div>
        </div>
        <div className="flex justify-evenly py-2 border-b-2 mx-3  text-gray-400">
          <div className="flex flex-col">
            <h2 className="text-md">Zones</h2>
            <p className="text-xs">FutureIK-Display 1 created succesfully</p>
          </div>
          <div className="flex flex-col">
            <p>16 March,2023</p>
            <p>06:30:25 PM</p>
          </div>
        </div>
      </div>
      <div className="w-2/6 my-2  bg-white py-4 border-2">
        <h2 className="ml-8">Domain Quota</h2>
        <div className="flex ">
          <div className="flex h-40 justify-start items-center">
            <div className="w-24 ">
              <Usage />
            </div>

            <div>
              <p className="text-gray-400">Data Usage</p>
              <p>60.33gb/100gb</p>
            </div>

            <div className="flex justify-end ml-8">
              <div className="flex flex-col ">
                <p className="text-gray-400">Today</p>
                <p className="text-xl">30.00%</p>
                <p className="text-gray-400">This week</p>
                <p className="text-xl">15.00%</p>
                <p className="text-gray-400">This month</p>
                <p className="text-xl">55.00%</p>
              </div>
              <div className="flex flex-col mt-2 ml-2">
                <p className="text-xs text-green-400">Increase</p>
                <p className="text-gray-400">+15.00</p>
                <p className="text-xs mt-3 text-red-400">Decrease</p>
                <p className="text-gray-400">-15.00</p>
                <p className="text-xs mt-3 text-green-400"> Increase</p>
                <p className="text-gray-400">+25.00</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Device;
