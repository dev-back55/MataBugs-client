import React from 'react';
import ShowLoading from '../ShowLoading/ShowLoading';
import Card from '../Card/Card';

import s from './Cards.module.css';

export default function Cards({ users, loading }) {

  if (loading) return (
    <div className = {s.loadingContainer}>
      <ShowLoading message = {"Searching"}/>
    </div>
  );

  return (
    <div className = {s.cardsContainer}>
    {
      users && users.length > 0 && users.map((user, index) => 

        <Card 
          id = {user.id}
          nickname = {user.nickname}
          status = {user.status}
          ranking = {user.ranking}
          avatar = {user.avatar}
          key = {`user-card-id-${user.id}-${index}`}
        />
      )
    }
    </div>
  );
}