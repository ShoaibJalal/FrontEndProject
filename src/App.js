import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MoviesPage from './MoviesPage';
import MovieForm from './MovieForm';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
);

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/movies" label="Movies" />
          <ActiveLink activeOnlyWhenExact to="/movies/new" label="Add a new movie" />
        </div>

        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/new" component={MovieForm} />
      </div>
);
  }
}

export default App;
