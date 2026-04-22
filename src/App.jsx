import './App.css'
import { useState } from 'react';
import { generateGemGrid } from './game/gameStates';

function Square({ value }) {
  return (
    <button
      className="square"
      style={{ backgroundColor: value || 'lightgray', color: value === 'white' ? 'black' : 'white' }}
    >
      {value || ''}
    </button>
  );
}

function App() {
  const [gemGrid] = useState(() => generateGemGrid());

  return (
    <div>
      <h1>Splendor Duel</h1>
      <h2>Gem Grid Test</h2>

      {gemGrid.map((row, rowIndex) => (
        <div className='board-row' key={rowIndex}>
          {row.map((gem, colIndex) => (
            <Square key={colIndex} value={gem} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App
