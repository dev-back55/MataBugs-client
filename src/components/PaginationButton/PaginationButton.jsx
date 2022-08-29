import React from 'react';

import s from './PaginationButton.module.css';

export default function PaginationButton({ disabled, handler, reverse = false }) {
  return (
    <div className = {s.container} onClick = {handler} disabled = {disabled}>
      <div className = {`${s.triangle} ${reverse ? s.reverse : ''}`}></div>
    </div>
  );
}