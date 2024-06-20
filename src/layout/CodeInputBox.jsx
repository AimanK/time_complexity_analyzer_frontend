import React, { useState } from 'react'


function CodeInputBox() {

    const [code, setCode] = useState('');

  return (
        <div className="flex-1 h-full">
            <textarea
            className="bg-slate-800 w-full p-2 rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code here..."
            />
        </div>
  )
}

export default CodeInputBox