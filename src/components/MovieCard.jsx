// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  // Basic check if movie data and id are available
  if (!movie || movie.id === undefined) {
    return null; // Don't render if essential data is missing
  }

  return (
    <article>
        <h2>{movie.title}</h2>
        {/* Link to the individual movie page using the movie id, with specific text for tests */}
        <Link to={`/movie/${movie.id}`}>View Info</Link> {/* Updated text to "View Info" */}
    </article>
  );
};

export default MovieCard;