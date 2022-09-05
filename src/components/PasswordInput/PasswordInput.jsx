import React from 'react';

import s from './PasswordInput.module.css';

export default function PasswordInput({ title, value, placeholder, errorMsg, viewPassword, disabled , handleOnChange, name, animate }) {
  return (
    <>
      <div className = {s.divLabelInput}>
        {title}
        { errorMsg && <span className = {`${s.danger} ${animate ? s.wobble : ''}`}>{errorMsg}</span> }
      </div>
      <input
        className = {s.inputPassword}
        placeholder = {placeholder}
        type = {viewPassword ? 'text' : 'password'}
        value = {value}
        disabled = {disabled}
        onChange = {handleOnChange}
        name = {name}
      />
    </>
  );
}