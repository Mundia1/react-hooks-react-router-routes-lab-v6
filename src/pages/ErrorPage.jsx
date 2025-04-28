// src/pages/ErrorPage.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error); // Log the error for debugging

  return (
    <div>
      <NavBar />
      <h1>Oops! Looks like something went wrong.</h1>
      <p>We apologize for the inconvenience.</p>
      {/* You could conditionally display more error info if needed */}
      {/* <p><i>{error.statusText || error.message}</i></p> */}
    </div>
  );
}

export default ErrorPage;