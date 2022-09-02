import React from 'react';
import SearchPlayer from '../SearchPlayer/SearchPlayer';
import Logo from '../Logo/Logo';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import ModalPickOption from '../ModalPickOption/ModalPickOption';
import { listOfUsers } from '../../lib/userModel';

import s from './NavBar.module.css';

export default function NavBar() {

  const [ showOptions, setShowOptions ] = React.useState(false);
  const onePlayer = listOfUsers[0];

  let handleClick = function() {
    setShowOptions(!showOptions)
  }

  let handlePickOption = function(value) {
    console.log(value);
  }

  return (
    <div className = {s.container}>
      <SearchPlayer />
      <Logo isInNavbar = {true} />
      <div className = {s.navbarOptions}>
        {
          true && 
          <PlayerIcon
            avatar = {onePlayer.avatar}
            nickname = {onePlayer.nickname}
            minimize = {false}
            showNickName = {true}
            handleClick = {handleClick}
          />
        }
        {
          false &&
          <div className = {s.containerLogin}>
            <button className = {s.btnDetails}>LOGIN</button>
          </div>
        }
      </div>
      <ModalPickOption 
        style = {s.modalPickOptionStyle}
        values = {["View Profile", "Edit Profile", "Logout"]}
        show = {showOptions}
        handleClose = {handleClick}
        handlePickOption = {handlePickOption}
      />
    </div>
  )
}