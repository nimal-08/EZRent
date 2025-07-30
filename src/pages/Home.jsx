import React from "react";

function Home() {
  const buttons = Array.from({ length: 10 }, (_, i) => `Option ${i + 1}`);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-brandBlue">Welcome to RentEase</h1>

      {/* Scrollable Buttons Row */}
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className="flex-shrink-0 px-6 py-2 bg-blue-200 rounded hover:bg-blue-300 transition"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
