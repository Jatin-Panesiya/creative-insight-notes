import React from "react";

interface OutputProps {
  output: string[] | null; // Define the prop type for output
}

const Output: React.FC<OutputProps> = ({ output }) => {
  return (
    <div className="bg-white rounded-md p-4">
      {output && output.length > 0
        ? output.map((line: string, i: number) => <p key={i}>{line}</p>)
        : 'Click "Run Code" to see the output here'}
    </div>
  );
};

export default Output;
