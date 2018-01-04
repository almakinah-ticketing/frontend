import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import { EventsList } from './containers/EventsList';
import { EventDetails } from './containers/EventDetails';
import PurchaseForm from './pages/PurchaseForm';
import About from './pages/About';
import LogIn from './pages/LogIn';
import LogInAdmin from './pages/LogInAdmin';
import SignUp from './containers/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/events" exact component={EventsList} />
          <Route path="/events?categoryId=:id" exact component={EventsList} />
          <Route path="/events?date=:date" exact component={EventsList} />
          <Route path="/events?categoryId=:id&date=:date" exact component={EventsList} />
          <Route path="/events/:id" exact component={EventDetails} />
          <Route path="/events/:id/tickets" exact component={PurchaseForm} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/admin/login" exact component={LogInAdmin} />
          <Route path="/signup" exact component={SignUp} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
