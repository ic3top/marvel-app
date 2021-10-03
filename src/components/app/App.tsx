import {useState} from "react";

import {AppHeader} from "../appHeader/AppHeader";
import {RandomChar} from "../randomChar/RandomChar";
import {CharList} from "../charList/CharList";
import {CharInfo} from "../charInfo/CharInfo";
import {AppBanner} from "../appBanner/AppBanner";
import {ComicsList} from "../comicsList/ComicsList";
import {SingleComic} from "../singleComic/singleComic";

import {HashRouter as Router, Route, Switch} from "react-router-dom";

import bgHero from '../../resources/images/bg-hero.png';

function App() {
    const [selectedChar, setSelectedChar] = useState<number | undefined>();
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/">
                        </Route>
                        <Route path="/characters">
                            <RandomChar/>
                            <div className="char__content">
                                <CharList selectChar={(id) => setSelectedChar(id)}/>
                                <CharInfo charId={selectedChar}/>
                                <img className="bg-decoration" src={bgHero} alt="vision"/>
                            </div>
                        </Route>
                        <Route path="/comics/:id">
                            <SingleComic/>
                        </Route>
                        <Route path="/comics">
                            <AppBanner/>
                            <ComicsList/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
