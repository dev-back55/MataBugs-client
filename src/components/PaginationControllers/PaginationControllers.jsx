import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomSelect from '../CustomSelect/CustomSelect';
import PaginationButton from '../PaginationButton/PaginationButton';
import { searchPlayers, updateFilter } from '../../redux/action/searchPlayersActions';
import { generateQueryWithState } from '../../lib/util';

import s from './PaginationControllers.module.css';

export default function PaginationControllers() {

  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  let handleChangeSelect = function(field, newValue) {
    if (searchState[field] === newValue) return;
    dispatch(updateFilter({ field, newValue }));
    dispatch(searchPlayers(generateQueryWithState({ ...searchState, [field]: newValue })));
  }

  let handleNextPage = function() {
    handleChangeSelect("currentPage", searchState.currentPage + 1);
  }

  let handlePreviousPage = function() {
    handleChangeSelect("currentPage", searchState.currentPage - 1);
  }

  return (
    <div className = {s.container}>
      <CustomSelect
        disabled = {searchState.loading}
        valueSelected = {searchState.orderBy}
        values = {["ranking", "nickname"]}
        handleValue = {handleChangeSelect}
        name = {"orderBy"}
      />
      <CustomSelect
        disabled = {searchState.loading}
        valueSelected = {searchState.order}
        values = {["ascending", "descending"]}
        handleValue = {handleChangeSelect}
        name = {"order"}
      />
      <PaginationButton
        disabled = {searchState.loading || searchState.currentPage === 1}
        handler = {handlePreviousPage}
      />
      <PaginationButton
        disabled = {searchState.loading || searchState.currentPage === searchState.pages}
        handler = {handleNextPage}
        reverse = {true}
      />
    </div>
  );
}