import React from 'react';
// import { Button } from './components/ui/button'

function App() {
  return (
    <div className="text-center">
      <header className="bg-[#1d1d1d] min-h-[100vh] flex flex-col items-center justify-center text-xl text-white">
        <img src={process.env.PUBLIC_URL + '/logo.svg'} className="animate-spin h-[40vh]" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb] hover:underline mt-4"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
