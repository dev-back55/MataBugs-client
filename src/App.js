import React from 'react';
import Cards from './components/Cards/Cards';
import CustomSelect from './components/CustomSelect/CustomSelect';
import PaginationControllers from './components/PaginationControllers/PaginationControllers';
import './App.css';

import { listOfUsers } from './lib/userModel';

function App() {

  const [ value, setValue ] = React.useState("ranking");
  const [ order, setOrder ] = React.useState("ascending");

  return (
    <div className="App">
      <CustomSelect
        valueSelected = {value}
        values = {["ranking", "nickname"]}
        handleValue = {(newValue) => setValue(newValue)}
      />
      <CustomSelect
        valueSelected = {order}
        values = {["ascending", "descending"]}
        handleValue = {(newValue) => setOrder(newValue)}
      />
      <PaginationControllers />
      <br></br>
      <Cards
        users = {listOfUsers}
      />
    </div>
  );
}

export default App;
