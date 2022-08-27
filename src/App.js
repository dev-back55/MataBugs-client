import Cards from './components/Cards/Cards';
import './App.css';

import { listOfUsers } from './lib/userModel';

function App() {
  return (
    <div className="App">
      <Cards
        users = {listOfUsers}
      />
    </div>
  );
}

export default App;
