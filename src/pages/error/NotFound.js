import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>We couldn't find the page you were looking for. This is either because:</p>
      <ul>
        <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
        <li>The page you are looking for has been moved or deleted.</li>
      </ul>
      <p>You can return to our homepage by <Link to="/">clicking here</Link>, or you can try searching for the content you are seeking by <Link to="/search">clicking here.</Link></p>
    </div>
  );
};

export default NotFound;