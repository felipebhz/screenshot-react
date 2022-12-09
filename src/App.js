import { CasinoContextProvider } from './context/CasinoContext';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';

import './App.css';
import CasinoContext from './context/CasinoContext';
import CasinoList from './components/CasinoList';


function App() {
  return (
    <CasinoContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </CasinoContextProvider>
  );
}

export default App;
