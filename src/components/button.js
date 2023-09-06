import React from "react";
import {
  FiChevronUp,
  FiChevronsUp,
  FiRotateCcw,
  FiHash,
  FiChevronDown,
  FiChevronsDown,
} from "react-icons/fi";
import {
  handleAdd1,
  handleAdd10,
  handleReset,
  handleSubtract1,
  handleSubtract10,
  handleRandom,
} from "./handles";
import "../styles/button.css";

const Buttons = ({ count, setCount }) => {
  return (
    <div className="button-container">
      <div className="button-wrapper">
        <div
          className="button-icon"
          onClick={()=> handleAdd1({ count, setCount })}
          onKeyDown={()=>handleAdd1({ count, setCount })}
          tabIndex={0}
          role="button"
        >
          <FiChevronUp />
        </div>
        <div
          className="button-icon"
          onClick={()=> handleAdd10({ count, setCount })}
          onKeyDown={()=> handleAdd10({ count, setCount })}
          tabIndex={0}
          role="button"
        >
          <FiChevronsUp />
        </div>

        <div
          className="button-icon"
          onClick={()=> handleReset({ count, setCount })}
          onKeyDown={()=> handleReset({ count, setCount })}
          tabIndex={0}
          role="button"
        >
          <FiRotateCcw />
        </div>

        <div
          className="button-icon"
          onClick={()=> handleRandom({ count, setCount })}
          onKeyDown={()=> handleRandom({ count, setCount })}
          tabIndex={0}
          role="button"
        >
          <FiHash />
        </div>
        <div
          className="button-icon"
          onClick={()=> handleSubtract10({ count, setCount })}
          onKeyDown={()=> handleSubtract10({ count, setCount })}
          tabIndex={0}
          role="button"
        >
          <FiChevronsDown />
        </div>
        <div
          className="button-icon"
          onClick={()=> handleSubtract1({ count, setCount })}
          onKeyDown={()=> handleSubtract1({ count, setCount })}
          tabIndex={0}
          role="button"
        >
          <FiChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
