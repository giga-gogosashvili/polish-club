import './App.css';
import Root from '../Components/Root';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discover from '../Components/Discover';

// import Root from './components/Root';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Root />} />
          <Route path="main/:discover" element={<Discover />} />
          {/* <Route path="invoices/create" element={<EditCreate />} />
          <Route path="invoices/:id/edit" element={<EditCreate />} /> */}
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
