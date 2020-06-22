import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Logo from './images/logo-react.png';
import shoppingCart from './pages/shoppingCart';
import './App.css';
import Home from './pages/home';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/"><img className="logo" src={Logo} alt="logo-react" /></Link>
        </header>
        <main>
          <Switch>
            <Route exact to="/" component={Home} />
            <Route to="/shopping-cart" component={shoppingCart} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
