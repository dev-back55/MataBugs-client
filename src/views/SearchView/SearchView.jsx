import React from 'react';
import Cards from '../../components/Cards/Cards';
import PaginationControllers from '../../components/PaginationControllers/PaginationControllers';
import Sidebar from '../../components/Sidebar/Sidebar';
import { listOfUsers } from '../../lib/userModel';

import s from './SearchView.module.css';

export default function SearchView() {

  return (
      <div className = {s.container}>
          <PaginationControllers />
          <Cards
            users = {listOfUsers}
            />
      </div>
     
  );
}