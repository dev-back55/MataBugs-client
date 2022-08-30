import React, { useEffect, useState } from 'react';
import { signupPlayer, signinPlayer } from '../../redux/action/playerDetailsActions';
import { useDispatch, useSelector } from "react-redux";
import s from './LogInLogUp.module.scss';
import { validateEmail, validatePassword, validateNickname, validateAvatar } from "./Validate";

export function LogInLogUp() {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.player)
    const [ signup, setSignup ] = useState(true);
    const [ player, setPlayer ] = useState({
        email: '',
        nickname: '',
        password: '',
        avatar: ''
    });

    const [errorsEmail, setErrorsEmail] = useState({})
    const [errorsPassword, setErrorsPassword] = useState({})
    const [errorsNickname, setErrorsNickname] = useState({})
    const [errorsAvatar, setErrorsAvatar] = useState({})

    const [ dataErrors, setDataErrors] = useState(false);
    // const [ errors, setErrors] = useState({});
    
    // const [ created, setCreated ] = useState({game: false})
    // let errors = {};
    

    // Email Control // NickName Control  // Image Control  // Email Control
    function handleChangePlayer(e){
        e.preventDefault();
        setDataErrors(false)
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })

        if(player.email !== '') setErrorsEmail(validateEmail({...player,[e.target.name]: e.target.value}));
        if(player.password !== '') setErrorsPassword(validatePassword({...player,[e.target.name]: e.target.value}));
        if(player.nickname !== '' && signup) setErrorsNickname(validateNickname({...player,[e.target.name]: e.target.value}));
        if(player.avatar !== '' && signup) setErrorsAvatar(validateAvatar({...player,[e.target.name]: e.target.value}));
    };
    
    function handleChangeSignup(e) {
        e.preventDefault();
        setSignup(!signup)
    }
    
    // Submit Game 
    function handleOnSubmit(e){
        e.preventDefault();
        setErrorsEmail(validateEmail({...player,[e.target.name]: e.target.value}))
        setErrorsPassword(validatePassword({...player,[e.target.name]: e.target.value}))
        if(signup) {
            setErrorsNickname(validateNickname({...player,[e.target.name]: e.target.value}))
            setErrorsAvatar(validateAvatar({...player,[e.target.name]: e.target.value}));
            if(!errorsEmail.email && !errorsPassword.password && !errorsNickname.nickname && !errorsAvatar.avatar){
                setDataErrors(false)
                dispatch(signupPlayer(player))
            } else {
                setDataErrors(true);
            }
        } else {
            setErrorsNickname({})
            setErrorsAvatar({})
            if(!errorsEmail.email && !errorsPassword.password ){
                setDataErrors(false)
                dispatch(signinPlayer(player))
            } else {
                setDataErrors(true);
            }
        }
    }

    useEffect(() => {
        if(errorsEmail.email || errorsPassword.password || errorsNickname.nickname || errorsAvatar.avatar){
            setDataErrors(true)
        }        
    }, [errorsEmail, errorsNickname, errorsPassword, errorsAvatar])


    useEffect(() => {
        if(!signup && error) {

        }   
    }, [error])

        return (
            <div className = {s.container}>
                <div className={s.containerCreatePlayer}>
                    <div>
                        
                        <h2 className={s.title}> {signup ? "Sign Up" : "Sign In" } </h2>
                        <form onSubmit={e => handleOnSubmit(e)}> 
                            <div className={s.containerInput}>
                                    <label className={s.labelInput}> 
                                        Email: * 
                                        {errorsEmail?.email && (<span className={s.danger}>{errorsEmail.email}</span>)} 
                                        {error && (<span className={s.danger}>{error.message}</span>)} 
                                    </label>
                                    <input className={s.inputCreate} placeholder='Add an email' type='email' value={player.email} name='email' onChange={(e) => handleChangePlayer(e)}></input>                   
                                    <br></br>

                                {signup && ( <>
                                    <label className={s.labelInput}> NickName: * {errorsNickname?.nickname && (<span className={s.danger}>{errorsNickname.nickname}</span>)}</label>
                                        <input className={s.inputCreate} placeholder='Write a nickname' type='text' value={player.nickname} name='nickname' onChange={(e) => handleChangePlayer(e)}></input>                   
                                        <br></br> 
                                </> )}

                                <label className={s.labelInput}> Password: * {errorsPassword?.password && (<span className={s.danger}>{errorsPassword.password}</span>)} </label>
                                    <input className={s.inputCreate} placeholder='Add a password' type='text' value={player.password} name='password' onChange={(e) => handleChangePlayer(e)}></input>
                                    <br></br>

                                {signup && ( <>
                                <label className={s.labelInput}> Avatar: {errorsAvatar.avatar && (<span className={s.danger}>{errorsAvatar.avatar}</span>)} </label>
                                    <input className={s.inputCreate} placeholder='Add a avatar¨s link' type='text' value={player.avatar} name='avatar' onChange={(e) => handleChangePlayer(e)}></input>
                                    <br></br>
                                </> )}
                            </div>

                                {dataErrors && (<span className={s.danger}>Please check all Errors, before to submit.</span>)}
                            <div >
                                <button className={s.buttonCreate} type='submit'>{signup ? "Sign Up" : "Sign In"}</button>{dataErrors.withErrors && (<span className='danger'>Please check all Errors, before to submit.</span>)}
                            </div>
                            <div className={s.changeLoginLogout}>
                                {signup ? "Already a user?" : "No account yet?" } <span onClick={(e) => handleChangeSignup(e)} className={s.loginlogup}>{signup ? "Sign In here!" : "Sign Up here!"}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    
} 

export default LogInLogUp;