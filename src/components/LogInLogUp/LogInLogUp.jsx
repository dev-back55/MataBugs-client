import React, { useEffect, useState } from 'react';
import { signupPlayer, signinPlayer, clearLog } from '../../redux/action/PlayerLogActions';
import { createPlayerByAdmin, clearStoreNewPlayer } from '../../redux/action/createPlayerByAdminActions';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import s from './LogInLogUp.module.scss';
import { validateEmail, validatePassword, validateNickname, validateAvatar } from "../../lib/validate";
import avatarDefault from '../../lib/assets/avatar.png';

export function LogInLogUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { createbyAdmin, success } = useSelector((state) => state.createdAdmin)
    const { errorMsg } = useSelector((state) => state.player);
    const [ signup, setSignup ] = useState(true);
    const [ player, setPlayer ] = useState({
        email: '',
        nickname: '',
        password: '',
        avatar: ''
    });
    const [errorsEmail, setErrorsEmail] = useState({});
    const [errorsPassword, setErrorsPassword] = useState({});
    const [errorsNickname, setErrorsNickname] = useState({});
    const [errorsAvatar, setErrorsAvatar] = useState({});
    const [ image, setImage ] = useState("");
    const [ viewPassword, setViewPassword ] = useState(false);

    function handleChangeViewPassword() {
        setViewPassword(!viewPassword)
    }
  
    // Email Control // NickName Control  // Image Control  // Email Control
    function handleChangePlayer(e){
        e.preventDefault();
        setPlayer({
            ...player,
            [e.target.name]: e.target.value
        })

        if(player.email !== '' && e.target.name === 'email') setErrorsEmail(validateEmail({...player,[e.target.name]: e.target.value}));
        if(player.password !== '' && e.target.name === 'password') setErrorsPassword(validatePassword({...player,[e.target.name]: e.target.value}));
        if(player.nickname !== '' && e.target.name === 'nickname' && signup) setErrorsNickname(validateNickname({...player,[e.target.name]: e.target.value}));
        if(player.avatar !== '' && e.target.name === 'avatar' && signup) setErrorsAvatar(validateAvatar({...player,[e.target.name]: e.target.value}));
    };
    
    function handleChangeSignup(e) {
        e.preventDefault();
        if(!signup) {
            setErrorsNickname({})
            setErrorsAvatar({})
        } 
        setSignup(!signup)
    }

        
    // Submit Game 
    function handleOnSubmit(e){
        e.preventDefault();
        
        setErrorsEmail(validateEmail(player))
        setErrorsPassword(validatePassword(player))
        if(signup) {
            setErrorsNickname(validateNickname(player))
            setErrorsAvatar(validateAvatar(player));

            if(player.avatar === '') setPlayer({...player, avatar: avatarDefault })
            if(errorsEmail.email === true && errorsPassword.password === true && errorsNickname.nickname === true && errorsAvatar.avatar === true ){
                if(createbyAdmin) {
                    dispatch(createPlayerByAdmin(player))
                } else {
                    dispatch(signupPlayer(player))
                }
            } 
        } else {
            if(errorsEmail.email === true && errorsPassword.password === true ){
                dispatch(signinPlayer(player))
            } 
        } 
    }

    useEffect(() => {
        if(image !== ''){
            upload();
        }
        return () => {
            dispatch(clearLog());
          }
    },[image])

    function changeSetImage(e) {
        e.preventDefault();
        setImage(e.target.files)
    }

    const upload = async() => {
        const files = image;
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "tech_market_henry")
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/techmarket/image/upload",
            { method: "POST", body: formData }
        );
        const file = await res.json();
        const data = { image: file.secure_url }
        setPlayer({
            ...player,
            avatar: data.image
        })
      }

      function clearNewPlayerFromStore(e) {
        e.preventDefault();
        dispatch(clearStoreNewPlayer())
        navigate('/search');
      }


        return (
            <div id="componentLogin" className = {s.container}>
                <div>
                    <button name="closeLogin" className={s.closeCard} onClick={(e)=> clearNewPlayerFromStore(e)}>X</button>
                </div>
                { success && <h2 className={s.titleSuccess}> ✅ Player Created Successfully </h2> }

                { !success && <div className={s.containerCreatePlayer}>
                    <div>
                        <h2 className={s.title}> {createbyAdmin ? "Create Player" : signup ? "Sign Up" : "Sign In" } </h2> 
                        <form onSubmit={e => handleOnSubmit(e)}> 
                            <div className={s.containerInput}>
                                    <label className={s.labelInput}> 
                                        Email: * 
                                        {errorsEmail?.email !== true && (<span className={s.danger}>{errorsEmail.email}</span>)} 
                                        {errorMsg !== "" && (<span className={s.danger}>{errorMsg}</span>)} 
                                    </label>
                                    <input className={s.inputCreate} placeholder='Add an email' autoComplete="none" type='email' value={player.email} name='email' onChange={handleChangePlayer}></input>                   
                                    <br></br>

                                {signup && ( <>
                                    <label className={s.labelInput}> NickName: * {errorsNickname?.nickname !== true && (<span className={s.danger}>{errorsNickname.nickname}</span>)}</label>
                                        <input className={s.inputCreate}  placeholder='Write a nickname' autoComplete="none" type='text' value={player.nickname} name='nickname' onChange={(e) => handleChangePlayer(e)}></input>                   
                                        <br></br> 
                                </> )} 
                                
                                <label className={s.labelInput}> Password: * {errorsPassword?.password !== true && (<span className={s.danger}>{errorsPassword.password}</span>)} </label>
                                    <input className={s.inputCreate}  placeholder='Add a password' autoComplete="on" type={viewPassword ? 'text' : 'password'} value={player.password} name='password' onChange={(e) => handleChangePlayer(e)}></input>
                                    <br></br>

                                {signup && ( <>
                                <label className={s.labelInput}> Avatar: {errorsAvatar?.avatar !== true && (<span className={s.danger}>{errorsAvatar.avatar}</span>)} </label>
                                    <button type="file" name="image" onChange={(e) => changeSetImage(e)} variant="contained" className={s.inputCreate}><input type="file"  name="image"/></button>
                                    <br></br>
                                </> )}
                            </div>

                            <div className = {s.containerCheckLogin}>
                                <label className = {s.labelInputCheck}>View Password</label>
                                <input type = 'checkbox' onChange={handleChangeViewPassword} name = 'view' checked={viewPassword}/>
                            </div>
                            <div >
                                <button className={s.buttonCreate} type='submit' onClick={(e) =>handleOnSubmit(e)}>{createbyAdmin ? "Create Player" : signup ? "Sign Up" : "Sign In"}</button>
                            </div>
                            {
                                !signup &&
                                <div className={s.changeLoginLogout}>
                                    <Link to = '/recoverpassword' style = {{ textDecoration: 'none' }}>
                                        <span className={s.loginlogup}>Forgot your Password?</span>
                                    </Link>
                                </div>
                            }
                            <div className={s.changeLoginLogout}>
                                { !createbyAdmin && <>{signup ? "Already a user?" : "No account yet?" } <span onClick={(e) => handleChangeSignup(e)} className={s.loginlogup}>{signup ? "Sign In here!" : "Sign Up here!"}</span></>}
                            </div>
                        </form>
                    </div>
                </div>}
            </div>
        )
    
} 

export default LogInLogUp;