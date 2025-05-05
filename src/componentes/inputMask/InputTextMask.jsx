import React from 'react';
import style from './Input.module.css';
import InputMask from 'react-input-mask';

function InputTextMask({ value, onChange, placeholder, mask, ...restProps }) {
    return (
        /* <input
            className={style.containerInput}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...restProps}
        /> */
        <>
            <InputMask
            className={style.containerInput}
            mask={mask}
            type='text'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...restProps}
      />
        </>
    );
}

export default InputTextMask;
