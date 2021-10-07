import {RandomChar} from "../components/randomChar/RandomChar";
import {CharList} from "../components/charList/CharList";
import {CharInfo} from "../components/charInfo/CharInfo";
import {useState} from "react";
import bgHeroImg from "../resources/images/bg-hero.png";

export const MainPage = () => {
        const [selectedChar, setSelectedChar] = useState<number | undefined>();

        return (
            <>
                    <RandomChar/>
                    <div className="char__content">
                            <CharList selectChar={(id) => setSelectedChar(id)}/>
                            <CharInfo charId={selectedChar}/>
                            <img className="bg-decoration" src={bgHeroImg} alt="vision"/>
                    </div>
            </>
        )
}
