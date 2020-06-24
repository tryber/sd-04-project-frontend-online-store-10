import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Logo from './images/logo-react.png';
import shoppingCart from './pages/shoppingCart';
import itemDetails from './pages/itemDetails'
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
            <Route exact path="/" component={Home} />
            <Route path="/shopping-cart" component={shoppingCart} />
            <Route path="/item-details/:id" component={itemDetails} />
          </Switch>
        </main>
      </div>
    </Router>

  );
}

export default App;
