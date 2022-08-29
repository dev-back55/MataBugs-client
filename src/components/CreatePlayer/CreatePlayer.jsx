import React, { useEffect, useState } from 'react';
import { createPlayer } from '../../redux/action/playerDetailsActions';
import { useDispatch, useSelector } from "react-redux";
import avatarLogin from '../assets/avatarLogin.png';
import s from './CreatePlayer.module.scss'

export function CreatePlayer(props) {
    const dispatch = useDispatch();
    const [ player, setPlayer ] = useState({
        nickname: null,
        avatar: null
    });
    const [ dataErrors, setDataErrors] = useState({});
    const [ created, setCreated ] = useState({game: false})
    let errors = {};
    

    // NickName Control
    function handleChangeNickname(e){
        e.preventDefault();
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    };

    // Image Control
     function handleChangeImage(e) {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    };

    
          
    // Function Validator
    // function validate (game){
    //     const gamesErrors = {}
    //     if(game.name === '' || game.name === null || /[^a-zA-Z0-9 ]/g.test(game.name)){
    //         gamesErrors.name = 'Is necessary include a name without Symbols.'
    //     }
    //     if (!/^(https?:\/\/)?([\da-z-]+)\.([a-z]{2,6})([\w -])\/?/.test(game.image)){
    //         gamesErrors.image = 'Is necessary include a valid image link.'
    //     }     
    //     errors = gamesErrors;
    // }
    
    // Validate empty errors
    // function isEmptyObject(obj) {
    //     for (var property in obj) {
    //         if (obj.hasOwnProperty(property)) {
    //             return false;
    //         }
    //     }     
    //     return true;
    // };

    // Submit Game 
    function handleOnSubmit(e){
        e.preventDefault();
        dispatch(createPlayer(player))
        // validate(game)
        // const isEmptyErrors = isEmptyObject(errors)
        // if(isEmptyErrors){
        //     props.createGame(game)          
        //     setCreated({ game: true})
        // } else {
        //     setDataErrors(errors)
        // }
    }

        return (
            <div className = {s.container}>
                <div className={s.containerCreatePlayer}>
                    <div>
                        <img src={avatarLogin} alt="Avatar Login"/>
                    </div>
                    <div>
                        <h2 className={s.title}>Create Player</h2>
                        <form onSubmit={e => handleOnSubmit(e)}> 
                            <div className={s.containerInput}>
                                <label className={s.labelInput}> NickName: </label>{dataErrors.name && (<span className='danger'>{dataErrors.name}</span>)}
                                
                                    <input className={s.inputCreate} placeholder='Enter Player Name' type='text' name='nickname' onChange={(e) => handleChangeNickname(e)}></input>                   
                                <br></br>

                                <label className={s.labelInput}> Avatar: </label> {dataErrors.image && (<span className='danger'>{dataErrors.image}</span>)}
                                
                                <input className={s.inputCreate} placeholder='Insert image link' type='text' name='image' onChange={(e) => handleChangeImage(e)}></input>
                                <br></br>
                            </div>

                            <div>
                                <button className={s.buttonCreate} type='submit'>Create Player</button>{dataErrors.withErrors && (<span className='danger'>Please check all Errors, before to submit.</span>)}
                                    {/* {created.game && (<p>Game created successfully, Greate.!!!</p>)} */}
                            </div>
                        </form>
                    </div>
                    
                </div>
                
            </div>
        )
    
} 

export default CreatePlayer;


// <div>
//                     {/* {
//                     game.image !== null && (<h3 className='imageTitleReference'>Check your Game Image, this will be the image.</h3>)                    
//                     }
//                     {
//                     game.image !== null && (<img className='imageReference' alt='imagen game created' src={game.image} />)                    
//                     } */}
//                 </div>