import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Categories from './componentes/Categories';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Categories />
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
