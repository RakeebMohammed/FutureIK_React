import React from "react";

function Project() {
  return (
    <div className="mx-8">
      {" "}
      <h3 className="py-6 text-2xl">Project</h3>
      <div className="flex flex-row justify-around bg-white p-3">
        <ul className="">
          <li className="">Adidas Mobile</li>
          <li></li>
        </ul>
        <ul>
          <li className="">Campaigns</li>
          <li className="text-slate-500">8</li>
        </ul>
        <ul>
          <li className="">Channels</li>
          <li className="text-slate-500">9/10</li>
        </ul>
        <ul>
          <li className="">Last Edited by</li>
          <li className="text-slate-500">Varun</li>
        </ul>
        <ul>
          <li className="">Last Edited on</li>
          <li className="text-slate-500">5 hours ago</li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
