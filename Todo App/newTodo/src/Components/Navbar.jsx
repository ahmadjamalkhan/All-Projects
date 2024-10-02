import React from "react";

function Navbar() {
  return (
    <nav  className="flex justify-between py-2 px-8 text-white bg-indigo-900">
      <div className="logo">
        <h1 className=" text-xl font-bold ">iTast</h1>
      </div>
      <ul className="flex items-center gap-3">
        <li className=" cursor-pointer hover:font-bold ">Home</li>
        <li className="cursor-pointer hover:font-bold">Your Task</li>
      </ul>
    </nav>
  );
}

export default Navbar;
