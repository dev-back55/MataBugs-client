import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import s from './SearchPlayer.module.css';

export default function SearchPlayer() {

  const [ inputValue, setInputValue ] = React.useState('');
  const [ loading, setLoading ] = React.useState(false);

  let handleValue = function(newValue) {
    setInputValue(newValue);
  }

  let handleSearch = function() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <div className = {s.container}>
      <SearchBar
        value = {inputValue}
        handleValue = {handleValue}
        handleSearch = {handleSearch}
        disabled = {loading}
      />
    </div>
  );
}