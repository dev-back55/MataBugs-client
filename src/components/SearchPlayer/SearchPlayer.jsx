import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import { updateFilter, updateFilterResetPage, searchPlayers } from '../../redux/action/searchPlayersActions';
import { generateQueryWithState } from '../../lib/util';

import s from './SearchPlayer.module.css';

export default function SearchPlayer() {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  let handleValue = function(newValue) {
    dispatch(updateFilter({ field : "search", newValue }));
  }

  let handleSearch = function() {
    dispatch(updateFilter({ field: "currentPage", newValue: 1 }));
    if (/search/.test(location.pathname)) dispatch(searchPlayers(generateQueryWithState({ ...searchState, currentPage: 1 })));
    else navigate("/search");
  }

  return (
    <div className = {s.container}>
      <SearchBar
        value = {searchState.search}
        handleValue = {handleValue}
        handleSearch = {handleSearch}
        disabled = {searchState.loading}
      />
    </div>
  );
}