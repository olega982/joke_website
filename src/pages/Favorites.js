import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';
import FinalModal from '../components/ui/FinalModal';
import Backdrop from '../components/ui/Backdrop';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  let phrase 

  if (favoritesCtx.totalFavorites === 0) {
    content = <img width="70%" src='https://firebasestorage.googleapis.com/v0/b/react-training-ca974.appspot.com/o/source%2Fpacany.webp?alt=media&token=2a474138-cdf4-4a4f-b522-c56cdcb047ce'/>
    phrase = "Начальник, где пополнение?"
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
    phrase= "Образоавнные интелегенты"
  }
  return (
    <section>
      <h1>{phrase}</h1>
      {content}
      {favoritesCtx.finalModal && <FinalModal/>}
      {favoritesCtx.finalModal && <Backdrop/>}
    </section>
  );
}

export default FavoritesPage;
