import './App.css';
import CasinoContext from './context/CasinoContext';
import CasinoList from './components/CasinoList';

import { CasinoContextProvider } from './context/CasinoContext';
import { useContext } from 'react';

function App() {
  return (
    <CasinoContextProvider>
      <div className="App">
        <h1>App Home</h1>
        <CasinoList />
      </div>
    </CasinoContextProvider>
  );
}

export default App;
