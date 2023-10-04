import React, { useState } from 'react';

function Area ()  {
    const [inputValue, setInputValue] = useState(1); // Area value to convert
    const [fromUnit, setFromUnit] = useState('squaremeters'); // Convert from square meters by default
    const [toUnit, setToUnit] = useState('squarefeet'); // Convert to square feet by default
    const [convertedValue, setConvertedValue] = useState(); // Converted area
  // Conversion factors for various length units (in meters)

    const unitConversion = {
    squaremeters: 1,
    squarefeet: 10.7639,
    squareyards: 1.19599,
    squaremiles: 3.861e-7,
    squarekilometers: 1e-6,
    squarecentimeters: 10000,
    squaremillimeters: 1e+6,
    acres: 0.000247105,
    hectares: 1e-4,
    squareinches: 1550.0031,
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

  const convertArea = () => {
    const valueInSquareMeters = inputValue / unitConversion[fromUnit];
    const convertedArea = valueInSquareMeters * unitConversion[toUnit];
    setConvertedValue(convertedArea.toFixed(4));
  };

 
  

  return (
    <>
    <div className="area-converter mt-6">
      <h2 className='text-[25px] text-gray-400 '>Area Conversion</h2>
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
      <button className='bg-gray-500 text-gray-800 font-bold p-2 rounded-sm hover:bg-white hover:text-black' onClick={convertArea}>Convert</button>

      <p className='text-lg text-white mt-6 max-w-[318px] overflow-x-auto w-[318px]'>
        {inputValue} {fromUnit} is approximately {convertedValue} {toUnit}
      </p>
    </div>

   

    </>

  );
};

export default Area;
