import React from 'react';
import ImageLoader from '../ImageLoader/ImageLoader';

import s from './PlayerIcon.module.css';

export default function PlayerIcon({ avatar, nickname, minimize = true }) {
  return (
    <div className = {`${s.container} ${!minimize ? s.large : ''}`}>
      <ImageLoader image = {avatar} alt = {nickname} />
    </div>
  );
}