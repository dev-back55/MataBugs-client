import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowLoading from '../../components/ShowLoading/ShowLoading';
import HallOfFameHeader from '../../components/HallOfFameHeader/HallOfFameHeader';
import HallOfFameRows from '../../components/HallOfFameRows/HallOfFameRows';
import { clearHallOfFame, getHallOfFame } from '../../redux/action/hallOfFameActions';

import s from './HallOfFameView.module.css';

export default function HallOfFameView() {

  const dispatch = useDispatch();
  const { hallOfFame, loading } = useSelector((state) => state.hallOfFame);

  React.useEffect(() => {
    dispatch(getHallOfFame());

    return (() => {
      dispatch(clearHallOfFame());
    })
  }, []);

  if (hallOfFame.length === 0 || loading) return (
    <div className = {s.loadingContainer}>
      <ShowLoading message = {"Loading"}/>
    </div>
  );

  return (
    <div id="componentHallOfFame"className = {s.container}>
      <HallOfFameHeader 
        first = {hallOfFame[0].avatar} 
        second = {hallOfFame[1].avatar} 
        third = {hallOfFame[2].avatar}
      />
      <HallOfFameRows players = {hallOfFame} />
    </div>
  );
}