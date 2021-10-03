import "./charInfo.scss";
import { Skeleton } from "../skeleton/Skeleton";
import {useEffect, useState} from "react";
import {Character} from "../../models/Caracter";
import {MarvelService} from "../../services/marvelService/MarvelService";
import {ErrorMessage} from "../errorMessage/ErrorMessage";

interface CharInfoProps {
    charId?: number;
}

export const CharInfo = ({ charId }: CharInfoProps) => {
    const [character, setCharacter] = useState<Character | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const skeleton = !isLoading || hasError ? null : <Skeleton/>;
    const errorMessage = hasError ? <ErrorMessage/> : null;
    const content = !(isLoading || hasError || !character) ? <View char={character}/> : null;

    const marvelService = new MarvelService();

    useEffect(() => {
        if (charId) {
            setIsLoading(true);
            setHasError(false);
            marvelService.getCharacterById(charId)
                .then(setCharacter)
                .catch(() => setHasError(true))
                .finally(() => setIsLoading(false));
        }
    }, [charId]);

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {content}
        </div>
    )
}

const View = ({char}: { char: Character }) => {
    const hasImg = char.thumbnail.path?.includes('not_available');
    return (
        <>
            <div className="char__basics">
                <img
                    src={char.thumbnail.path + '.' + char.thumbnail.extension}
                    alt={char.name}
                    style={{ objectFit: hasImg ? 'unset' : 'cover' }}
                />
                <div>
                    <div className="title title_fs-22 title_upper">{char.name}</div>
                    <div className="char__btns">
                        <a href="#" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href="#" className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {char.description || 'Unfortunately, no description was found for this character.'}
            </div>
            {!!char.comics.items?.length
            && <>
              <div className="char__comics">Comics:</div>
              <ul className="char__comics-list">
                  {
                      char.comics.items?.map((item, i) => {
                          if (i > 9) return;
                          return (
                              <li className="char__comics-item" key={i}>{item.name}</li>
                          )
                      })
                  }
              </ul>
            </>}
        </>
    )
}
