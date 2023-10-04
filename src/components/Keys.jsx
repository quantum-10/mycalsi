import React from "react";

function Keys({ onButtonClick }) {
  const buttonValues = [
    "C",
    "%",
    "D",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {buttonValues.map((value, index) => (
        <button
          className="text-2xl h-12 rounded-[3px] border-2 border-[#3B444B] bg-[#414A4C] font-bold text-white transform active:scale-75 transition-transform"
          onClick={() => onButtonClick(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Keys;


