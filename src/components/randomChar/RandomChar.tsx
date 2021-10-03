import "./randomChar.scss";

import thorWeaponImg from "../../resources/images/thor-weapon.png";
import {Character} from "../../models/Caracter";
import {MarvelService} from "../../services/marvelService/MarvelService";
import {useEffect, useState} from "react";
import {Loader} from "../loader/Loader";
import {ErrorMessage} from "../errorMessage/ErrorMessage";

const RandomCharView = ({char}: {char: Character}) => {
    const {thumbnail, description, name, urls} = char;
    return (
        <div className="random-char__left">
            <img src={thumbnail?.path + '.' + thumbnail?.extension} alt="randomly picked marvel hero" className="random-char__img"/>
            <div className="random-char__info">
                <p className="random-char__name title title_fs-22 title_upper">{name}</p>
                <p className="random-char__descr text">
                    {description || 'The information about this character was not found. To read more - follow the links below'}
                </p>
                <div className="random-char__buttons">
                    <a href={urls?.[0].url} className="button button__main">
                        <span className="inner">{urls?.[0].type}</span>
                    </a>
                    <a href={urls?.[1].url} className="button button__secondary">
                        <span className="inner">{urls?.[1].type}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export const RandomChar = () => {
    const [character, setCharacter] = useState({} as Character);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const marvelService = new MarvelService();

    function fetchRandomCharacter() {
        setHasError(false);
        setIsLoading(true);
        marvelService.getRandomCharacter()
            .then(setCharacter)
            .catch(() => setHasError(true))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        fetchRandomCharacter();
    }, []);

    const errorMessage = hasError ? <ErrorMessage/> : null;
    const loader = isLoading ? <Loader/> : null;
    const content = !(isLoading || hasError) ? <RandomCharView char={character}/>: null;

    return (
        <div className="random-char">
            {errorMessage}
            {loader}
            {content}
            <div className="random-char__right">
                <div className="random-char__title title title_fs-24 title_white">Random character for today!
                    Do you want to get to know him better?
                </div>
                <div className="random-char__title  title title_fs-24 title_white">Or choose another one</div>
                <button className="button button__main" onClick={fetchRandomCharacter}>
                    <span className="inner">Try it</span>
                </button>
                <img src={thorWeaponImg} alt="mjolnir with a shield" className="random-char__decoration"/>
            </div>
        </div>
    )
}
