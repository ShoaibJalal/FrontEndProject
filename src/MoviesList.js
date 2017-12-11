import React from 'react';
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
  const emptyMessage = (
    <p>There are no movies yet to display.</p>
  );

  const moviesList = (
    <p>Movies List</p>
  );

  return (
    <div>
      {movies.length === 0 ? emptyMessage : moviesList}
    </div>
  );
}

MoviesList.propTypes = {
  movies:PropTypes.array.isRequired
}