import {
  HashRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import { AppHeader } from '../appHeader/AppHeader';
import {
  ComicsPage, MainPage, NotFoundPage, SingleComicPage,
} from '../../pages';

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/characters" />
            </Route>
            <Route exact path="/characters">
              <MainPage />
            </Route>
            <Route exact path="/comics">
              <ComicsPage />
            </Route>
            <Route path="/comics/:comicId">
              <SingleComicPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
