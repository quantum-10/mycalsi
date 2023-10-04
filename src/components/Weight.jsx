import React, { useState } from 'react';

function Weight ()  {
    const [inputValue, setInputValue] = useState(1); // Weight value to convert
  const [fromUnit, setFromUnit] = useState('kilograms'); // Convert from kilograms by default
  const [toUnit, setToUnit] = useState('pounds'); // Convert to pounds by default
  const [convertedValue, setConvertedValue] = useState(); // Converted weight

  const unitConversion = {
    kilograms: 1,
    grams: 1000,
    milligrams: 1000000,
    pounds: 2.20462,
    ounces: 35.274,
    tonnes: 0.001,
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

  const convertWeight = () => {
    const valueInKilograms = inputValue / unitConversion[fromUnit];
    const convertedWeight = valueInKilograms * unitConversion[toUnit];
    setConvertedValue(convertedWeight.toFixed(4));
  };

 
  

  return (
    <>
    <div className="area-converter mt-6">
      <h2 className='text-[25px] text-gray-400 '>Weight Conversion</h2>
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
      <button className='bg-gray-500 text-gray-800 font-bold p-2 rounded-sm hover:bg-white hover:text-black' onClick={convertWeight}>Convert</button>

      <p className='text-lg text-white mt-6 max-w-[318px] overflow-x-auto w-[318px]'>
        {inputValue} {fromUnit} is approximately {convertedValue} {toUnit}
      </p>
    </div>

   

    </>

  );
};

export default Weight;
