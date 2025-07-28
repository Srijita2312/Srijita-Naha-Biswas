import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Srijita" school="Green Valley School" total={450} goal={5} />
    </div>
  );
}

export default App;
