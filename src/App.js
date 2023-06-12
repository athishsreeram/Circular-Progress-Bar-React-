import React, { useState } from 'react';
import CircularProgressBar from './CircularProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const maxValue = 20;

  const handleProgressChange = (event) => {
    const newProgress = parseFloat(event.target.value);
    setProgress(newProgress);
  };

  return (
    <div>
      <CircularProgressBar value={progress} maxValue={maxValue} />
      <div className="input-container">
        <input
          type="range"
          min={0}
          max={maxValue}
          step={0.01}
          value={progress}
          onChange={handleProgressChange}
        />
      </div>
    </div>
  );
};

export default App;
