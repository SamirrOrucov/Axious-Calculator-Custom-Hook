import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [answer, setAnswer] = useState("");

  function add() {
    if (isNaN(number1) || isNaN(number2)) {
      setAnswer("Sadece reqem daxil edin!");
    } else {
      let sum = number1 + number2;
      return setAnswer(sum);
    }
  }
  function sub() {
    if (isNaN(number1) || isNaN(number2)) {
      setAnswer("Sadece reqem daxil edin!");
    } else {
      let sum = number1 - number2;
      return setAnswer(sum);
    }
  }
  function mul() {
    if (isNaN(number1) || isNaN(number2)) {
      setAnswer("Sadece reqem daxil edin!");
    } else {
      let sum = number1 * number2;
      return setAnswer(sum);
    }
  }
  function dev() {
    if (isNaN(number1) || isNaN(number2)) {
      setAnswer("Sadece reqem daxil edin!");
    } else {
      if (number2 === 0) {
        setAnswer("0a bolmek olmaz");
      } else {
        let sum = number1 / number2;
        return setAnswer(sum);
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="input">
          <input
            type="text"
            name=""
            id=""
            placeholder="enter num1"
            onChange={(e) => setNumber1(parseInt(e.target.value))}
          />
          <input
            type="text"
            placeholder="enter num2"
            onChange={(e) => setNumber2(parseInt(e.target.value))}
          />
        </div>
        <div className="buttons">
          <button onClick={add}>+</button>
          <button onClick={sub}>-</button>
          <button onClick={dev}>/</button>
          <button onClick={mul}>*</button>
        </div>
        <div className="answer">
          <span>{answer}</span>
        </div>
      </div>
    </>
  );
}

export default App;
