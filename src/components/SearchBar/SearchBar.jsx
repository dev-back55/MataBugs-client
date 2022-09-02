import React from 'react';
import Search from '../SVG/Search';
import Loading from '../SVG/Loading';

import s from './SearchBar.module.css';

export default function SearchBar({ maxLength, value, handleValue, handleSearch, lastSearch, handleReset, disabled }) {

  let handleInput = function(e) {
    const { value: newValue } = e.target;
    handleValue(newValue);
  }

  let handleClick = function() {
    if (!disabled) handleSearch();
  }

  let handleClickReset = function() {
    if (!disabled) handleReset();
  }

  return (
    <div className = {`${s.container} ${lastSearch.length > 0 ? s.containerWithReset : ''}`} >
      <input
        maxLength = {maxLength}
        value = {value}
        onChange = {handleInput}
        className = {s.inputStyle}
        placeholder = {"Search by ID, nickname or status"}
        disabled = {disabled}
      />
      {
        lastSearch.length > 0 &&
        <label className = {s.resetSearch} onClick = {handleClickReset}>Clear '{lastSearch}'</label>
      }
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