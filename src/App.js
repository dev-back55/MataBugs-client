import React, { useEffect } from 'react';
import SearchView from './views/SearchView/SearchView';
import CardDetails from './components/CardDetails/CardDetails';
import LogInLogUp from './components/LogInLogUp/LogInLogUp';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  const { player } = useSelector((state) => state.player);

// useEffect(() => {
//     // Envia a Home cuando esta logeado
// }, [player])

  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = { <SearchView /> } />
        <Route exact path = '/player/:id' element = { <CardDetails /> } />
        <Route exact path = '/login' element = { !player?.player ? <LogInLogUp /> : <Navigate to="/"/> } />
      </Routes>
    </div>
  );
}

export default App;