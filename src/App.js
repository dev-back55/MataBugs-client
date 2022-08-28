import React from 'react';
import SearchView from './views/SearchView/SearchView';
import CardDetails from './components/CardDetails/CardDetails';
import './App.css';

function App() {

  return (
    <div className="App">
      <SearchView />
      <br></br>
      <CardDetails />
    </div>
  );
}

export default App;
