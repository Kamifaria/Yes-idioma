import React from "react";
import style from "./styles.module.css";
function RadioInput({ options, selectedOption, onChange, title }) {
  return (
    <div className={style.radioButtonContainer}>
      <h4>{title}</h4>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            value={option.value}
            checked={selectedOption === option.value}
          />
          <label htmlFor={option.value} onClick={() => onChange(option.value)}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioInput;
