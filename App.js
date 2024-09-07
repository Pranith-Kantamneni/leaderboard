import logo from './logo.svg';
import './App.css';
import Runners from './Runners.jsx'
import Winners from './Winners.jsx'

function App() {
  return (
    <div className="App">
    <header>
      <div className="navbar">
        <h1>Leaderboard</h1>
        <div className="section">
            <button className='buttons' id="lbutton"type="button">Organisation</button>
            <button className='buttons'id ="rbutton">Department</button>
        </div>
      </div>
    </header>
<div className='manage'>  
  <Winners />
  <Runners /></div>

  
  
  </div>
  );
}

export default App;
