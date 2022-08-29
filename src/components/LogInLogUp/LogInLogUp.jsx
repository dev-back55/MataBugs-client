import React, { useEffect, useState } from 'react';
import { signupPlayer } from '../../redux/action/playerDetailsActions';
import { useDispatch, useSelector } from "react-redux";
import s from './LogInLogUp.module.scss'

export function LogInLogUp(props) {
    const dispatch = useDispatch();
    const [ login, setLogin ] = useState(true);
    const [ player, setPlayer ] = useState({
        email: null,
        nickname: null,
        password: null,
        avatar: null
    });

    console.log(player)

    const [ dataErrors, setDataErrors] = useState({});
    const [ created, setCreated ] = useState({game: false})
    let errors = {};
    

    // Email Control // NickName Control  // Image Control
    function handleChangePlayer(e){
        e.preventDefault();
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })
    };
    
    function handleChangeLogin(e) {
        e.preventDefault();
        setLogin(!login)
    }
    
          
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
        dispatch(signupPlayer(player))
        // validate(game)
        // const isEmptyErrors = isEmptyObject(errors)
        // if(isEmptyErrors){
        //     props.createGame(game)          
        //     setCreated({ game: true})
        // } else {
        //     setDataErrors(errors)
        // }
    }

    useEffect(() => {
        console.log('entre a login')
    }, [login])

        return (
            <div className = {s.container}>
                <div className={s.containerCreatePlayer}>
                    <div>
                        
                        <h2 className={s.title}> {login ? "Sign Up" : "Sign In" } </h2>
                        <form onSubmit={e => handleOnSubmit(e)}> 
                            <div className={s.containerInput}>
                                <label className={s.labelInput}> Email: </label>{dataErrors.name && (<span className='danger'>{dataErrors.name}</span>)}
                                    <input className={s.inputCreate} placeholder='Add an email' type='text' name='email' onChange={(e) => handleChangePlayer(e)}></input>                   
                                    <br></br>

                                {login && ( <>
                                    <label className={s.labelInput}> NickName: </label>{dataErrors.name && (<span className='danger'>{dataErrors.name}</span>)}
                                        <input className={s.inputCreate} placeholder='Write a nickname' type='text' name='nickname' onChange={(e) => handleChangePlayer(e)}></input>                   
                                        <br></br> 
                                </> )}

                                <label className={s.labelInput}> Password: </label>{dataErrors.image && (<span className='danger'>{dataErrors.image}</span>)}
                                    <input className={s.inputCreate} placeholder='Add a password' type='text' name='password' onChange={(e) => handleChangePlayer(e)}></input>
                                    <br></br>

                                {login && ( <>
                                <label className={s.labelInput}> Avatar: </label>{dataErrors.image && (<span className='danger'>{dataErrors.image}</span>)}
                                    <input className={s.inputCreate} placeholder='Add an link avatar' type='text' name='avatar' onChange={(e) => handleChangePlayer(e)}></input>
                                    <br></br>
                                </> )}
                            </div>

                            <div >
                                <button className={s.buttonCreate} type='submit'>{login ? "Sign Up" : "Sign In"}</button>{dataErrors.withErrors && (<span className='danger'>Please check all Errors, before to submit.</span>)}
                                    {/* {created.game && (<p>Game created successfully, Greate.!!!</p>)} */}
                            </div>
                            <div className={s.changeLoginLogout}>
                                {login ? "No account yet?" : "Already a user?"} <span onClick={(e) => handleChangeLogin(e)} className={s.loginlogup}>{login ? "Sign up here!" : "Sign In here!"}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    
} 

export default LogInLogUp;


// <div>
//                     {/* {
//                     game.image !== null && (<h3 className='imageTitleReference'>Check your Game Image, this will be the image.</h3>)                    
//                     }
//                     {
//                     game.image !== null && (<img className='imageReference' alt='imagen game created' src={game.image} />)                    
//                     } */}
//                 </div>