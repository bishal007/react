import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from './components/Footer';
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
