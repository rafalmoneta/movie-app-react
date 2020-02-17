import React from 'react';
import './App.css';
import Home from './components/Home';
import MoviePage from './components/MoviePage';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie/:movieID' component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;
