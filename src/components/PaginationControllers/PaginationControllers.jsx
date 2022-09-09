import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PaginationButton from '../PaginationButton/PaginationButton';
import { searchPlayers, updateFilter } from '../../redux/action/searchPlayersActions';
import { generateQueryWithState } from '../../lib/util';

import s from './PaginationControllers.module.css';

export default function PaginationControllers() {

  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  let handleChangePage = function(newValue) {
    dispatch(updateFilter({ field: "currentPage", newValue }));
    dispatch(searchPlayers(generateQueryWithState({ ...searchState, currentPage: newValue })));
  }

  let handleNextPage = function() {
    handleChangePage(searchState.currentPage + 1);
  }

  let handlePreviousPage = function() {
    handleChangePage(searchState.currentPage - 1);
  }

  return (
    <div className = {s.container}>
      <PaginationButton
        disabled = {searchState.loading || searchState.currentPage <= 1}
        handler = {handlePreviousPage}
      />
      <span className = {s.pageCounter}>
        {`${searchState.currentPage} / ${searchState.pages}`}
      </span>
      <PaginationButton
        disabled = {searchState.loading || searchState.currentPage >= searchState.pages}
        handler = {handleNextPage}
        reverse = {true}
      />
    </div>
  );
}