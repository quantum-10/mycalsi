import React, { useState } from 'react';

function Temperature ()  {
    const [inputValue, setInputValue] = useState(0); // Temperature value to convert
  const [fromUnit, setFromUnit] = useState('celsius'); // Convert from Celsius by default
  const [toUnit, setToUnit] = useState('fahrenheit'); // Convert to Fahrenheit by default
  const [convertedValue, setConvertedValue] = useState(0); // Converted temperature

  const convertTemperature = () => {
    if (fromUnit === toUnit) {
      setConvertedValue(inputValue);
      return;
    }

    let result;
    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        result = (inputValue * 9/5) + 32;
      } else if (toUnit === 'kelvin') {
        result = inputValue + 273.15;
      }
    } else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        result = (inputValue - 32) * 5/9;
      } else if (toUnit === 'kelvin') {
        result = ((inputValue - 32) * 5/9) + 273.15;
      }
    } else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        result = inputValue - 273.15;
      } else if (toUnit === 'fahrenheit') {
        result = ((inputValue - 273.15) * 9/5) + 32;
      }
    }

    setConvertedValue(result.toFixed(2));
  };

  return (
    <>
    <div className="area-converter mt-6">
      <h2 className='text-[25px] text-gray-400 '>Temperature Conversion</h2>
      <div className='mt-5 '>
        <input
          type="number"
          value={inputValue}  
           onChange={(e) => setInputValue(e.target.value)}
          placeholder='0'
          className='bg-transparent text-white mb-3 pl-2 w-full'
        />
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className='bg-gray-500 pt-2 pb-2 mb-3 '
        >
          <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
          
        </select>
      </div>
      <div className=''>
        <input
          type="text"
          value={convertedValue}
          readOnly
          placeholder='0'
          className='bg-transparent text-white mb-3 pl-2 w-full'
        />
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className='bg-gray-500 pt-2 pb-2 mb-3'
        >
          <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
        </select>
      </div>
      <button className='bg-gray-500 text-gray-800 font-bold p-2 rounded-sm hover:bg-white hover:text-black' onClick={convertTemperature}>Convert</button>

      <p className='text-lg text-white mt-6 max-w-[318px] overflow-x-auto w-[318px]'>
        {inputValue} {fromUnit} is approximately {convertedValue} {toUnit}
      </p>
    </div>

   

    </>

  );
};

export default Temperature;
