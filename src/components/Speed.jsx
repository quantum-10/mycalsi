import React, { useState } from 'react';

function Speed ()  {
    const [inputValue, setInputValue] = useState(0); // Speed value to convert
  const [fromUnit, setFromUnit] = useState('meterspersecond'); // Convert from meters per second by default
  const [toUnit, setToUnit] = useState('kilometersperhour'); // Convert to kilometers per hour by default
  const [convertedValue, setConvertedValue] = useState(0); // Converted speed

  // Conversion factors for various speed units
  const unitConversion = {
    meterspersecond: 1,
    kilometersperhour: 3.6,
    feetpersecond: 3.28084,
    milesperhour: 2.23694,
    knots: 1.94384,
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

  const convertSpeed = () => {
    if (fromUnit === toUnit) {
        setConvertedValue(inputValue);
        return;
      }
  
      const result = inputValue * (unitConversion[toUnit] / unitConversion[fromUnit]);
      setConvertedValue(result.toFixed(4));
  };

 
  

  return (
    <>
    <div className="area-converter mt-6">
      <h2 className='text-[25px] text-gray-400 '>Speed Conversion</h2>
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
      <button className='bg-gray-500 text-gray-800 font-bold p-2 rounded-sm hover:bg-white hover:text-black' onClick={convertSpeed}>Convert</button>

      <p className='text-lg text-white mt-6 max-w-[318px] overflow-x-auto w-[318px]'>
        {inputValue} {fromUnit} is approximately {convertedValue} {toUnit}
      </p>
    </div>

   

    </>

  );
};

export default Speed;
