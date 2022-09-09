import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import EmailSent from '../SVG/EmailSent';
import { clearPasswordModal, sendEmailToRecoverPassword } from '../../redux/action/passwordActions';
import { validateEmail } from '../../lib/validate';

import s from './PasswordRecoveryModal.module.css';

export default function PasswordRecoveryModal() {

  const dispatch = useDispatch();
  const { error, success, loading, playerNotFound } = useSelector(state => state.password);
  const [ email, setEmail ] = React.useState('');
  const [ errorMsg, setErrorMsg ] = React.useState('');
  const [ animateError, setAnimateError ] = React.useState(false);

  React.useEffect(() => {
    return (() => {
      dispatch(clearPasswordModal());
    })
  }, []);

  React.useEffect(() => {
    let idTimeOut;
    if (animateError) idTimeOut = setTimeout(() => setAnimateError(false), 330);
    return (() => {
      clearTimeout(idTimeOut);
    })
  }, [animateError]);

  React.useEffect(() => {
    if (!error) return;
    setAnimateError(true);
    if (playerNotFound) setErrorMsg('No player registred with the ingresed e-mail.');
    else setErrorMsg('Server error. Try again.');
  }, [error, playerNotFound]);

  let handleOnChange = function(e) {
    const { value } = e.target;
    setEmail(value);
  }

  let handleClick = function() {
    const { email: errorEmail } = validateEmail({ email });
    if (errorEmail !== true) {
      setAnimateError(true);
      setErrorMsg(errorEmail);
    }
    else dispatch(sendEmailToRecoverPassword(email));
  }

  return (
    <div className = {s.container}>
      <div className = {s.closeCardContainer}>
        <Link to = "/login" style = {{ textDecoration: 'none' }}>
          <h3 className = {s.closeCard}>X</h3>
        </Link>
      </div>
      <SidebarTitle title = { !success ? "Forgot Your Password?" : "Email Sent Successfully"} />
      <label className = {s.labelInput}> 
        {
          !success &&
          `To reset your password, enter the registered e-mail address and we will
          send your password reset instructions on your e-mail.`
        }
        {
          success &&
          `A message has been sent to ${email} with instructions to recover and reset your password.`
        }
      </label>
      { errorMsg && <span className = {`${s.danger} ${animateError ? s.wobble : ''}`}>{errorMsg}</span> }
      {
        success &&
        <div className = {s.svgContainer}>
          <EmailSent />
        </div>
      }
      {
        !success &&
        <input
          className = {s.inputEmail}
          placeholder = 'Add an e-mail'
          type = 'email'
          value = {email}
          name = 'email'
          disabled = {loading}
          onChange = {handleOnChange}
        />
      }
      {
        !success &&
        <button className = {s.btnDetails} onClick = {handleClick} disabled = {loading}>
          { !loading ? 'Send' : 'Sending...' }
        </button>
      }
      {
        success &&
        <Link to = "/login" style = {{ textDecoration: 'none' }}>
          <button className = {s.btnDetails}>
            Go Back To Login
          </button>
        </Link>
      }
    </div>
  );
}