import React, { useState } from 'react';

function Volume ()  {
    const [inputValue, setInputValue] = useState(1); // Volume value to convert
  const [fromUnit, setFromUnit] = useState('cubicmeters'); // Convert from cubic meters by default
  const [toUnit, setToUnit] = useState('cubicfeet'); // Convert to cubic feet by default
  const [convertedValue, setConvertedValue] = useState(); // Converted volume
  // Conversion factors for various length units (in meters)

  const unitConversion = {
    cubicmeters: 1,
    cubicfeet: 35.3147,
    cubicyards: 1.30795,
    liters: 1000,
    milliliters: 1000000,
    gallons: 264.172,
    quarts: 1056.69,
    pints: 2113.38,
    cups: 4226.75,
    cubicinches: 61023.7,
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

  const convertVolume = () => {
    const valueInCubicMeters = inputValue / unitConversion[fromUnit];
    const convertedVolume = valueInCubicMeters * unitConversion[toUnit];
    setConvertedValue(convertedVolume.toFixed(4));
  };

 
  

  return (
    <>
    <div className="area-converter mt-6">
      <h2 className='text-[25px] text-gray-400 '>Volume Conversion</h2>
      <div className='mt-5 '>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder='0'
          className='bg-transparent text-white mb-3 pl-2 w-full'
        />
        <select
          value={fromUnit}
          onChange={handleFromUnitChange}
          className='bg-gray-500 pt-2 pb-2 mb-3 '
        >
          {Object.keys(unitConversion).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <div className=''>
        <input
          type="text"
          value={convertedValue || ''}
          readOnly
          placeholder='0'
          className='bg-transparent text-white mb-3 pl-2 w-full'
        />
        <select
          value={toUnit}
          onChange={handleToUnitChange}
          className='bg-gray-500 pt-2 pb-2 mb-3'
        >
          {Object.keys(unitConversion).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <button className='bg-gray-500 text-gray-800 font-bold p-2 rounded-sm hover:bg-white hover:text-black' onClick={convertVolume}>Convert</button>

      <p className='text-lg text-white mt-6 max-w-[318px] overflow-x-auto w-[318px]'>
        {inputValue} {fromUnit} is approximately {convertedValue} {toUnit}
      </p>
    </div>

   

    </>

  );
};

export default Volume;
