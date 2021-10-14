import { Helmet } from 'react-helmet';

import { AppBanner } from '../components/appBanner/AppBanner';
import { ComicsList } from '../components/comicsList/ComicsList';

export const ComicsPage = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="Marvel comics catalog"
      />
      <title>Marvel comics</title>
    </Helmet>
    <AppBanner />
    <ComicsList />
  </>
);
