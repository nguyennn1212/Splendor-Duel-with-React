import "./App.css";
import { useState } from "react";
import { generateGemGrid } from "./game/gameStates";
import { GEM_COLORS } from "./data/constants";
import { playerInventory } from "./game/gemActions";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{
        backgroundColor: value || "lightgray",
        color: value === "white" ? "black" : "white",
      }}
    >
      {value || ""}
    </button>
  );
}

function App() {
  const [gemGrid] = useState(() => generateGemGrid());
  const [inventory, setInventory] = useState([0, 0, 0, 0, 0, 0, 0]);

  const handleGemClicked = (color) => {
    const nextInventory = playerInventory(inventory, color);
    setInventory(nextInventory);
  };

  return (
    <div>
      <h1>Splendor Duel</h1>
      <h2>Gem Grid Test</h2>
      <div className="gem-board">
        {gemGrid.map((row, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {row.map((gem, colIndex) => (
              <Square
                key={colIndex}
                value={gem}
                onSquareClick={() => handleGemClicked(gem)}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="player-inventory-display">
        <h3>Your current inventory</h3>
        <p>[{inventory.join(", ")} ]</p>
      </div>
    </div>
  );
}

export default App;
