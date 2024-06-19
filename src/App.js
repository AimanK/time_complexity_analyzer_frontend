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
    <div>
      <Header />
          <div>
            <div>
              {/* Code Input Section */}
              <h1>Time Complexity Analyzer</h1>
              <textarea
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