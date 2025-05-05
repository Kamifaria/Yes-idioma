import React from "react";
import style from "./Input.module.css";

function InputTexto({ value, onChange, placeholder, ...restProps }) {
  return (
    <input
      className={style.containerInput}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...restProps}
    />
  );
}

export default InputTexto;
