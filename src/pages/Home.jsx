// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movies data from json-server on port 4000
    fetch('http://localhost:4000/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error("Fetching movies failed:", error);
      });
  }, []);

  return (
    <div>
      <NavBar /> {/* Render NavBar unconditionally */}
      <h1>Home Page</h1> {/* Render H1 unconditionally */}
      {/* Conditionally render content based on state */}
      {loading && <p>Loading movies...</p>}
      {error && <p>Error loading movies: {error.message}</p>}
      {!loading && !error && (
        <div className="movie-list">
          {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;