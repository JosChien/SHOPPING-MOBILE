import React from 'react';
import './App.css';
import Menu from './components/Menu';
import logo from './image/logo.png';
import Products from './components/Products';
import CartProviders from './components/dataCart';
import Mobile from './components/mobile';
import DataProvider from './components/data';
import Cart from './components/cart';
import Details from './components/details'

// import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {
  constructor() {
    super();
    this.state={
  }
  }
  render() {
    return (
        <CartProviders> 
          <div className="App">
        <Router>
          <section className="header">
            <Menu logo={logo} />
          </section>
          <section className="my-content">
            <DataProvider>
              <Switch>
                <Route exact path="/" component={Products}/>
                <Route path="/iphone" component={Mobile}/>
                <Route path="/samsung" component={Mobile} />
                <Route path="/cart" component={Cart} />
                <Route path='/details' component={Details}/>
              </Switch>
            </DataProvider>
          </section>
          </Router>
      </div>
      </CartProviders>
    )}
}

export default App;
