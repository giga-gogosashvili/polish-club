import './App.css';
import Root from '../Components/Root';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discover from '../Components/Discover';
import Cuisine from '../Components/Cuisine ';

// import Root from './components/Root';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="main/discover" element={<Discover />} />
          <Route path="main/cuisine" element={<Cuisine />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
