import React from 'react';
import { detailabout, developers } from '../../lib/constants';
import CardDeveloper from '../CardDeveloper/CardDeveloper';
import s from './About.module.css';

export default function About() {

  return (
  
      <di>
        <div id="componentAbout" className = {s.container}>
          <div >
            <h1 className={s.titleAbout}>{detailabout.title}</h1>
            <h2 className={s.textAbout}>{detailabout.description}</h2>
            <h2 className={s.titleAbout}>Game Images: </h2>
            <h2 >{detailabout.img.map((e) => {
              return <img className={s.imgenAbout} src={e} />
            })}</h2>
            
          </div>
        </div>
        <h1 className={s.titleAbout}>Developers: </h1>
        <div className = {s.cardsContainer}>
            {developers.map((developer) => {
              return <CardDeveloper 
                          key={developer.key}
                          id = {developer.id}
                          name = {developer.name}
                          linkedin = {developer.linkedin}
                          github = {developer.github}
                          email = {developer.email}
                      />
            })}
        </div>

        

      </di>
   
  );
}