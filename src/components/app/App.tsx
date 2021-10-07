import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {AppHeader} from "../appHeader/AppHeader";
import {SingleComic} from "../singleComic/singleComic";
import {ComicsPage, MainPage} from "../../pages";

function App() {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/characters"/>
                        </Route>
                        <Route path="/characters">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                        <Route path="/comics/:id">
                            <SingleComic/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
