import "./charList.scss";
import {useEffect, useState} from "react";
import {useMarvelService} from "../../services/marvelService/MarvelService";
import {Character} from "../../models/Caracter";
import {CharListSkeleton} from "./charListSkeleton/CharListSkeleton";

let CHARS_OFFSET: number = 210;

export const  CharList = ({selectChar}: {selectChar: (id: number) => void}) => {
    const [chars, setChars] = useState<Character[]>([]);
    const [selectedCharId, setSelectedCharId] = useState<number | null>(null)
    const { loading, getAllCharacters } = useMarvelService();

    useEffect(() => {
        const windowOnScroll = () => {
            const {
                scrollTop,
                scrollHeight,
                clientHeight
            } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 5) {
                loadChars();
            }
        }
        loadChars().then(() => window.addEventListener('scroll', windowOnScroll));

        return () => {
            window.removeEventListener('scroll', windowOnScroll);
        }
    }, []);

    function loadChars(): Promise<void> {
        if (loading) return new Promise((resolve, reject) => resolve());
        return getAllCharacters(CHARS_OFFSET)
            .then(onCharListLoaded)
            .finally(() => {
                CHARS_OFFSET += 9;
            });
    }

    function onSelectChar(id: number) {
        selectChar(id);
        setSelectedCharId(id);
    }

    function onCharListLoaded(newChars: Character[]) {
        setChars((prevChars) => {
           return prevChars.concat(newChars)
        });
    }

    const charsContent = chars.map(ch => {
        const hasImg = ch.thumbnail.path?.includes('not_available');
        return (
            <li
                className={`char__item${selectedCharId === ch.id ? " char__item_selected" : ""}`}
                tabIndex={0}
                key={ch.id}
                onClick={() => onSelectChar(ch.id)}
                onKeyPress={(e) => {
                    if (e.key === ' ' || e.key === "Enter") {
                        onSelectChar(ch.id);
                    }
                }}
            >
                <img
                    src={ch.thumbnail.path + '.' + ch.thumbnail.extension}
                    alt={ch.name}
                    style={{ objectFit: hasImg ? 'unset' : 'cover' }}
                />
                <span className="title title_upper title_white title_fs-22">{ch.name}</span>
            </li>
        )
    });

    return (
        <div className="char__list">
            <ul className="char__grid">
                {charsContent}
                {loading && <CharListSkeleton/>}
            </ul>
        </div>
    )
}
