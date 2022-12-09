import { CasinoContextProvider } from './context/CasinoContext';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import About from './pages/About';

import './App.css';
import CasinoContext from './context/CasinoContext';
import CasinoList from './components/CasinoList';


function App() {
  return (
    <CasinoContextProvider>
      <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        </main>
        <Footer />
        </div>
      </Router>
    </CasinoContextProvider>
  );
}

export default App;
