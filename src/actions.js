import fetch from 'isomorphic-fetch';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export function requestData(category) {
  return {
    type: REQUEST_DATA,
    category
  };
}

export function receiveData(category, data) {
  return {
    type: RECEIVE_DATA,
    category,
    data
  };
}

function selectRandomly(results) {
  return results[Math.floor(Math.random() * results.length)];
}

export function fetchData() {
  return function(dispatch) {
    dispatch(requestData());
    return fetch(`https://icanhazdadjoke.com/`)
      .then(response => response.json())
      .then(json => selectRandomly(json.results))
      .then(selected => dispatch(receiveData(category, selected)));
  };
}
