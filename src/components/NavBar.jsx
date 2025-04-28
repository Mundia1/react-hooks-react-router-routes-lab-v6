// src/components/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Import the CSS for styling

function NavBar() {
  return (
    // Added the 'navbar' class for tests
    <nav className="navbar">
      {/* NavLinks with 'active-link active' class when active for tests */}
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link active' : ''}>Home</NavLink> {/* 'end' for exact match on "/" */}
      <NavLink to="/directors" className={({ isActive }) => isActive ? 'active-link active' : ''}>Directors</NavLink>
      <NavLink to="/actors" className={({ isActive }) => isActive ? 'active-link active' : ''}>Actors</NavLink>
    </nav>
  );
};

export default NavBar;