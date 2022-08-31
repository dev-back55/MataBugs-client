import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ImageLoader from '../ImageLoader/ImageLoader';
import { clearPlayerDetails, getPlayer, editPlayer } from '../../redux/action/playerDetailsActions';
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

  const { player } = useSelector(state => state.details);  // USUARIO A EDITAR O TARJETA
  console.log(player)
  const loginPlayer  = useSelector(state => state.player.player.player); // USUARIO ACTUAL O ADMINISTRADOR
  console.log(loginPlayer)
  const dispatch = useDispatch();
  const { id } = useParams();
  const [ show, setShow ] = React.useState({ avatar: false, medal: false, both: false });
  const [ editPerfil, setEditPerfil ] = React.useState(false);
  const [ editPerfilFeature, setEditPerfilFeature ] = React.useState({
    avatar: false,
    nickname: false,
    ranking: false
  });
  const [ info, setInfo ] = React.useState({});
 
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

  function handleEdit(e) {
    e.preventDefault();
    setEditPerfil(true)
  }

  function handleEditFeature(e) {
    e.preventDefault();
    setEditPerfilFeature({
      ...editPerfilFeature,
      [e.target.name]: true
    })
  }

  function handleChange(e) {
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmeFeature(e) {
    e.preventDefault();
    setEditPerfilFeature({
      ...editPerfilFeature,
      [e.target.name]: false
    })
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
          {/* {editPerfil && <span className = {s.btnEditFeature} name='avatar' onClick={(e) => handleEditFeature(e)}>🖊</span>}
          {editPerfilFeature.avatar && <input className={s.inputCreate} placeholder='Add new Avatar' type='text' name='avatar' onChange={(e) => handleChange(e)}><span onClick={(e) => handleConfirmeFeature(e)}>✅</span></input>}
          {info?.avatar && <h5> New Nickname: {info.avatar}</h5> } */}
        </div>
        <span className = {s.title}>{player.nickname}</span>
          {/* {editPerfil && <span className = {s.btnEditFeature} name='nickname' onClick={(e) => handleEditFeature(e)}>🖊</span>}
          {editPerfilFeature.nickname && <input className={s.inputCreate} placeholder='Add new Nickname' type='text' name='nickname' onChange={(e) => handleChange(e)}><span onClick={(e) => handleConfirmeFeature(e)}>✅</span></input>}
          {info?.nickname && <h5> New Nickname: {info.nickname}</h5> } */}
        <div className = {s.infoId}>
          <span>ID</span>
          <span>{player.id}</span>
        </div>
        <div className = {s.infoRanking}>
          <span>RANKING</span>
          <span>
            {player.ranking}
            {editPerfil && <button className={s.btnEditFeature} name='ranking' onClick={(e) => handleEditFeature(e)}>🖊</button>}
            {editPerfilFeature.ranking && <input className={s.inputCreate} placeholder='Add new avatar' type='text' name='ranking' onChange={(e) => handleChange(e)}></input>}
            {editPerfilFeature.ranking && <button name='ranking' onClick={(e) => handleConfirmeFeature(e)}>✅</button>}
            {info?.ranking && <h5> New Ranking: {info.ranking}</h5> }
          </span>
        </div>
        {loginPlayer.admin && !editPerfil && <button className = {s.btnDetails} onClick={(e) => handleEdit(e)}>Edit Profile</button>}
        {loginPlayer.admin && editPerfil && <button className = {s.btnDetails} onClick={(e) => handleEdit(e)}>Confirme</button>}
      </div>
    </div>
  );
}