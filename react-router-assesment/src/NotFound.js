import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Page not found!</h1>
    <p>
      <Link to="/">Return Home</Link>
    </p>
  </div>
);

export default NotFound;
