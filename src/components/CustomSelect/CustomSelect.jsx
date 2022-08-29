import React from 'react';

import s from './CustomSelect.module.css';

export default function CustomSelect({valueSelected, values, handleValue}) {

  let [ showOptions, setShowOptions ] = React.useState(false);

  let handleOpenSelect = function() {
    setShowOptions(!showOptions);
  }

  let handlePickOption = function(value) {
    handleValue(value);
    setShowOptions(false);
  }

  return (
    <div className = {s.containerGlobal}>
      <div className = {s.container} onClick = {handleOpenSelect}>
        <div className = {s.selectSelectedZone}>
          <span className = {s.selectSelected}>{valueSelected}</span>
          <div className = {`${s.triangle} ${showOptions ? s.open : ''}`}></div>
        </div>
      </div>
      <div className = {`${s.selectOptionsZone} ${showOptions ? s.showOptions : ''}`}>
        <div className = {s.optionsContainer}>
          {
            values && values.length > 0 && values.map((value, index) => 
              <span
                className = {s.selectOption}
                onClick = {() => handlePickOption(value)}
                key = {`select-option-${value}-${index}`}
              >
                {value}
              </span>
            )
          }
        </div>
      </div>
      {
        showOptions &&
        <div className = {s.helperCloseOptions} onClick = {handleOpenSelect}></div>
      }
    </div>
  );
}