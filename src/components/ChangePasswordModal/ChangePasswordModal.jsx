import React from 'react';
import SidebarTitle from '../SidebarTitle/SidebarTitle';
import PasswordInput from '../PasswordInput/PasswordInput';
import { validatePassword } from '../../lib/validate';

import s from './ChangePasswordModal.module.css';

export default function ChangePasswordModal() {

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
      value: { ...newPassword.value, errorMsg: errorPassword ? errorPassword : '', animate: errorPassword ? true : false },
      repeat: { ...newPassword.repeat, errorMsg: passwordsAreNotEqual ? passwordsAreNotEqual : '', animate: passwordsAreNotEqual ? true : false },
      view: newPassword.view
    });
  }

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
        disabled = {false}
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
        disabled = {false}
        handleOnChange = {handleOnChange}
        animate = {newPassword.repeat.animate}
      />
      <div className = {s.containerCheck}>
        <label className = {s.labelInputCheck}>View Password</label>
        <input type = 'checkbox' value = {newPassword.view} onChange = {handleChangeCheck} name = 'view'/>
      </div>
      <button className = {s.btnDetails} onClick = {handleUpdate} disabled = {false}>
        { !false ? 'Update' : 'Updating...' }
      </button>
    </div>
  );
}