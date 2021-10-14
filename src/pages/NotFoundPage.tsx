import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import { ErrorMessage } from '../components/errorMessage/ErrorMessage';

export const NotFoundPage = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="Marvel not found page"
      />
      <title>Marvel not found</title>
    </Helmet>
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <ErrorMessage label="Hydra stole this page, try another pass or..." />
      <Link style={{ marginTop: '100px' }} to="/characters">Go to home page</Link>
    </div>
  </>
);
