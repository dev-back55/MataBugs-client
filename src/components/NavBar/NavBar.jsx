import React from 'react';
import SearchPlayer from '../SearchPlayer/SearchPlayer';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import ModalPickOption from '../ModalPickOption/ModalPickOption';
import { logoutPlayer } from '../../redux/action/playerDetailsActions';
import { Link } from 'react-router-dom';
// import { listOfUsers } from '../../lib/userModel';

import s from './NavBar.module.css';

export default function NavBar() {

  const [ showOptions, setShowOptions ] = React.useState(false);
  const loginPlayer  = useSelector(state => state.player.player.player); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  // const onePlayer = listOfUsers[0];

  let handleClick = function() {
    setShowOptions(!showOptions)
  }

  let handlePickOption = function(value) {
    console.log(value);
    if(value === "Logout") { dispatch(logoutPlayer()) }
    if(value === "View Profile") { navigate(`/player/${loginPlayer.id}`) }
    
  }

  return (
    <div id="componentNavBar" className = {s.container}>
      <SearchPlayer />
      <Logo isInNavbar = {true} />
      <div className = {s.navbarOptions}>
        {
          loginPlayer && 
          <PlayerIcon
            avatar = {loginPlayer.avatar}
            nickname = {loginPlayer.nickname}
            minimize = {false}
            showNickName = {true}
            handleClick = {handleClick}
          />
        }
        {
          !loginPlayer &&
          <div className = {s.containerLogin}>
            <Link to="/login"><button name="buttonLoginNavbar" className = {s.btnDetails}>LOGIN</button></Link>
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