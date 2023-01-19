import { useContext, useState } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import Modal from '../ui/Modal';
import Backdrop from '../ui/Backdrop';


function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const [modalState,setModalState] = useState(false)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function cancelModaHandler(){
    setModalState(false)
  }

  function clickModaHandler(){
    setModalState(true)
  }

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={clickModaHandler}>
            <span>{itemIsFavorite ? 'Устроить бунт' : 'Птичку в клетку!'}</span>
            {itemIsFavorite ? <img className={classes.maidodyr} src='https://firebasestorage.googleapis.com/v0/b/react-training-ca974.appspot.com/o/source%2Ffinka.webp?alt=media&token=19e318b2-65c7-47b0-b93e-c53b69510244'/> : <img className={classes.maidodyr} src='https://firebasestorage.googleapis.com/v0/b/react-training-ca974.appspot.com/o/source%2Flol.webp?alt=media&token=abba221f-3b10-492e-b154-44e1fa73efb8'/>}
          </button>
          {modalState && <Modal personId={props.id} cancelClose={cancelModaHandler} confirm = {toggleFavoriteStatusHandler} />}
          {modalState && <Backdrop onCancel={cancelModaHandler} />}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
