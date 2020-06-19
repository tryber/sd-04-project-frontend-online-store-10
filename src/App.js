import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Categorie from './componentes/Categories';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Categorie />
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>

  );
}

export default App;
