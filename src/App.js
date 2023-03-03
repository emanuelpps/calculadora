import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");

  const handleClick = (e) => {
    const value = e.target.name;
    console.log(value + " is clicked");

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperator(value);
      setFirstNumber(result);
      setResult("");
    } else if (value === "=") {
      setSecondNumber(result);
      calculateResult();
    } else if (value === "DEL") {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + value);
    }
  };

  const calculateResult = () => {
    let finalResult = "";
  
    if (firstNumber !== "" && secondNumber !== "") {
      if (operator === "+") {
        finalResult = parseFloat(firstNumber) + parseFloat(secondNumber);
      } else if (operator === "-") {
        finalResult = parseFloat(firstNumber) - parseFloat(secondNumber);
      } else if (operator === "*") {
        finalResult = parseFloat(firstNumber) * parseFloat(secondNumber);
      } else if (operator === "/") {
        finalResult = parseFloat(firstNumber) / parseFloat(secondNumber);
      }
  
      setResult(finalResult.toString());
      setFirstNumber("");
      setSecondNumber("");
      setOperator("");
    }
  };

  const createDigits = () =>{
    const digits = [];
     for (let i=1; i < 10; i++ ){
      digits.push(
        <button key={i} onClick={handleClick} name={i}>{i}</button>
      )
     }
     return digits;
  }
  
  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          <span>({result})</span>{result === "" ? 0 : result}
          </div>
          <div className='operators'>
            <button name="/" onClick={handleClick}>/</button>
            <button name="*" onClick={handleClick}>*</button>
            <button name="+" onClick={handleClick}>+</button>
            <button name="-" onClick={handleClick}>-</button>
            <button name="DEL" onClick={handleClick}>DEL</button>
          </div>
          <div className='digits'>
          { createDigits() }
            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button name="=" onClick={handleClick}>=</button>
          </div>
        </div>
      </div>
  );
}

export default App;
