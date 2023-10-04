import React, { useState, useEffect } from "react";
import * as math from "mathjs";
import Keys from "./Keys";
import Display from "./Display";
import History from "./History";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = math.evaluate(expression);
        setAnswer(result.toString());
        setShowAnswer(true);
        setHistory((prevHistory) => [
          ...prevHistory,
          { expression, answer: result.toString() },
        ]);
      } catch (error) {
        setAnswer("Error");
        setShowAnswer(true);
      }
    } else if (value === "C") {
      setExpression("");
      setAnswer("");
      setShowAnswer(false);
    } else if (value === "D") {
      setExpression((prevExpression) => prevExpression.slice(0, -1));
      setShowAnswer(false);
    } else if (/[+\-*/%]/.test(value) || /[0-9.]/.test(value)) {
      if (showAnswer) {
        setExpression(answer + value);
        setAnswer("");
        setShowAnswer(false);
      } else {
        setExpression((prevExpression) => prevExpression + value);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent the form submission
        if (expression) {
          handleButtonClick("=");
        }
      } else {
        const key = event.key;

        const keyMapping = {
          Escape: "C",
          Backspace: "D",
          "+": "+",
          "-": "-",
          "*": "*",
          "/": "/",
          "%": "%",
          0: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          ".": ".",
          "=": "=",
        };

        if (keyMapping[key]) {
          handleButtonClick(keyMapping[key]);
          event.preventDefault();
        }
      }
    };

    // Add the event listener for keydown events
    window.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="calculator">
      <Display
        expression={expression}
        answer={answer}
        showAnswer={showAnswer}
        history={history}
      />
      <History
        expression={expression}
        answer={answer}
        showAnswer={showAnswer}
        history={history}
      />
      <Keys onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;

/* <Menu 
expression={expression}
answer={answer}
showAnswer={showAnswer}
history={history}
/> */
