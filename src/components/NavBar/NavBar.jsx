import React from 'react';
import SearchPlayer from '../SearchPlayer/SearchPlayer';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import { listOfUsers } from '../../lib/userModel';

import s from './NavBar.module.css';

export default function NavBar() {

  const onePlayer = listOfUsers[0];

  return (
    <div className = {s.container}>
      <SearchPlayer />
      {
        false && <PlayerIcon avatar = {onePlayer.avatar} nickname = {onePlayer.nickname} minimize = {false}/>
      }
      {
        true && <button className = {s.btnDetails}>LOGIN</button>
      }
    </div>
  )
}