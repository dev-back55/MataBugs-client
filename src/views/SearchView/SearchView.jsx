import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import PaginationControllers from '../../components/PaginationControllers/PaginationControllers';
import { searchPlayers } from '../../redux/action/searchPlayersActions';
import { generateQueryWithState } from '../../lib/util';

import s from './SearchView.module.css';

export default function SearchView() {

  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  React.useEffect(() => {
    dispatch(searchPlayers(generateQueryWithState(searchState)));
  }, []);

  return (
    <div className = {s.container}>
      <PaginationControllers />
      <Cards
        users = {searchState.players}
        loading = {searchState.loading}
      />
    </div>
  );
}