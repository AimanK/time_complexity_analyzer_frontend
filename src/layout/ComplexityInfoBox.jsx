import React from 'react';
import LinearLineChart from '../LinearLineChart';
import LogLineChart from '../LogLineChart';

function ComplexityInfoBox({ result, error }) {
  return (
    <div>
      {error && <div>{error}</div>}
      {result && (
        <div>
          <h2>Result: {result}</h2>
          <p>Time complexity: {result}</p>
          {result === 'O(n)' ? (
            <LinearLineChart />
          ) : result === 'O(log n)' ? (
            <LogLineChart />
          ) : (
            <p>Unsupported complexity type.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ComplexityInfoBox;