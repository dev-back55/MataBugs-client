import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import { updateFilter, searchPlayers, updateFilterResetPage } from '../../redux/action/searchPlayersActions';
import { generateQueryWithState } from '../../lib/util';

import s from './SearchPlayer.module.css';

export default function SearchPlayer() {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);
  const [ inputText, setInputText ] = React.useState('');

  React.useEffect(() => {
    if (!/search/.test(location.pathname)) setInputText('');
  }, [location.pathname]);

  let handleValue = function(newValue) {
    setInputText(newValue);
  }

  let handleSearch = function() {
    dispatch(updateFilterResetPage({ field: "search", newValue: inputText }));
    if (!/search/.test(location.pathname)) navigate('/search');
    else dispatch(searchPlayers(generateQueryWithState({ ...searchState, search: inputText ,currentPage: 1 })));
  }

  let handleResetSearch = function() {
    setInputText('');
    dispatch(updateFilter({ field: "search", newValue: ""}));
    dispatch(searchPlayers(generateQueryWithState({ ...searchState, search: "", currentPage: 1 })));
  }

  return (
    <div className = {s.container}>
      <SearchBar
        maxLength = {16}
        value = {inputText}
        handleValue = {handleValue}
        handleSearch = {handleSearch}
        lastSearch = {searchState.search} 
        handleReset = {handleResetSearch}
        disabled = {searchState.loading}
      />
    </div>
  );
}