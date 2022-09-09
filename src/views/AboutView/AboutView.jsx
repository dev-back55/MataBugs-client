import React from 'react';
import { detailabout, developers } from '../../lib/constants';
import CardDeveloper from '../../components/CardDeveloper/CardDeveloper';

import s from './AboutView.module.css';

export default function AboutView() {

  return (
    <>
      <div id="componentAbout" className = {s.container}>
        <h1 className={s.titleAbout}>{detailabout.title}<i className = {s.copyright}>©</i></h1>
        <h2 className={s.textAbout}>{detailabout.description}</h2>
        <h2 className={s.titleAbout}>Game Images: </h2>
        {
          detailabout && detailabout.img && detailabout.img.map((e, index) =>
            <img className={s.imgenAbout} src={e} key = {`screenshot-about-${index}`}/>
          )
        }
      </div>

      <h1 className={s.titleAbout}>Developers: </h1>

      <div className = {s.cardsContainer}>
        {
          developers && developers.map(developer => 
            <CardDeveloper 
              key = {developer.key}
              id = {developer.id}
              name = {developer.name}
              linkedin = {developer.linkedin}
              github = {developer.github}
              email = {developer.email}
              img = {developer.img}
            />
          )
        }
      </div>
    </>
  );
}