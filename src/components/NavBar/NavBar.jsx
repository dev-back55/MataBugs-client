import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SearchPlayer from '../SearchPlayer/SearchPlayer';
import Logo from '../Logo/Logo';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import ModalPickOption from '../ModalPickOption/ModalPickOption';
import { logoutPlayer } from '../../redux/action/PlayerLogActions';

import s from './NavBar.module.css';

export default function NavBar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { player, success } = useSelector((state) => state.player);
  const [ showOptions, setShowOptions ] = React.useState(false);

  React.useEffect(() => {
    if (success && (!player || !player.player)) {
      alert('logout');
      navigate('/home');
    }
  }, [player, success]);

  let handleClick = function() {
    setShowOptions(!showOptions);
  }

  let handlePickOption = function(optionPicked) {
    switch (optionPicked) {
      case "View Profile":
        break;
      case "Edit Password":
        navigate('/updatepassword');
        break;
      default:
        dispatch(logoutPlayer());
    }
    setShowOptions(false);
  }

  return (
    <div className = {s.container}>
      <SearchPlayer />
      <Logo isInNavbar = {true} />
      <div className = {s.navbarOptions}>
        {
          player && player.player && 
          <PlayerIcon
            avatar = {player.player.avatar}
            nickname = {player.player.nickname}
            minimize = {false}
            showNickName = {true}
            handleClick = {handleClick}
          />
        }
        {
          (!player || !player.player) && 
          <Link to = '/login' style = {{textDecoration: 'none'}}>
            <div className = {s.containerLogin}>
              <button className = {s.btnDetails}>SIGN IN</button>
            </div>
          </Link>
        }
      </div>
      <ModalPickOption 
        style = {s.modalPickOptionStyle}
        values = {["View Profile", "Edit Password", "Logout"]}
        show = {showOptions}
        handleClose = {handleClick}
        handlePickOption = {handlePickOption}
      />
    </div>
  )
}