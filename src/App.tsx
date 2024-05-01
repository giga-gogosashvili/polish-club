import { useState } from 'react';
import './App.css';
import TopAppBar from '../Components/TopAppBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Magda's Website</p>
        <TopAppBar></TopAppBar>
      </div>
    </>
  );
}

export default App;
