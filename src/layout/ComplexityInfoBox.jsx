import React, { useState, useEffect } from 'react';
import LinearLineChart from '../LinearLineChart';
import LogLineChart from '../LogLineChart';
import axios from 'axios';
import '../App.css';

function ComplexityInfoBox() {

    const [code, setCode] = useState('');
      const [result, setResult] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

    const linearData = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
      ];

      const logData = [
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 4, y: 2 },
        { x: 8, y: 3 },
        { x: 16, y: 4 },
      ];


    const analyzeCode = async () => {
        setLoading(true);
        setError(null);
    
        try {
          const response = await axios.post('http://localhost:8000/analyze', { code });
          console.log('Response from backend:', response.data);
          setResult(response.data);
        } catch (error) {
          setError('Error analyzing code. Please try again.');
          console.error('Error analyzing code:', error);
        } finally {
          setLoading(false);
        }
      };

  return (
    <div>
        <button onClick={analyzeCode} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
        {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          <h2>Result: {result}</h2>
          <p>Time complexity: {result}</p>
          {result === 'O(n)' ? (
            <LinearLineChart data={linearData} />
          ) : result === 'O(log n)' ? (
            <LogLineChart data={logData} />
          ) : (
            <p>Unsupported complexity type.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default ComplexityInfoBox