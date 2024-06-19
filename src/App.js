import React, { useState } from 'react';
import Header from './layout/Header';
import ComplexityInfoBox from './layout/ComplexityInfoBox';
import './App.css';
import './index.css';

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="bg-slate-900 shadow-lg from-zinc-700">
      <Header />
          <div>
            <div className="h-screen">
              {/* Code Input Section */}
              <h1 className="font-black text-center py-2 m-3 text-cyan-200">Time Complexity Analyzer</h1>
              <textarea
                className=""
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your code here..."
              />
            </div>
            <div>
              {/* Results Section */}
              <ComplexityInfoBox result={result} error={error} />
            </div>
         </div>
    </div>
  );
}

export default App;