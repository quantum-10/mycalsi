import React from 'react';
function Display ({ expression, answer, showAnswer, history }) {
    return (
      <div className='w-full h-[135px] my-3  flex flex-col justify-center pr-3 items-end  text-white'>      
        <div className='w-full h-[135px] my-3  flex flex-col justify-center pr-3 items-end  text-white overflow-hidden'>
            <h1 className='pb-10 text-4xl'>{expression}</h1>
            {showAnswer && <p className='text-3xl text-orange-500 font-bold'>{answer}</p>}
        </div>

       

      </div>
    )
}
export default Display
