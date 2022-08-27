import React from 'react';
import Cards from './components/Cards/Cards';
import CustomSelect from './components/CustomSelect/CustomSelect';
import './App.css';

import { listOfUsers } from './lib/userModel';

function App() {

  const [ value, setValue ] = React.useState("ranking");


  return (
    <div className="App">
      <CustomSelect
        valueSelected = {value}
        values = {["ranking", "nickname"]}
        handleValue = {(newValue) => setValue(newValue)}
      />
      <br></br>
      <Cards
        users = {listOfUsers}
      />
    </div>
  );
}

export default App;
