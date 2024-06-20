import React, { useState } from 'react';
import LinearLineChart from '../LinearLineChart';
import LogLineChart from '../LogLineChart';

function ComplexityInfoBox( { result, error, data } ) {

  return (
    <div className="flex-1 h-full">
      {error && <div>{error}</div>}
      {result && (
        <div>
          {result === 'O(n)' ? (
            <LinearLineChart data={data} />
          ) : result === 'O(log n)' ? (
            <LogLineChart data={data} />
          ) : (
            <p>Unsupported complexity type.</p>
          )}
          <h2>Result: {result}</h2>
          <p>Time complexity: {result}</p>
        </div>
      )}
    </div>
  );
}

export default ComplexityInfoBox;