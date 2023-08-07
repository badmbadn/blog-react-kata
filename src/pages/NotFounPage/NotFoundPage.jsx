import React from 'react';
import { Link } from 'react-router-dom';

import { Article } from './NotFoundPageStyles';

const NotFoundPage = () => {
  return (
    <Article>
      Page not found. Go back to <Link to="/">main page</Link>
      <p>go</p>
      <p>goes</p>
      <p>goeing</p>
      <p>goeing down</p>
      <p>goeing down!</p>
      <p>go g</p>
    </Article>
  );
};

export default NotFoundPage;
