import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomSelect from '../CustomSelect/CustomSelect';
import { searchPlayers, updateFilter, updateFilterResetPage } from '../../redux/action/searchPlayersActions';
import { generateQueryWithState } from '../../lib/util';

import s from './Sidebar.module.scss';

export default function Sidebar() {  
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  let handleChangeSelect = function(field, newValue) {
    if (searchState[field] === newValue) return;
    dispatch(updateFilter({ field, newValue }));
    dispatch(searchPlayers(generateQueryWithState({ ...searchState, [field]: newValue })));
  }

  let handleChangeSelectResetPage = function(field, newValue) {
    if (searchState[field] === newValue) return;
    dispatch(updateFilterResetPage({ field, newValue }));
    dispatch(searchPlayers(generateQueryWithState({ ...searchState, [field]: newValue, currentPage: 1 })));
  }
  
  return (
    <div className = {s.container}>
      <h4>Filter Status: </h4>
      <CustomSelect
        disabled = {searchState.loading}
        valueSelected = {searchState.status}
        values = {["all", "oro", "plata", "bronce"]}
        handleValue = {handleChangeSelectResetPage}
        name = {"status"}
      />
      <h4>Order By: </h4>
      <CustomSelect
        disabled = {searchState.loading}
        valueSelected = {searchState.orderBy}
        values = {["ranking", "nickname"]}
        handleValue = {handleChangeSelect}
        name = {"orderBy"}
      />
      <h4>Order: </h4>
      <CustomSelect
        disabled = {searchState.loading}
        valueSelected = {searchState.order}
        values = {["ascending", "descending"]}
        handleValue = {handleChangeSelect}
        name = {"order"}
      />
    </div>
  )
}