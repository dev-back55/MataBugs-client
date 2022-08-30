import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import LogInLogUp from './components/LogInLogUp/LogInLogUp';
import SearchView from './views/SearchView/SearchView';
import CardDetails from './components/CardDetails/CardDetails';
import HallOfFameView from './views/HallOfFameView/HallOfFameView';
import './App.css';

function App() {

   const { player } = useSelector((state) => state.player);

  useEffect(() => {
      // Envia a Home cuando esta logeado
  }, [player])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path = '/search' element = { <SearchView /> } />
        <Route exact path = '/login' element = { !player?.player ? <LogInLogUp /> : <Navigate to="/"/> } />
        <Route exact path = '/player/:id' element = { <CardDetails /> } />
        <Route exact path = '/home' element = { <HallOfFameView /> } />
        <Route path = "*" element = { <Navigate to = "/home" replace /> } />
      </Routes>
    </div>
  );
}

export default App;
