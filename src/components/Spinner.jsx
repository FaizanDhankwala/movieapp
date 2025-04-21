import React from 'react';

const Spinner = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .spinner-square {
          rx: 1;
          width: 10px;
          height: 10px;
          fill: white;
        }

        .square1 {
          animation: move-square 1.6s linear infinite;
        }

        .square2 {
          animation: move-square 1.6s linear infinite;
          animation-delay: 0.8s;
        }

        @keyframes move-square {
          0%   { x: 1px;  y: 1px; }
          12.5% { x: 13px; y: 1px; }
          25%  { x: 13px; y: 1px; }
          37.5% { x: 13px; y: 13px; }
          50%  { x: 13px; y: 13px; }
          62.5% { x: 1px;  y: 13px; }
          75%  { x: 1px;  y: 13px; }
          87.5% { x: 1px;  y: 1px; }
          100% { x: 1px;  y: 1px; }
        }
      `}</style>

      <rect className="spinner-square square1" x="1" y="1" />
      <rect className="spinner-square square2" x="1" y="1" />
    </svg>
  );
};

export default Spinner;
