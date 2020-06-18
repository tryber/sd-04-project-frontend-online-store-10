import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Categorie from './Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Categorie />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
