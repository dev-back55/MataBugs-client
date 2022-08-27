import React from 'react';
import ImageLoader from '../ImageLoader/ImageLoader';
import Ribbon from '../SVG/Ribbon';

import { chooseColor } from '../../lib/util';

import s from './Card.module.css';

export default function Card({ id, nickname, status, ranking, avatar }) {
  return (
    <div className = {`${s.cardContainer} ${s.gradientBorder}`}>
      <div className = {s.imageContainer}>
        <ImageLoader image = {avatar} alt = {nickname} />
      </div>
      <div className = {s.detailsContainer}>
        <span className = {s.title}>{nickname}</span>
        <span className = {s.subTitle} style = {{color: chooseColor(status)}}>{status}</span>
        <div className = {s.containerRibbon}>
          <Ribbon status = {status}/>
        </div>
        <span className = {s.info}>ID: {id}</span>
        <span className = {s.info}>Ranking: {ranking}</span>
        <button className = {s.btnDetails}>Details</button>
      </div>
    </div>
  );
}