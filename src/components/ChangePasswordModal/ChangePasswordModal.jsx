import React from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import PasswordInput from '../PasswordInput/PasswordInput';
import Shield from '../SVG/Shield';
import { recoverPassword, clearPasswordModal, changePassword } from '../../redux/action/passwordActions';
import { validatePassword } from '../../lib/validate';

import s from './ChangePasswordModal.module.css';

export default function ChangePasswordModal() {

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { player } = useSelector((state) => state.player);
  const { loading, success, error, errorMsg } = useSelector((state) => state.password);
  const [ newPassword, setNewPassword ] = React.useState({ 
    value: {
      input: '',
      errorMsg: '',
      animate: false
    }, 
    repeat: {
      input: '',
      errorMsg: '',
      animate: false
    },
    view: false
  });
  const [ oldPassword, setOldPassword ] = React.useState(null);
  const [ token, setToken ] = React.useState(null);

  React.useEffect(() => {
    let tokenFound = searchParams.get('token');
    setToken(tokenFound);

    return (() => {
      dispatch(clearPasswordModal());
    })
  }, []);

  React.useEffect(() => {
    let idTimeOutValue, idTimeOutRepeat, idTimeOutOld;

    if (newPassword.value.animate) 
      idTimeOutValue = setTimeout(() => 
        setNewPassword((newPassword) => { return { ...newPassword, value: { ...newPassword.value, animate: false } } })
        , 330);

    if (newPassword.repeat.animate)
      idTimeOutRepeat = setTimeout(() =>
        setNewPassword((newPassword) => { return { ...newPassword, repeat: { ...newPassword.repeat, animate: false } } })
        , 315);

    if (oldPassword && oldPassword.animate)
      idTimeOutOld = setTimeout(() =>
        setOldPassword((oldPassword) => { return { ...oldPassword, animate: false } })
        , 315);

    return (() => {
      clearTimeout(idTimeOutValue);
      clearTimeout(idTimeOutRepeat);
      clearTimeout(idTimeOutOld);
    })
  }, [newPassword.value.animate, newPassword.repeat.animate, oldPassword]);

  React.useEffect(() => {
    if (!error || oldPassword) return;
    setNewPassword({ ...newPassword, value: { ...newPassword.value, animate: true, errorMsg: 'Server error. Try again.' } });
  }, [error]);

  React.useEffect(() => {
    if (!error || errorMsg.length === 0) return;
    setOldPassword({ ...oldPassword, animate: true, errorMsg: errorMsg });
  }, [error, errorMsg])

  React.useEffect(() => {
    if (player && player.player) setOldPassword({
      input: '',
      errorMsg: '',
      animate: false
    });
  }, [player]);

  let handleOnChange = function(e) {
    const { name, value } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: {
        ...newPassword[name],
        input: value
      }
    });
  }

  let handleOnChangeOldPassword = function(e) {
    const { value } = e.target;
    setOldPassword({
      ...oldPassword,
      input: value 
    });
  }

  let handleChangeCheck = function() {
    setNewPassword({ ...newPassword, view: !newPassword.view });
  }

  let getValidationNewPassword = function() {
    const { password: errorPassword } = validatePassword({ password: newPassword.value.input });
    const passwordsAreNotEqual = newPassword.value.input !== newPassword.repeat.input ? 'Passwords does not match' : false;

    setNewPassword({ 
      value: { 
        ...newPassword.value,
        errorMsg: errorPassword ? errorPassword : '',
        animate: errorPassword ? true : false
      },
      repeat: {
        ...newPassword.repeat,
        errorMsg: passwordsAreNotEqual ? passwordsAreNotEqual : '',
        animate: passwordsAreNotEqual ? true : false
      },
      view: newPassword.view
    });

    return (!errorPassword && !passwordsAreNotEqual);
  }

  let getValidationOldPassword = function() {
    const { password: errorOldPassword } = validatePassword({ password: oldPassword.input });
    setOldPassword({
      ...oldPassword,
      errorMsg: errorOldPassword ? errorOldPassword : '',
      animate: errorOldPassword ? true : false
    });

    return !errorOldPassword;
  }

  let handleUpdate = function() {
    let newPasswordIsValid = getValidationNewPassword();

    if (!oldPassword) handleRecoverPassword(newPasswordIsValid);
    else handleUpdatePassword(getValidationOldPassword() && newPasswordIsValid);
  }

  let handleRecoverPassword = function(newPasswordIsValid) {
    if (newPasswordIsValid) dispatch(recoverPassword({ password: newPassword.value.input, token }));
  }

  let handleUpdatePassword = function(bothPasswordsAreValid) {
    if (bothPasswordsAreValid) dispatch(changePassword({ oldPassword: oldPassword.input, newPassword: newPassword.value.input }));
  }

  return (
    <div className = {s.container}>
      <div className = {s.closeCardContainer}>
        <Link to = {`${ !oldPassword ? '/login' : '/home' }`} style = {{ textDecoration: 'none' }}>
          <h3 className = {s.closeCard}>X</h3>
        </Link>
      </div>
      <SidebarTitle title = { !success ? (player?.player ? "Update Password" : "Restore Password") : "Password Updated"} />
      {
        oldPassword && !success &&
        <PasswordInput
          title = {'Current Password'}
          name = {'oldPassword'}
          value = {oldPassword.input}
          placeholder = {'Insert the current password'}
          errorMsg = {oldPassword.errorMsg}
          viewPassword = {newPassword.view}
          disabled = {loading}
          handleOnChange = {handleOnChangeOldPassword}
          animate = {oldPassword.animate}
        />
      }
      {
        !success && 
        <>
          <PasswordInput
            title = {'New Password'}
            name = {'value'}
            value = {newPassword.value.input}
            placeholder = {'Insert a new password'}
            errorMsg = {newPassword.value.errorMsg}
            viewPassword = {newPassword.view}
            disabled = {loading}
            handleOnChange = {handleOnChange}
            animate = {newPassword.value.animate}
          />
          <PasswordInput
            title = {'Repeat Password'}
            name = {'repeat'}
            value = {newPassword.repeat.input}
            placeholder = {'Repeat the inserted password'}
            errorMsg = {newPassword.repeat.errorMsg}
            viewPassword = {newPassword.view}
            disabled = {loading}
            handleOnChange = {handleOnChange}
            animate = {newPassword.repeat.animate}
          />
          <div className = {s.containerCheck}>
            <label className = {s.labelInputCheck}>View Password</label>
            <input type = 'checkbox' value = {newPassword.view} onChange = {handleChangeCheck} name = 'view'/>
          </div>
        </>
      }
      {
        success &&
        <>
          <label className = {s.labelInput}> 
            Your password has been updated successfully!
          </label>
          <div className = {s.svgContainer}>
            <Shield />
          </div>
        </>
      }
      {
        !success &&
        <button className = {s.btnDetails} onClick = {handleUpdate} disabled = {loading}>
        { !loading ? 'Update' : 'Updating...' }
        </button>
      }
      {
        success && !oldPassword &&
        <Link to = "/login" style = {{ textDecoration: 'none' }}>
          <button className = {s.btnDetails}>
            Go Back To Login
          </button>
        </Link>
      }
      {
        success && oldPassword &&
        <Link to = "/home" style = {{ textDecoration: 'none' }}>
          <button className = {s.btnDetails}>
            Go Back To Home
          </button>
        </Link>
      }
    </div>
  );
}