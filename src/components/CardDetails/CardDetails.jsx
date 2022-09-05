import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ShowLoading from '../ShowLoading/ShowLoading';
import ShowNotFound from '../ShowNotFound/ShowNotFound';
import ShowRetry from '../ShowRetry/ShowRetry';
import ImageLoader from '../ImageLoader/ImageLoader';
import { getPlayerDetails, clearPlayerDetails, editPlayer, clearEditPlayer } from '../../redux/action/playerDetailsActions';
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

  const { player, noPlayerFound, error } = useSelector(state => state.details);  
  const loginPlayer  = useSelector(state => state.player.player.player); 
  const { successEditPlayer } = useSelector(state => state.player);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [ show, setShow ] = React.useState({ avatar: false, medal: false, both: false });
  const [ editPerfil, setEditPerfil ] = React.useState(false);
  const [ isAdmin, setIsAdmin] = React.useState(false);
  const [ editPerfilFeature, setEditPerfilFeature ] = React.useState({
    avatar: false,
    nickname: false,
    ranking: false
  });
  const [ info, setInfo ] = React.useState({idEditer: loginPlayer?.id, idCard: id});
 
  React.useEffect(() => {
    if(loginPlayer?.admin || loginPlayer?.id === parseInt(id)) {
      setIsAdmin(true)
    }

    loadPlayerDetails();

    return () => {
      dispatch(clearPlayerDetails());
      dispatch(clearEditPlayer());
    }
  }, [successEditPlayer, loginPlayer]);

  let loadPlayerDetails = function() {
    dispatch(getPlayerDetails(id));
  }

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

  function handleConfirme(e) {
    e.preventDefault();
    dispatch(editPlayer(info))
    setEditPerfil(false)
    setInfo({idEditer: loginPlayer?.id, idCard: id})
  }

  return (
    <>
        {
          (!player || !show.both) && !noPlayerFound && !error &&
          <div className = {s.loadingContainer}>
            <ShowLoading message = {"Searching"}/>
          </div>

        }
        {
          noPlayerFound &&
          <div className = {s.loadingContainer}>
            <ShowNotFound message = {"Player Not Found"}/>
          </div>
        }
        {
          error &&
          <div className = {s.loadingContainer}>
            <ShowRetry message = {"Server Error. Retry?"} retryCB = {loadPlayerDetails}/>
          </div>
        }
        {
          player && !noPlayerFound && !error &&
          
          <div id="componentCardDetail" className = {`${s.container} ${!show.both ? s.hideContainer : '' }`}>
            <div className = {s.statusContainer}>
              <img src = {selectMedal[player.status]} alt = {`MEDALLA-${player.status}`} className = {s.medal} onLoad = {handleOnLoadMedal} />
              <span className = {s.spanStatus}>
                {`status: ${player.status}`}
                {editPerfil && <h6>New Player Data:</h6> }
                {info?.ranking && <h5 className = {s.spanEditChange}> New Ranking: {info.ranking}</h5> }
                {info?.avatar && <h5 className = {s.spanEditChange}> New Avatar: {info.avatar.slice(0,10)}</h5> }
                {info?.nickname && <h5 className = {s.spanEditChange}> New Nickname: {info.nickname}</h5> }
                {successEditPlayer && <h5 className = {s.spanEditChange}> ✅{successEditPlayer} </h5> } 
              </span>
              <span className = {s.spanEditChange}>

                {editPerfilFeature.ranking && <input className={s.inputCreate} placeholder='New Ranking' type='text' name='ranking' onChange={(e) => handleChange(e)}></input>}
                {editPerfilFeature.ranking && <button name='ranking' className={s.btnEditFeature} onClick={(e) => handleConfirmeFeature(e)}>✅</button>}
                {editPerfilFeature.avatar && <input className={s.inputCreate} placeholder='New avatar' type='text' name='avatar' onChange={(e) => handleChange(e)}></input>}
                {editPerfilFeature.avatar && <button name='avatar' className={s.btnEditFeature} onClick={(e) => handleConfirmeFeature(e)}>✅</button>}
                {editPerfilFeature.nickname && <input className={s.inputCreate} placeholder='New nickname' type='text' name='nickname' onChange={(e) => handleChange(e)}></input>}
                {editPerfilFeature.nickname && <button name='nickname' className={s.btnEditFeature} onClick={(e) => handleConfirmeFeature(e)}>✅</button>}

              </span>
            </div>
            <div className = {s.detailsContainer}>
              <div>
                <Link to="/search"><h3 className={s.closeCard}>X</h3></Link>
              </div>
              <div className = {s.imageContainer}>
                <ImageLoader image = {player.avatar} alt = {"Thor"} setImageLoaded = {handleOnLoadAvatar} delay = {0}/>
                {editPerfil && <button className = {s.btnEditFeature} name='avatar' onClick={(e) => handleEditFeature(e)}>🪶</button>}
              </div>
              <span className = {s.title}>
                {player.nickname}
                {editPerfil && <button className = {s.btnEditFeature} name='nickname' onClick={(e) => handleEditFeature(e)}>🪶</button>}
                </span>
              <div className = {s.infoId}>
                <span>ID</span>
                <span>{player.id}</span>
              </div>
              <div className = {s.infoRanking}>
                <span>
                  RANKING
                  {editPerfil && loginPlayer?.admin && <button className={s.btnEditFeature} name='ranking' onClick={(e) => handleEditFeature(e)}>🪶</button>}
                </span>
                <span>
                  {player.ranking}
                </span>
              </div>
              {isAdmin && !editPerfil&& <button className = {s.btnDetails} onClick={(e) => handleEdit(e)}>Edit Profile</button>}
              {isAdmin && editPerfil && <button className = {s.btnDetails} onClick={(e) => handleConfirme(e)}>Confirme</button>}
            </div>
          </div>
        }
    </>
  );
}