import React from 'react';
import SearchView from './views/SearchView/SearchView';
import CardDetails from './components/CardDetails/CardDetails';
import LogInLogUp from './components/LogInLogUp/LogInLogUp';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = { <SearchView /> } />
        <Route exact path = '/player/:id' element = { <CardDetails /> } />
        <Route exact path = '/login' element = { <LogInLogUp /> } />
      </Routes>
    </div>
  );
}

export default App;