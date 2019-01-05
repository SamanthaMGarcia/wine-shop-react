import { resetWineForm } from './wineForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setWines = wines => {
  return {
    type: 'GET_WINES_SUCCESS',
    wines
  }
}

const addWine = wine => {
  return {
    type: 'CREATE_WINE_SUCCESS',
    wine
  }
}

// ** Async Actions **
export const getWines = () => {
  return dispatch => {
    return fetch(`${API_URL}/wines`)
      .then(response => response.json())
      .then(wines => dispatch(setWines(wines)))
      .catch(error => console.log(error));
  }
}

export const createWine = wine => {
  return dispatch => {
    return fetch(`${API_URL}/wines`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ wine: wine })
    }, wine)
      .then(response => response.json())
      .then(wine => {
        dispatch(addWine(wine))
        dispatch(resetWineForm())
      })
      .catch(error => console.log(error))
  }
}
