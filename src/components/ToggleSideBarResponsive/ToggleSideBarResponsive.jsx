import React from 'react';
import Filter from '../SVG/Filter';

import s from './ToggleSideBarResponsive.module.css';

export default function ToggleSideBarResponsive({ show, handler }) {

  return (
    <>
    {
      !show &&
      <button className = {s.btnShowSidebarResponsive} onClick = {handler}>
        <Filter />
        <span className = {s.spanInfo}>Options</span>
      </button>
    }
    </>
  );
}