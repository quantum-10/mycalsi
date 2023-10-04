import React, { useState,  } from "react";
import "./Menu.css";

function History({ expression, answer, showAnswer }) {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [history, setHistory] = useState([]); // Move history state here

  const toggleHistory = () => {
    setIsHistoryOpen((prevState) => !prevState);
  };
  const closeHistory = () => {
    setIsHistoryOpen((prevState) => !prevState);
  };
  return (
    <>
      <button onClick={toggleHistory}>
        <span className="text-xl font-bold text-gray-400 pr-3">Histort</span>
        <i className="fa-solid fa-clock-rotate-left text-xl text-gray-400 font-bold"></i>
      </button>
      {isHistoryOpen && (
        <div className="history">
          <div className="flex">
            <span className="text-[30px] text-white">History:</span>
            <span
              className="ml-auto text-[30px] text-yellow-500 cursor-pointer pr-2"
              onClick={toggleHistory}
            >
              <i class="fa-solid fa-circle-xmark"></i>
            </span>

          </div>

          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.expression} = {item.answer}
              </li>
            ))}
          </ul>

        </div>
      )}
    </>
  );
}

export default History;
