import { NavLink, Link } from 'react-router-dom';

import './appHeader.scss';

export const AppHeader = () => (
  <header className="app__header">
    <h1 className="app__title">
      <Link to="/">
        <span>Marvel</span>
        {' '}
        information portal
      </Link>
    </h1>
    <nav className="app__menu">
      <ul className="navigation">
        <li className="navigation__item"><NavLink to="/characters" activeClassName="navigation__item_active">Characters</NavLink></li>
        /
        <li className="navigation__item"><NavLink to="/comics" activeClassName="navigation__item_active">Comics</NavLink></li>
      </ul>
    </nav>
  </header>
);
