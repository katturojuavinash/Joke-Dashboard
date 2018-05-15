import { combineReducers } from 'redux';
import { REQUEST_DATA, RECEIVE_DATA } from './actions';

function mainData(state = {}, action) {
  switch(action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        loading: true
      });
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        loading: false,
        category: action.category,
        data: action.data
      });
    default:
      return state;
  }
}

const reducers = {
  mainData
};

export default combineReducers(reducers);
