import React from 'react';
import SearchView from './views/SearchView/SearchView';
import CardDetails from './components/CardDetails/CardDetails';
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = { <SearchView /> } />
        <Route exact path = '/player/:id' element = { <CardDetails /> } />
        <Route exact path = '/createPlayer' element = { <CreatePlayer /> } />
      </Routes>
    </div>
  );
}

export default App;