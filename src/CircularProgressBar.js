import React from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;
  const circumference = 2 * Math.PI * 50; // assuming a radius of 50px
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg viewBox="0 0 100 100">
        <circle className="progress-bar-bg" cx="50" cy="50" r="50" />
        <circle
          className="progress-bar"
          cx="50"
          cy="50"
          r="50"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
        <text x="50" y="50" className="progress-text">
          {value.toFixed(2)} $
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
