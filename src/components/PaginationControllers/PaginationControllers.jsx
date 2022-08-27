import React from 'react';
import PaginationButton from '../PaginationButton/PaginationButton';

import s from './PaginationControllers.module.css';

export default function PaginationControllers() {
  return (
    <div className = {s.container}>
      <PaginationButton
        disabled = {false}
        handler = {() => console.log("Ok")}
      />
      <PaginationButton
        disabled = {true}
        handler = {() => console.log("Ok")}
        reverse = {true}
      />
    </div>
  );
}