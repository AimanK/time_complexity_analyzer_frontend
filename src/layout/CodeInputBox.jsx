import React, { useState } from 'react'


function CodeInputBox() {

    const [code, setCode] = useState('');

  return (
        <div className="flex-1 h-full mr-3">
            <button className="rounded-full bg-blue-500 text-white px-4 py-2 m-2 hover:bg-blue-400">Run Code</button>
            <button className="rounded-full bg-gray-400 text-white px-4 py-2 m-2 hover:bg-gray-500">Reset</button>
            <textarea
            className="h-3/4 resize-y bg-slate-800 w-full rounded shadow-md p-3"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code here..."
            />
        </div>
  )
}

export default CodeInputBox