import React, { useState } from "react";

function Length() {
  const [inputValue, setInputValue] = useState(1); // Length value to convert
  const [fromUnit, setFromUnit] = useState("meters"); // Convert from meters by default
  const [toUnit, setToUnit] = useState("feet"); // Convert to feet by default
  const [convertedValue, setConvertedValue] = useState(); // Converted length

  // Conversion factors for various length units (in meters)
  const unitConversion = {
    Meters: 1,
    Feet: 3.28084,
    Yards: 1.09361,
    Miles: 0.000621371,
    Kilometers: 0.001,
    Centimeters: 100,
    Millimeters: 1000,
    Inches: 39.3701,
    Nauticalmiles: 0.000539957,
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  const convertLength = () => {
    const valueInMeters = inputValue / unitConversion[fromUnit];
    const convertedLength = valueInMeters * unitConversion[toUnit];
    setConvertedValue(convertedLength.toFixed(4));
  };

  return (
    <>
      <div className="length-converter mt-6">
        <h2 className="text-[25px] text-gray-400 ">Length Conversion</h2>
        <div className="mt-5 ">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter Input"
            className="bg-transparent text-white mb-3 pl-2 w-full"
          />
          <select
            value={fromUnit}
            onChange={handleFromUnitChange}
            className="bg-gray-500 pt-2 pb-2 mb-3 "
          >
            {Object.keys(unitConversion).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <input
            type="text"
            value={convertedValue || ""}
            readOnly
            placeholder="0"
            className="bg-transparent text-white mb-3 pl-2 w-full "
          />
          <select
            value={toUnit}
            onChange={handleToUnitChange}
            className="bg-gray-500 pt-2 pb-2 mb-3"
          >
            {Object.keys(unitConversion).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-gray-500 text-gray-800 font-bold p-2 rounded-sm hover:bg-white hover:text-black"
          onClick={convertLength}
        >
          Convert
        </button>

        <p className="text-lg text-white mt-6 max-w-[318px] overflow-x-auto w-[318px]">
          {inputValue} {fromUnit} is approximately {convertedValue} {toUnit}
        </p>
      </div>
    </>
  );
}

export default Length;
