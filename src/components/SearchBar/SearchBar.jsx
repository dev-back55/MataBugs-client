import React from 'react';
import Search from '../SVG/Search';
import Loading from '../SVG/Loading';

import s from './SearchBar.module.css';

export default function SearchBar({ value, handleValue, handleSearch, disabled }) {

  let handleInput = function(e) {
    const { value: newValue } = e.target;
    handleValue(newValue);
  }

  let handleClick = function() {
    if (!disabled) handleSearch();
  }

  return (
    <div className = {`${s.container}`} >
      <input
        value = {value}
        onChange = {handleInput}
        className = {s.inputStyle}
        placeholder = {"Search by ID, nickname or status"}
        disabled = {disabled}
      />
      <div className = {`${s.searchContainer} ${disabled ? s.rotate : ''}`} onClick = {handleClick}>
      {
        !disabled && <Search />
      }
      {
        disabled && <Loading />
      }
      </div>
    </div>
  );
}