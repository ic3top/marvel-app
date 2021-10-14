import './ComicsListSkeleton.scss';

export const ComicsListSkeleton = ({ comicsAmount = 8 }: {comicsAmount?: number}) => (
  <>
    {
            [...Array(comicsAmount).keys()]
              .map((n) => (
                <li className="comics__item" key={n}>
                  <div className="pulse skeleton__comics-img" />
                  <div className="pulse skeleton__comics-title" />
                </li>
              ))
        }
  </>
);
