import { Link } from 'react-router-dom';

import './comicsList.scss';
import { useEffect, useState } from 'react';
import { useMarvelService } from '../../services/marvelService/MarvelService';
import { Comic } from '../../models/Comic';
import { ComicsListSkeleton } from './comicsListSkeleton/ComicsListSkeleton';
import { CurrentStage } from '../../hooks/http.hook';
import { setContent } from '../../utils/setContent';

export const ComicsList = () => {
  const { getAllComics, stage, setStage } = useMarvelService();
  const [comics, setComics] = useState<Comic[]>([]);
  const [offset, setOffset] = useState(0);

  const onRequest = (comicsOffset: number) => {
    getAllComics(comicsOffset)
      .then((newComics) => setComics((prev) => [...prev, ...newComics]))
      .then(() => setStage(CurrentStage.Confirmed))
      .finally(() => setOffset((prevOffset) => prevOffset + 8));
  };

  useEffect(() => {
    onRequest(offset);
  }, []);

  const renderComics = (arr: Comic[]) => arr.map((item, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <li className="comics__item" key={i}>
      <Link to={`comics/${item.id}`}>
        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.title} className="comics__item-img" />
        <div className="comics__item-name">{item.title}</div>
        <div className="comics__item-price">{item.prices[0].price}</div>
      </Link>
    </li>
  ));

  return (
    <div className="comics__list">
      <ul className="comics__grid">
        {setContent(stage, () => <>{renderComics(comics)}</>, () => (
          <>
            {renderComics(comics)}
            <ComicsListSkeleton />
          </>
        ))}
      </ul>
      <button
        className="button button__main button__long"
        onClick={() => onRequest(offset)}
        disabled={stage === CurrentStage.Loading}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};
