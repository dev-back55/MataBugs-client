import React from 'react';
import ShowLoading from '../ShowLoading/ShowLoading';
import ShowNotFound from '../ShowNotFound/ShowNotFound';
import ShowRetry from '../ShowRetry/ShowRetry';
import Card from '../Card/Card';

import s from './Cards.module.css';

export default function Cards({ users, loading, error, retryCB }) {

  if (loading) return (
    <div className = {s.loadingContainer}>
      <ShowLoading message = {"Searching"}/>
    </div>
  );

  if (!loading && users && users.length === 0) return (
    <div className = {s.loadingContainer}>
      <ShowNotFound message = {"No Players Found"}/>
    </div>
  );

  if (error) return (
    <div className = {s.loadingContainer}>
      <ShowRetry message = {"Server Error. Retry?"} retryCB = {retryCB} />
    </div>
  )

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