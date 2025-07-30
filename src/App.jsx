import React from 'react';
import { FaUser } from 'react-icons/fa'; 

function App() {
  const options  = [
  "Electronic Gadgets",
  "Cycle",
  "Room items",
  "Books and Notes",
  "Stationaries",
  "Sports and Other items",
];
;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b-from-gray-600 to-white-100">
      
      <div className="bg-black text-white py-6 flex justify-between items-center px-6">
      
        <div className="w-1/3"></div>

       
        <div className="text-3xl font-bold text-center w-1/3">EZRent</div>

      
        <div className="w-1/3 flex justify-end items-center space-x-2">
          <FaUser />
          <span className="text-sm">Login</span>
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-gray-800 to-gray-400 text-center py-4">
        <h1 className="text-2xl text-white-300 font-semibold">Welcome to EZRent</h1>
      </div>

      
      <div className="overflow max-h-[500px] p-6 space-y-8">
        {options.map((opt, index) => (
          <button
            key={index}
            className="w-full h-40 py-8 text-white text-xl bg-gray-500 hover:bg-gray-600 rounded-lg shadow-md"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;


