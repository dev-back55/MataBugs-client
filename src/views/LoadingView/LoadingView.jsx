import React from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../components/Logo/Logo';
import { fetchPlayerWithToken, dontFetchPlayerWithToken, finishDelay } from '../../redux/action/PlayerLogActions';
import { existToken } from '../../lib/util';

import s from './LoadingView.module.css';

export default function LoadingView() {

  const dispatch = useDispatch();
  const [ widthFull ,setWidthFull ] = React.useState(false);

  React.useEffect(() => {
    let idTimeOut1 = setTimeout(() => setWidthFull(true), 100);
    let idTimeOut2 = setTimeout(() => dispatch(finishDelay()), 1500);
    if (existToken()) dispatch(fetchPlayerWithToken());
    else dispatch(dontFetchPlayerWithToken());
    return (() => {
      clearTimeout(idTimeOut1);
      clearTimeout(idTimeOut2);
    })
  }, []);

  return (
    <div id="loadingView" className = {s.container}>
      <div className = {s.logoContainer}>
        <Logo alwaysVisible = {true}/>
      </div>
      <div className = {s.containerLoading}>
        <div className = {`${s.loading} ${ widthFull ? s.fullLoading : '' }`}></div>
      </div>
    </div>
  );
}