import React from 'react';
import avatar from '../../lib/assets/avatar.png'
import ImageLoader from '../ImageLoader/ImageLoader';

import s from './CardDeveloper.module.css';

export default function CardDeveloper({ id, name, linkedin, github, email }) {

  
  return (
    <div className = {`${s.cardContainer} ${s.gradientBorder}`}>
      <div className = {s.imageContainer}>
        <ImageLoader image = {avatar} alt = {name} />
      </div>
      <div className = {s.detailsContainer}>
        <span className = {`${s.title}`}>{name}</span>
        <div className = {s.containerRibbon}>
          <a title={name} href={linkedin} className={s.linksDevelper}>🔧 Linkedin</a><br/>
          <a title={name} href={github} className={s.linksDevelper}>🐱 GitHub</a><br/>
          <a title={name} className={s.linksDevelper}>📨 Contact</a>
        </div>
      </div>
    </div>
  );
}