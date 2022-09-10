import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingView from './views/LoadingView/LoadingView';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar/Sidebar';
import LogInLogUp from './components/LogInLogUp/LogInLogUp';
import SearchView from './views/SearchView/SearchView';
import CardDetails from './components/CardDetails/CardDetails';
import HallOfFameView from './views/HallOfFameView/HallOfFameView';
import ChangePasswordModal from './components/ChangePasswordModal/ChangePasswordModal';
import AboutView from './views/AboutView/AboutView';

import './constants.css';
import './App.css';

function App() {

  const { player, loadingFetchWithToken, delay } = useSelector((state) => state.player);
  const { createbyAdmin } = useSelector((state) => state.createdAdmin)

  return (
    <>
      {
        (loadingFetchWithToken || delay) && <LoadingView />
      }
      <div className = {`App ${ loadingFetchWithToken || delay ? 'hide' : ''}`}>
        <Sidebar />
        <div className = "mainZone">
          <NavBar />
          <Routes>
            <Route exact path = '/' element = { <HallOfFameView /> } />
            <Route exact path = '/home' element = { <HallOfFameView /> } />
            <Route exact path = '/search' element = { <SearchView /> } />
            <Route exact path = '/login' element = { !player?.player || createbyAdmin ? <LogInLogUp /> : <Navigate to = "/"/> } />
            <Route exact path = '/player/:id' element = { <CardDetails /> } />
            <Route exact path = '/updatepassword' element = { <ChangePasswordModal /> } />
            <Route exact path = '/about' element = { <AboutView />} />
            <Route path = "*" element = { <Navigate to = "/home" replace /> } />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
