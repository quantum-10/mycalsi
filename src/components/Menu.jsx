import React, { useState, useEffect, useRef } from "react";
import "./Menu.css";

function Menu({ onComponentSelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

 


  return (
    <div className="flex">
      <div>
      <i class="fa-solid fa-calculator text-gray-400 text-xl pr-3"></i>
        <span className="text-xl font-bold cursor-default text-gray-400">
          My Calsi. . .
        </span>
      </div>
      <div className="ml-auto text-gray-100">
        <button onClick={toggleMenu}>
          <i
            className={`fa-solid fa-bars text-xl icon-rotate ${
              isMenuOpen ? "active" : ""
            }`}
          ></i>
        </button>
        {isMenuOpen && (
          <div className="menu grid grid-cols-1 gap-4">
            <ul>
              <li className="pb-2">
              <div className="ml-auto text-gray-100">
        <button onClick={() => {toggleMode();closeMenu()}}>
          {isLightMode ? (
             <div className="pl-2">
             <i className="fa-solid fa-sun text-xl pr-3 text-yellow-500"></i>
             <span className="text-xl font-bold">Light Mode</span>
           </div>
           
           
          ) : (
            <div className="pl-2">
            <i className="fa-solid fa-moon text-2xl pr-3  font-extrabold my-auto"></i>
            <span className="text-xl font-bold">Dark Mode</span>
            </div>
          )}
        </button>
      </div>
      
              </li>
              <hr />
              <li
                className="animate-zoom-in cursor-pointer"
                onClick={() => {
                  onComponentSelect("Calculator");
                  closeMenu();
                }}
              >
                <a className="flex items-center py-3 px-3 text-[20px] text-white rounded-lg hover:bg-gray-700 group">
                  {" "}
                  <i className=" fa-solid fa-calculator"></i>
                  <span className="pl-5">Calculator</span>
                </a>
              </li>

              <li
                className="animate-zoom-in cursor-pointer"
                onClick={() => {
                  onComponentSelect("Length");
                  closeMenu();
                }}
              >
                <a className="flex items-center py-3 px-3 text-[20px] text-white rounded-lg hover:bg-gray-700 group">
                  {" "}
                  <i className=" fa-solid fa-ruler"></i>
                  <span className="pl-5">Length</span>
                </a>
              </li>

              <li
                className="animate-zoom-in cursor-pointer"
                onClick={() => {
                  onComponentSelect("Area");
                  closeMenu();
                }}
              >
                <a className="flex items-center py-3 px-3 text-[20px] text-white rounded-lg hover:bg-gray-700 group">
                  <i className=" fa-regular fa-square"></i>
                  <span className="pl-5">Area</span>
                </a>
              </li>

              <li
                className="animate-zoom-in cursor-pointer"
                onClick={() => {
                  onComponentSelect("Volume");
                  closeMenu();
                }}
              >
                <a className="flex items-center py-3 px-3 text-[20px] text-white rounded-lg hover:bg-gray-700 group">
                  <i className=" fa-solid fa-cube"></i>
                  <span className="pl-5">volume</span>
                </a>
              </li>

              <li
                className="animate-zoom-in cursor-pointer"
                onClick={() => {
                  onComponentSelect("Weight");
                  closeMenu();
                }}
              >
                <a className="flex items-center py-3 px-3 text-[20px] text-white rounded-lg hover:bg-gray-700 group">
                  <i className=" fa-solid fa-scale-balanced"></i>
                  <span className="pl-5">Weight</span>
                </a>
              </li>

              <li
                className="animate-zoom-in cursor-pointer"
                onClick={() => {
                  onComponentSelect("Temperature");
                  closeMenu();
                }}
              >
                <a className="flex items-center py-3 px-3 text-[20px] text-white rounded-lg hover:bg-gray-700 group">
                  {" "}
                  <i className=" fa-solid fa-temperature-three-quarters"></i>
                  <span className="pl-5">Temperature</span>
                </a>
              </li>
              <li
                className="animate-zoom-in cursor-pointer"
                onClick={() => {
                  onComponentSelect("Speed");
                  closeMenu();
                }}
              >
                <a className="flex items-center py-3 px-3 text-[20px] text-white rounded-lg hover:bg-gray-700 group">
                  {" "}
                  <i className=" fa-solid fa-gauge-high"></i>
                  <span className="pl-5">Speed</span>
                </a>
              </li>
              <li
                className="animate-zoom-in cursor-pointer"
                onClick={() => {
                  onComponentSelect("Pressure");
                  closeMenu();
                }}
              >
                <a className="flex items-center py-3 px-3 text-[20px] text-white rounded-lg hover:bg-gray-700 group">
                  {" "}
                  <i className=" fa-solid fa-stopwatch"></i>
                  <span className="pl-5">Pressure</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;

/*

 <button onClick={toggleDot}>
          <i className="fa-solid fa-ellipsis-vertical text-2xl"></i>
        </button>
        {isDotOpen && (
          <div className="dott">
            <ul>
              <li className="animate-zoom-in">
                <a className="flex items-center py-[8.5px] px-3 text-[15px] text-white rounded-lg hover:bg-gray-700 group">
                  <i className="fa-solid fa-moon"></i>
                  <span className="pl-5 font-semibold">Night Mode</span>
                </a>
              </li>

              <li className="animate-zoom-in">
                <a className="flex items-center py-[8.5px] px-3 text-[15px] text-white rounded-lg hover:bg-gray-700 group">
                  <i className="fa-solid fa-sun"></i>
                  <span className="pl-5 font-semibold">Night Mode</span>
                </a>
              </li>
            </ul>
          </div>
        )}


         <div className="grid grid-flow-col border-2  ">
                  <span className="text-lg">White</span>
                  <span className="fa-solid fa-sun  text-lg my-auto"></span>
                </div>
                <div className="grid grid-flow-col border-2  ">
                  <span className="fa-solid fa-moon text-lg my-auto"></span>
                  <span className="text-lg">Dark</span>
                </div>
*/
