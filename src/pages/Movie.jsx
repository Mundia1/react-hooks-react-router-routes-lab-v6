// src/pages/Movie.jsx
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movie data based on the id from json-server on port 4000
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error(`Workspaceing movie with id ${id} failed:`, error);
      });
  }, [id]); // Effect depends on the id parameter

  // Conditional rendering for loading, error, and movie not found states
  if (loading) return (
    <div>
      <NavBar />
      <p>Loading movie...</p>
    </div>
  );
  if (error) return (
    <div>
      <NavBar />
      <p>Error loading movie: {error.message}</p>
    </div>
  );
  // If not loading and no error, but movie is null, it means it wasn't found
  if (!movie) return (
     <div>
       <NavBar />
       <p>Movie not found.</p>
     </div>
   );

  // Render movie details when data is loaded and no error
  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        Genres:
        {/* Display genres, handle potential missing genres array */}
        {movie.genres && movie.genres.map((genre, index) => (
          <span key={index} style={{ marginRight: '10px' }}>{genre}</span>
        ))}
      </div>
      {/* Add other movie details as needed */}
    </div>
  );
};

export default Movie;