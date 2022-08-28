import React from 'react';
import ImageLoader from '../ImageLoader/ImageLoader';
import Gold from './Gold.png';
import avatar from './avatar.png'; 

import s from './CardDetails.module.css';

export default function CardDetails() {
  return (
    <div className = {s.container}>
      <div className = {s.statusContainer}>
        <img src = {Gold} alt = {"Gold-Medal"} className = {s.medal} />
        <span className = {s.spanStatus}>{"status: oro"}</span>
      </div>
      <div className = {s.detailsContainer}>
        <div className = {s.imageContainer}>
          <ImageLoader image = {avatar} alt = {"Thor"} />
        </div>
        <span className = {s.title}>{"Thor"}</span>
        <div className = {s.infoId}>
          <span>ID</span>
          <span>{2}</span>
        </div>
        <div className = {s.infoRanking}>
          <span>RANKING</span>
          <span>{130173}</span>
        </div>
        <button className = {s.btnDetails}>Editar Perfil</button>
      </div>
    </div>
  );
}