import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/ComponentName/Navbar';
import ProductsPage from './components/ComponentName/ProductsPage';
import ProductDetailsPage from './components/ComponentName/ProductDetailsPage';
import CreateOrderPage from './components/ComponentName/CreateOrderPage';


const App = () => {
  const isLoggedIn = true; // Example variable to represent user authentication status

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} isAdmin={false} /> {/* Example usage with user authentication */}
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route path="/products/:id" component={ProductDetailsPage} />
        <Route path="/create-order" component={CreateOrderPage} />
      </Switch>
    </Router>
  );
};

export default App;
