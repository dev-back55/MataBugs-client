import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SearchPlayer from '../SearchPlayer/SearchPlayer';
import Logo from '../Logo/Logo';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import ModalPickOption from '../ModalPickOption/ModalPickOption';
import { logoutPlayer } from '../../redux/action/PlayerLogActions';
import { enableCreatebyAdmin, clearStoreNewPlayer } from '../../redux/action/createPlayerByAdminActions'


import s from './NavBar.module.css';

export default function NavBar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { player, success } = useSelector((state) => state.player);
  const [ showOptions, setShowOptions ] = React.useState(false);

  React.useEffect(() => {
    if (success && (!player || !player.player)) {
      navigate('/home');
    }
  }, [player, success]);

  let handleClick = function() {
    setShowOptions(!showOptions);
  }

  let handlePickOption = function(optionPicked) {
    switch (optionPicked) {
      case "View Profile":
        navigate(`/player/${player.player.id}`)
        break;
      case "Edit Password":
        navigate('/updatepassword');
        break;
      case "Create Player":
        dispatch(enableCreatebyAdmin());
        navigate('/login');
        break;
      default:
        dispatch(logoutPlayer());
        dispatch(clearStoreNewPlayer());
    }
    setShowOptions(false);
  }

  return (
    <div id="componentNavBar" className = {s.container}>
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
              <button name="buttonLoginNavbar" className = {s.btnDetails}>SIGN IN</button>
            </div>
          </Link>
        }
      </div>
      <ModalPickOption 
        style = {s.modalPickOptionStyle}
        values = {player?.player?.admin === true ? ["View Profile", "Edit Password", "Create Player", "Logout"] : ["View Profile", "Edit Password", "Logout"]}
        show = {showOptions}
        handleClose = {handleClick}
        handlePickOption = {handlePickOption}
      />
    </div>
  )
}