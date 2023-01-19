import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  finalModal:false,
  allPeople:[],
  favorites: [],
  totalFavorites: 0,
  setAllPeople: (loadedPeaople) =>{},
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
  finalModalState:(context)=>{}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const [underSearch,setUnderSearch] =  useState([])
  const[finalState,setFinalState] = useState(false)

  const context = {
    finalModal:finalState,
    allPeople:underSearch,
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    setAllPeople: setAllPeopleHandler,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
    finalModalState:finalModalStateHandler
  };
  
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );

  function finalModalStateHandler(state){
    setFinalState(state)
  }
   
  function setAllPeopleHandler(loadedPeaople){
    setUnderSearch(loadedPeaople)
  }

  function addFavoriteHandler(inperson) {
    setUnderSearch(underSearch.filter(person=> person.id !== inperson.id));
    setUserFavorites(userFavorites.concat(inperson))
    }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }


}

export default FavoritesContext;
