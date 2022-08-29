import React from 'react';
import Crown from '../SVG/Crown';

import s from './HallOfFameHeader.module.css';

export default function HallOfFameHeader({ first, second, third }) {
  return (
    <div className = {s.container}>
      <div className = {s.containerCrown}>
        <Crown opacity={1}/>
      </div>
      <div className = {s.containerThirdPlace}>
        <img src = {third} alt = {"third-place"} className = {s.avatar}/>
      </div>
      <div className = {s.containerThirdPlaceNumber}>
        3
      </div>
      <div className = {s.containerFirstPlace}>
        <img src = {first} alt = {"first-place"} className = {s.avatar}/>
      </div>
      <div className = {s.containerFirstPlaceNumber}>
        1
      </div>
      <div className = {s.containerSecondPlace}>
        <img src = {second} alt = {"second-place"} className = {s.avatar}/>
      </div>
      <div className = {s.containerSecondPlaceNumber}>
        2
      </div>
    </div>
  );
}