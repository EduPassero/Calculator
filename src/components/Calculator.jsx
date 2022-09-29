import React from "react";
import { useState } from "react";
import "./Calculator.css";
export default function Calculator(){

    const[num, setNum] = useState(0);
    const[oldNum, setoldNum] = useState("");
    const[history, setHistory] = useState("");
    const[operator, setOperator] = useState("");

    function inputNum(e){
        setNum(num === 0 ? e.target.value : num + e.target.value);
    }

    function clear(){
        setNum(0);
        setoldNum(null);
        setHistory(null);
    }

    function percentual(e){
        setNum(num/100)
    }

    function signChanger(){
        num > 0 ? setNum(-num) : setNum(Math.abs(num));
    }

    function operationHandler(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setoldNum(num);
        setHistory(num + " " + operatorInput);
        setNum(0);
    }

    function calculation(){
        if(operator === "+"){
            setNum(parseFloat(oldNum) + parseFloat(num));//parseFloat avoids concatenation of numbers as strings
            setHistory(history + " " + num + " =");
        }else if(operator === "-"){
            setNum(oldNum - num);
            setHistory(history + " " + num + " =");
        }else if(operator === "X"){
            setNum(oldNum * num);
            setHistory(history + " " + num + " =");
        }else if(operator === "/"){
            setNum(oldNum / num);
            setHistory(history + " " + num + " =");
        }
    }

    return(
            <div className='wrapper'>
                <div className="history">
                    <h3>{history}</h3>
                </div>
                <h1 className="result">{num}</h1>
                <button className="light-gray" onClick={clear}>AC</button>
                <button className="light-gray" onClick={signChanger}>+/-</button>
                <button className="light-gray" onClick={percentual}>%</button>
                <button className="light-gray" value={"/"} onClick={operationHandler}>/</button>

                <button className="gray" value="7" onClick={inputNum}>7</button>
                <button className="gray" value="8" onClick={inputNum}>8</button>
                <button className="gray" value="9" onClick={inputNum}>9</button>
                <button className="cyan" value={"X"} onClick={operationHandler}>X</button>

                <button className="gray" value="4" onClick={inputNum}>4</button>
                <button className="gray" value="5" onClick={inputNum}>5</button>
                <button className="gray" value="6" onClick={inputNum}>6</button>
                <button className="cyan" value={"-"} onClick={operationHandler}>-</button>

                <button className="gray" value="1" onClick={inputNum}>1</button>
                <button className="gray" value="2" onClick={inputNum}>2</button>
                <button className="gray" value="3" onClick={inputNum}>3</button>
                
                <button className="cyan" value={"+"} onClick={operationHandler}>+</button>
                <button className="gray" value="0" onClick={inputNum}>0</button>
                <button className="cyan" value={"."} onClick={inputNum}>,</button>
                <button className="cyan" onClick={calculation}>=</button>
            </div>
    )
}