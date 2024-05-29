import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Add some basic styling

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [runtime, setRuntime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeCode = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate runtime measurement (adjust as needed)
      const start = performance.now();
      await new Promise(resolve => setTimeout(resolve, 100)); // Simulate delay
      const end = performance.now();
      setRuntime(end - start);

      // Send code to backend for complexity analysis
      const response = await axios.post('http://localhost:8000/analyze', { code });
      console.log('Response from backend:', response.data); // Log response
      setResult(response.data);
    } catch (error) {
      setError('Error analyzing code. Please try again.');
      console.error('Error analyzing code:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Time Complexity Analyzer</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your code here..."
      />
      <button onClick={analyzeCode} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          <h2>Result: {result}</h2>
          <p>Time complexity: {result}</p>
        </div>
      )}
      {runtime !== null && (
        <div className="runtime">
          <h2>Runtime: {runtime.toFixed(2)} ms</h2>
        </div>
      )}
    </div>
  );
}

export default App;