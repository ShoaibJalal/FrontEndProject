import React from 'react';
import MoviesList from './MoviesList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MoviesPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Movies List</h1>

        <MoviesList movies={this.props.movies} />
      </div>
    );
  }
}

MoviesPage.propTypes = {
  movies:PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MoviesPage);