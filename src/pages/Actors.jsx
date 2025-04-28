// src/pages/Actors.jsx
import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch actors data from json-server on port 4000
    fetch('http://localhost:4000/actors')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setActors(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error("Fetching actors failed:", error);
      });
  }, []);

  return (
    <div>
      <NavBar /> {/* Render NavBar unconditionally */}
      <h1>Actors Page</h1> {/* Render H1 unconditionally */}
      {/* Conditionally render content based on state */}
      {loading && <p>Loading actors...</p>}
      {error && <p>Error loading actors: {error.message}</p>}
      {!loading && !error && (
        <div>
          {actors.map(actor => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {/* Handle potential missing movies array */}
                {actor.movies && actor.movies.map((movie, index) => (
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

export default Actors;