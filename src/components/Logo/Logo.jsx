import React from "react";
import logo from './logo.png';

import s from './Logo.module.css';

export default function Logo({ isInNavbar = false }) {
  return (
    <div className = {`${s.container} ${isInNavbar ? s.showOnNavbar : ''}`}>
      <div className = {s.imageContainer}>
        <img src = {logo} alt = {"Bugs Hunter Hall Of Fame"} className = {s.logo} />
      </div>
      <span className = {s.spanLogoTitle}>Bugs Hunters ©</span>
      <div className = {s.spanLogoSubTitle}>Hall of Fame</div>
    </div>
  );
}