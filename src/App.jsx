import './App.css'
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
  return (<button className="square" onClick={handleClick}>{value}</button>);
}

function App() {
  return (
    <div>
      <h1>Splendor Duel</h1>
      <h2>Gameboard test</h2>
      
      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div className='board-row'>
        <Square value="13"/>
        <Square value="2"/>
        <Square value="1"/>
        <Square value="8"/>
        <Square value="23"/>
      </div>

      <div>
        <Square value="12"/>
        <Square value="11"/>
        <Square value="10"/>
        <Square value="9"/>
        <Square value="24"/>
      </div>
    </div>
  )
}

export default App
