import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ImageLoader from '../ImageLoader/ImageLoader';
import { clearPlayerDetails, getPlayer } from '../../redux/action/playerDetailsActions';
import Gold from './Gold.png';
import Silver from './Silver.png';
import Bronze from './Bronze.png';

import s from './CardDetails.module.css';

const selectMedal = {
  "oro" : Gold,
  "plata" : Silver,
  "bronce": Bronze,
}

export default function CardDetails() {

  const { player } = useSelector(state => state.details);
  const loginPlayer  = useSelector(state => state.player.player);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [ show, setShow ] = React.useState({ avatar: false, medal: false, both: false });

  React.useEffect(() => {
    let playerToLoad = JSON.parse(localStorage.getItem(`PLAYER-${id}`));
    dispatch(getPlayer(playerToLoad));

    return () => {
      dispatch(clearPlayerDetails());
    }
  }, []);

  let handleOnLoadMedal = function() {
    setShow({ ...show, medal: true, both: show.avatar ? true : false });
  }

  let handleOnLoadAvatar = function() {
    setShow({ ...show, avatar: true, both: show.medal ? true : false });
  }

  if (!player) return <span>cargando</span>;

  return (
    <div className = {`${s.container} ${!show.both ? s.hideContainer : '' }`}>
      <div className = {s.statusContainer}>
        <img src = {selectMedal[player.status]} alt = {`MEDALLA-${player.status}`} className = {s.medal} onLoad = {handleOnLoadMedal} />
        <span className = {s.spanStatus}>{`status: ${player.status}`}</span>
      </div>
      <div className = {s.detailsContainer}>
        <div className = {s.imageContainer}>
          <ImageLoader image = {player.avatar} alt = {"Thor"} setImageLoaded = {handleOnLoadAvatar} delay = {0}/>
        </div>
        <span className = {s.title}>{player.nickname}</span>
        <div className = {s.infoId}>
          <span>ID</span>
          <span>{player.id}</span>
        </div>
        <div className = {s.infoRanking}>
          <span>RANKING</span>
          <span>{player.ranking}</span>
        </div>
        {loginPlayer.admin && <button className = {s.btnDetails}>Editar Perfil</button>}
      </div>
    </div>
  );
}