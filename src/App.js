import Card from './components/Card/Card';
import './App.css';

import { oneUser } from './lib/userModel';

function App() {
  return (
    <div className="App">
      <h1>Vamos MATABUGS</h1>
      <Card
        id = {oneUser.id}
        nickname = {oneUser.nickname}
        status = {oneUser.status}
        ranking = {oneUser.ranking}
        avatar = {oneUser.avatar}
      />
    </div>
  );
}

export default App;
