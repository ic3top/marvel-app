import './charList.scss';
import { useEffect, useState } from 'react';
import { Character } from '../../models/Caracter';
import { useMarvelService } from '../../services/marvelService/MarvelService';
import { CharListSkeleton } from './charListSkeleton/CharListSkeleton';
import { CurrentStage } from '../../hooks/http.hook';
import { setContent } from '../../utils/setContent';

let CHARS_OFFSET: number = 210;

export const CharList = ({ selectChar }: {selectChar: (id: number) => void}) => {
  const [chars, setChars] = useState<Character[]>([]);
  const [selectedCharId, setSelectedCharId] = useState<number | null>(null);
  const {
    stage, setStage, getAllCharacters,
  } = useMarvelService();

  useEffect(() => {
    const windowOnScroll = () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadChars();
      }
    };
    loadChars()
      .then(() => window.addEventListener('scroll', windowOnScroll));

    return () => {
      window.removeEventListener('scroll', windowOnScroll);
    };
  }, []);

  function loadChars(): Promise<void> {
    return getAllCharacters(CHARS_OFFSET)
      .then(onCharListLoaded)
      .finally(() => {
        CHARS_OFFSET += 9;
        setStage(CurrentStage.Confirmed);
      });
  }

  function onSelectChar(id: number) {
    selectChar(id);
    setSelectedCharId(id);
  }

  function onCharListLoaded(newChars: Character[]) {
    setChars((prevChars) => prevChars.concat(newChars));
  }

  const charsContent = chars.map((ch) => {
    const hasImg = ch.thumbnail.path?.includes('not_available');
    return (
      <li
        className={`char__item${selectedCharId === ch.id ? ' char__item_selected' : ''}`}
        tabIndex={0}
        key={ch.id}
        onClick={() => onSelectChar(ch.id)}
        onKeyPress={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            onSelectChar(ch.id);
          }
        }}
      >
        <img
          src={`${ch.thumbnail.path}.${ch.thumbnail.extension}`}
          alt={ch.name}
          style={{ objectFit: hasImg ? 'unset' : 'cover' }}
        />
        <span className="title title_upper title_white title_fs-22">{ch.name}</span>
      </li>
    );
  });

  return (
    <div className="char__list">
      <ul className="char__grid">
        {setContent(stage, () => <>{charsContent}</>, () => (
          <>
            {charsContent}
            <CharListSkeleton />
          </>
        ))}
      </ul>
    </div>
  );
};
