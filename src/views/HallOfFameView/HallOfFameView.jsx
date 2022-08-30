import React from 'react';
import HallOfFameHeader from '../../components/HallOfFameHeader/HallOfFameHeader';
import HallOfFameRows from '../../components/HallOfFameRows/HallOfFameRows';
import { listOfUsers } from '../../lib/userModel';

import s from './HallOfFameView.module.css';

export default function HallOfFameView() {

  const listOfUsersSortedByRange = listOfUsers.sort((prevUser, nextUser) => nextUser.ranking - prevUser.ranking);

  return (
    <div className = {s.container}>
      <HallOfFameHeader 
        first = {listOfUsersSortedByRange[0].avatar} 
        second = {listOfUsersSortedByRange[1].avatar} 
        third = {listOfUsersSortedByRange[2].avatar}
      />
      <HallOfFameRows players = {listOfUsersSortedByRange} />
    </div>
  );
}