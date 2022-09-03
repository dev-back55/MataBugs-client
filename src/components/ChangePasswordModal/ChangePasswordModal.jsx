import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import PasswordInput from '../PasswordInput/PasswordInput';
import { recoverPassword, clearPasswordModal } from '../../redux/action/passwordActions';
import { validatePassword } from '../../lib/validate';

import s from './ChangePasswordModal.module.css';

export default function ChangePasswordModal() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { loading, success, error } = useSelector((state) => state.password);
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
  const [ token, setToken ] = React.useState(null);

  React.useEffect(() => {
    let tokenFound = searchParams.get('token');
    if (!tokenFound) navigate('/home');
    else setToken(tokenFound);

    return (() => {
      dispatch(clearPasswordModal());
    })
  }, []);

  React.useEffect(() => {
    let idTimeOutValue, idTimeOutRepeat;

    if (newPassword.value.animate) 
      idTimeOutValue = setTimeout(() => 
        setNewPassword((newPassword) => { return { ...newPassword, value: { ...newPassword.value, animate: false } } })
        , 330);

    if (newPassword.repeat.animate)
      idTimeOutRepeat = setTimeout(() =>
        setNewPassword((newPassword) => { return { ...newPassword, repeat: { ...newPassword.repeat, animate: false } } })
        , 315);

    return (() => {
      clearTimeout(idTimeOutValue);
      clearTimeout(idTimeOutRepeat);
    })
  }, [newPassword.value.animate, newPassword.repeat.animate]);

  React.useEffect(() => {
    if (!error) return;
    setNewPassword({ ...newPassword, value: { ...newPassword.value, animate: true, errorMsg: 'Server error. Try again.' } });
  }, [error]);

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

  let handleChangeCheck = function() {
    setNewPassword({ ...newPassword, view: !newPassword.view });
  }

  let handleUpdate = function() {
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

    if (!errorPassword && !passwordsAreNotEqual) dispatch(recoverPassword({ password: newPassword.value.input, token }));
  }

  if (!token) return <></>;

  return (
    <div className = {s.container}>
      <div className = {s.closeCardContainer}>
        <h3 className = {s.closeCard}>X</h3>
      </div>
      <SidebarTitle title = {"Restore Password"} />
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
      <button className = {s.btnDetails} onClick = {handleUpdate} disabled = {loading}>
        { !loading ? 'Update' : 'Updating...' }
      </button>
    </div>
  );
}