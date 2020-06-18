import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Categorie from './componentes/Categories';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Categorie />
      </header>
      <main>
        <switch>
          <Route />
        </switch>
      </main>
    </div>

  );
}

export default App;
