import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';

const CodeBox = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyCodeToClipboard = () => {
    clipboardCopy(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500); // Reset copy status after 1.5 seconds
  };

  return (
    <div className="p-5 rounded-md shadow-md relative" style={{ backgroundColor: '#333333' }}>
      <pre className="overflow-x-auto">
        <code className="text-sm font-mono whitespace-pre">{code}</code>
      </pre>

      <button
        className={`absolute top-2 right-2 py-2 px-4 text-xs rounded my-2 mx-2 ${
          isCopied ? 'bg-green-600' : 'bg-pink-600'
        } text-white`}
        onClick={copyCodeToClipboard}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>

    </div>
  );
};

export default CodeBox;
