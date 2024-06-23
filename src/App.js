import React, { useState } from 'react';
import Header from './layout/Header';
import ComplexityInfoBox from './layout/ComplexityInfoBox';
import CodeInputBox from './layout/CodeInputBox';
import './App.css';
import './index.css';

function App() {

  const [code, setCode] = useState('');
  const [result, setResult] = useState('O(n)');
  const [error, setError] = useState(null);
  const [data, setData] = useState([
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 4 },
    { x: 5, y: 5 },
    { x: 6, y: 6 },
    { x: 7, y: 7 },
    { x: 8, y: 8 },
    { x: 9, y: 9 },
    { x: 10, y: 10 },
    { x: 11, y: 11 },
    { x: 12, y: 12 },
    { x: 13, y: 13 },
    { x: 14, y: 14 },
    { x: 15, y: 15 },
    // Add more data points as needed for O(n)
  ]);

  const logData = [
    { x: 1, y: 0 },
    { x: 2, y: Math.log(2) },
    { x: 3, y: Math.log(3) },
    { x: 4, y: Math.log(4) },
    { x: 5, y: Math.log(5) },
    { x: 6, y: Math.log(6) },
    { x: 7, y: Math.log(7) },
    { x: 8, y: Math.log(8) },
    { x: 9, y: Math.log(9) },
    { x: 10, y: Math.log(10) }, 
    { x: 11, y: Math.log(11) },
    { x: 12, y: Math.log(12) },
    { x: 13, y: Math.log(13) },
    { x: 14, y: Math.log(14) },
    { x: 15, y: Math.log(15) },
    // Add more data points as needed for O(log n)
  ];

  return (
    <div className="min-h-screen bg-slate-900 shadow-lg from-zinc-700">
      <Header />
        <h1 className="font-black text-center py-2 m-3 text-cyan-200">Time Complexity Analyzer</h1>
          <div className="flex h-full">
            {/* Results Section */}
            <div className="w-1/2 p-4">
              <ComplexityInfoBox result={result} error={error} data={result === 'O(n)' ? data : logData} />
            </div>
             {/* Code Input Section */}
            <div className="w-1/2 p-4">
              <CodeInputBox code={code} setCode={setCode} />
            </div>
          </div>
    </div>
  );
}

export default App;