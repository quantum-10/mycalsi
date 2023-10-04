import React, { useState } from 'react';

function Pressure ()  {
    const [inputValue, setInputValue] = useState(0); // Pressure value to convert
    const [fromUnit, setFromUnit] = useState('pascals'); // Convert from pascals by default
    const [toUnit, setToUnit] = useState('kilopascals'); // Convert to kilopascals by default
    const [convertedValue, setConvertedValue] = useState(0); // Converted pressure
  
    const unitConversion = {
        pascals: 1,
        kilopascals: 0.001,
        atmospheres: 9.86923e-6,
        psi: 0.00014503773773375,
        bars: 0.00001, // Add bars conversion factor
        mmofmercury: 0.00750062, // Add millimeters of mercury conversion factor
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

  const convertPressure = () => {
    if (fromUnit === toUnit) {
      setConvertedValue(inputValue);
      return;
    }

    const result = inputValue * (unitConversion[toUnit] / unitConversion[fromUnit]);
    setConvertedValue(result.toFixed(6)); // Use more decimal places for precision
  };

 
  

  return (
    <>
    <div className="area-converter mt-6">
      <h2 className='text-[25px] text-gray-400 '>Pressure Conversion</h2>
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
      <button className='bg-gray-500 text-gray-800 font-bold p-2 rounded-sm hover:bg-white hover:text-black' onClick={convertPressure}>Convert</button>

      <p className='text-lg text-white mt-6 max-w-[318px] overflow-x-auto w-[318px]'>
        {inputValue} {fromUnit} is approximately {convertedValue} {toUnit}
      </p>
    </div>

   

    </>

  );
};

export default Pressure;
