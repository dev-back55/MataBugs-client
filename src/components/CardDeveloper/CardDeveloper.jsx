import React from 'react';
import ImageLoader from '../ImageLoader/ImageLoader';
import Linkedin from '../SVG/Linkedin';
import Github from '../SVG/Github';
import Email from '../SVG/Email';

import s from './CardDeveloper.module.css';

export default function CardDeveloper({ id, name, linkedin, github, email, img }) {

  let handleClick = function(link) {
    window.open(link, '_blank');
  }

  let handleClickEmail = function() {
    window.open(email);
  }
  
  return (
    <div className = {`${s.cardContainer} ${s.gradientBorder}`}>
      <div className = {s.imageContainer}>
        <ImageLoader image = {img} alt = {name} />
      </div>
      <div className = {s.detailsContainer}>
        <span className = {`${s.title}`}>{name}</span>
        <div className = {s.containerRibbon}>
          <div className = {`${s.containerLink} ${s.linkedin}`} onClick = {() => handleClick(linkedin)}>
            <Linkedin />
          </div>
          <div className = {`${s.containerLink} ${s.email}`} onClick = {handleClickEmail}>
            <Email />
          </div>
          <div className = {`${s.containerLink} ${s.github}`} onClick = {() => handleClick(github)}>
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
}