import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchView from './views/SearchView/SearchView';
import CardDetails from './components/CardDetails/CardDetails';
import HallOfFameView from './views/HallOfFameView/HallOfFameView';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path = '/' element = { <SearchView /> } />
        <Route exact path = '/player/:id' element = { <CardDetails /> } />
        <Route exact path = '/hallOfFame' element = { <HallOfFameView /> } />
        <Route path = "*" element = { <Navigate to = "/" replace /> } />
      </Routes>
    </div>
  );
}

export default App;
