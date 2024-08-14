import './App.css';
import Root from '../Components/Root';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cuisine from '../Components/Cuisine';
import Magda from '../Components/Magda';
import Traditions from '../Components/Traditions';
import Cities from '../Components/Cities';
import Polish from '../Components/Polish';

// import Root from './components/Root';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/magda" element={<Magda />} />
          {/* <Route path="/uczsie" element={<UczSie />} /> */}
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/polish" element={<Polish />} />

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
