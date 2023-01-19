import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>BLR KGB</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Розыск</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Добавить объект</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Докукарекались
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
