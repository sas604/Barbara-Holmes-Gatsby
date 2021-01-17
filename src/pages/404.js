import * as React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

// styles

// markup
const NotFoundPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    style={{ margin: '3rem auto', maxWidth: '650px' }}
  >
    <title>Not found</title>
    <h1>Page not found</h1>
    <p>
      Sorry{' '}
      <span role="img" aria-label="Pensive emoji">
        😔
      </span>{' '}
      we couldn’t find what you were looking for.
      <br />
      {process.env.NODE_ENV === 'development' ? (
        <>
          <br />
          Try creating a page in <code>src/pages/</code>.
          <br />
        </>
      ) : null}
      <br />
      <Link to="/">Go home</Link>.
    </p>
  </motion.div>
);

export default NotFoundPage;
