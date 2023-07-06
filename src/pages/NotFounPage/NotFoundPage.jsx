import React from 'react';
import { Link } from 'react-router-dom';

import { Article } from './NotFoundPageStyles';

const NotFoundPage = () => {
  return (
    <Article>
      Page not found. Go back to <Link to="/">main page</Link>
    </Article>
  );
};

export default NotFoundPage;