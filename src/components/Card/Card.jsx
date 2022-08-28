import React from 'react';
import { useDispatch } from 'react-redux';
import ImageLoader from '../ImageLoader/ImageLoader';
import Ribbon from '../SVG/Ribbon';
import Tag from '../SVG/Tag';
import Trophy from '../SVG/Trophy';

import { getPlayer } from '../../redux/action/playerDetailsActions';
import { chooseColor } from '../../lib/util';

import s from './Card.module.css';

export default function Card({ id, nickname, status, ranking, avatar }) {

  const dispatch = useDispatch();

  let handleClick = function() {
    dispatch(getPlayer({id, nickname, status, ranking, avatar}));
  }

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
        <div className = {s.containerTag}>
          <Tag /> 
        </div>
        <span className = {s.infoId}>ID: {id}</span>
        <div className = {s.containerTrophy}>
          <Trophy /> 
        </div>
        <span className = {s.infoRanking}>{ranking}</span>
        <button className = {s.btnDetails} onClick = {handleClick}>Details</button>
      </div>
    </div>
  );
}