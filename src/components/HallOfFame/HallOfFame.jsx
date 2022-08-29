import React from 'react';
import HallOfFameRow from '../HallOfFameRow/HallOfFameRow';
import { listOfUsers } from '../../lib/userModel';
import s from './HallOfFame.module.css';

export default function HallOfFame() {

  const listOfUsersSortedByRange = listOfUsers.sort((prevUser, nextUser) => nextUser.ranking - prevUser.ranking);

  return (
    <div className = {s.container}>
      {
        listOfUsersSortedByRange && listOfUsersSortedByRange.length > 0 && listOfUsersSortedByRange.map((user, index) => 

          <HallOfFameRow
            id = {user.id}
            nickname = {user.nickname}
            status = {user.status}
            ranking = {user.ranking}
            avatar = {user.avatar}
            index = {index + 1}
            key = {`hall-of-fame-player-${user.nickname}-${index}`}
          />

        )
      }
    </div>
  );
}