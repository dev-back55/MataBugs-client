import React from 'react';
import Loading from '../SVG/Loading';

import s from './ShowLoading.module.css';

export default function ShowLoading({ message = "Loading" }) {
  return (
    <div className = {s.container}>
      <div className = {s.loadingContainer}>
        <Loading />
      </div>
      <span className = {s.spanMessage}>{message}</span>
    </div>
  );
}