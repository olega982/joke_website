import { useState, useEffect, useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const mainCtx = useContext(FavoritesContext)
  const [isLoading, setIsLoading] = useState(true);
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-training-ca974-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
            
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        mainCtx.setAllPeople(meetups)
        // setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Пацаны, работаем</h1>
      <MeetupList meetups={mainCtx.allPeople} />
    </section>
  );
}

export default AllMeetupsPage;
