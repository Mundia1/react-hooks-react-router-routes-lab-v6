// src/pages/Directors.jsx
import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch directors data from json-server on port 4000
    fetch('http://localhost:4000/directors')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setDirectors(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error("Fetching directors failed:", error);
      });
  }, []);

  return (
    <div>
      <NavBar /> {/* Render NavBar unconditionally */}
      <h1>Directors Page</h1> {/* Render H1 unconditionally */}
      {/* Conditionally render content based on state */}
      {loading && <p>Loading directors...</p>}
      {error && <p>Error loading directors: {error.message}</p>}
      {!loading && !error && (
        <div>
          {directors.map(director => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {/* Handle potential missing movies array */}
                {director.movies && director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Directors;