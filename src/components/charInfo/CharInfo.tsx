import './charInfo.scss';
import { useEffect, useState } from 'react';
import { Character } from '../../models/Caracter';
import { useMarvelService } from '../../services/marvelService/MarvelService';
import { CurrentStage } from '../../hooks/http.hook';
import { setContent } from '../../utils/setContent';

interface CharInfoProps {
    charId?: number;
}

export const CharInfo = ({ charId }: CharInfoProps) => {
  const [character, setCharacter] = useState<Character>({} as Character);
  const {
    getCharacterById, clearError, stage, setStage,
  } = useMarvelService();

  useEffect(() => {
    if (charId) {
      clearError();
      getCharacterById(charId)
        .then(setCharacter)
        .then(() => setStage(CurrentStage.Confirmed));
    }
  }, [charId]);

  return (
    <>
      {charId && (
      <div className="char__info">
        {setContent(stage, () => <View char={character} />)}
      </div>
      )}
    </>
  );
};

const View = ({ char }: { char: Character }) => {
  const hasImg = char.thumbnail.path?.includes('not_available');
  return (
    <>
      <div className="char__basics">
        <img
          src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
          alt={char.name}
          style={{ objectFit: hasImg ? 'unset' : 'cover' }}
        />
        <div>
          <div className="title title_fs-22 title_upper">{char.name}</div>
          <div className="char__btns">
            {char.urls.map((url) => (
              <a href={url.url} key={url.url} className="button button__secondary">
                <div className="inner">{url.type}</div>
              </a>
            )).slice(0, 2)}
          </div>
        </div>
      </div>
      <div className="char__descr">
        {char.description || 'Unfortunately, no description was found for this character.'}
      </div>
      {!!char.comics.items?.length
            && (
            <>
              <div className="char__comics">Comics:</div>
              <ul className="char__comics-list">
                {
                      char.comics.items?.map((item, i) => {
                        if (i > 9) return;
                        return (
                        // eslint-disable-next-line react/no-array-index-key
                          <li className="char__comics-item" key={i}>{item.name}</li>
                        );
                      })
                  }
              </ul>
            </>
            )}
    </>
  );
};
