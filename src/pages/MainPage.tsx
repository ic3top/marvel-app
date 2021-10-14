import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { RandomChar } from '../components/randomChar/RandomChar';
import { CharList } from '../components/charList/CharList';
import { CharInfo } from '../components/charInfo/CharInfo';
import bgHeroImg from '../resources/images/bg-hero.png';

export const MainPage = () => {
  const [selectedChar, setSelectedChar] = useState<number | undefined>();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Marvel characters/comics catalog"
        />
        <title>Marvel characters</title>
      </Helmet>
      <RandomChar />
      <div className="char__content">
        <CharList selectChar={(id) => setSelectedChar(id)} />
        <CharInfo charId={selectedChar} />
        <img className="bg-decoration" src={bgHeroImg} alt="vision" />
      </div>
    </>
  );
};
