import React from 'react';
import SearchView from './views/SearchView/SearchView';
import CardDetails from './components/CardDetails/CardDetails';
import HallOfFameView from './views/HallOfFameView/HallOfFameView';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = { <SearchView /> } />
        <Route exact path = '/player/:id' element = { <CardDetails /> } />
        <Route exact path = '/hallOfFame' element = { <HallOfFameView /> } />
      </Routes>
    </div>
  );
}

export default App;
