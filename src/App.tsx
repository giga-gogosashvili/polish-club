import { useState } from 'react';
import './App.css';
import TopAppBar from '../Components/TopAppBar';
import Box from '@mui/material/Box';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box flexDirection="row">
        <TopAppBar></TopAppBar>
      </Box>
    </>
  );
}

export default App;
