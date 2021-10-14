import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './singleComic.scss';

import { Helmet } from 'react-helmet';
import { Comic } from '../../models/Comic';
import { useMarvelService } from '../../services/marvelService/MarvelService';
import { ErrorMessage } from '../errorMessage/ErrorMessage';
import { Loader } from '../loader/Loader';

const ComicView = ({ comic }: { comic: Comic }) => (
  <div className="single-comic">
    <Helmet>
      <meta
        name="description"
        content={`${comic.title} comic book`}
      />
      <title>{comic.title}</title>
    </Helmet>
    <img src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`} alt={comic.title} className="single-comic__img" />
    <div className="single-comic__info">
      <h2 className="single-comic__name">{comic.title}</h2>
      <p className="single-comic__descr">{comic.description}</p>
      <p className="single-comic__descr">
        {comic.pageCount}
        {' '}
        pages.
      </p>
      <p className="single-comic__descr">
        Language:
        {comic.textObjects?.[0].language}
      </p>
      {comic.prices?.map((i) => {
        if (!i.type || !i.price) return;
        return (
          <div className="single-comic__price">
            {i.type}
            :
            {' '}
            {i.price}
            $
          </div>
        );
      })}
    </div>
    <Link to="/comics" className="single-comic__back">Back to all</Link>
  </div>
);

export const SingleComic = () => {
  const { comicId } = useParams<{comicId: string}>();
  const [comic, setComic] = useState<Comic>({} as Comic);
  const {
    getComicById, error, loading, clearError,
  } = useMarvelService();

  useEffect(() => {
    clearError();
    getComicById(comicId).then(setComic);
  }, [comicId]);

  const content = !error && !loading ? <ComicView comic={comic} /> : null;

  return (
    <>
      {content}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};
