import React from 'react';

import s from './PaginationButton.module.css';

export default function PaginationButton({ disabled, handler, reverse = false }) {

  let handleClick = function() {
    if (!disabled) handler();
  }

  return (
    <div className = {s.container} onClick = {handleClick} disabled = {disabled}>
      <div className = {`${s.triangle} ${reverse ? s.reverse : ''}`}></div>
    </div>
  );
}