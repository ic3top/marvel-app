import './charListSkeleton.scss';

export const CharListSkeleton = ({ cardsAmount = 9 }: {cardsAmount?: number}) => (
  <>
    {
            [...Array(cardsAmount).keys()]
              .map((n) => (
                <li className="char__item" key={n}>
                  <div className="pulse skeleton__card-img" />
                  <div className="pulse skeleton__card-title" />
                </li>
              ))
        }
  </>
);
