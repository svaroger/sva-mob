import {combineReducers} from 'redux';

import {ADD_CONTACT} from './actions';

// in this reducer state is only state that is defined for this reducer
const contactReducer = (state = [], action) => {
  if (action.type === ADD_CONTACT) {
    return action.payload;
  }
  return state;
};

const reducer = combineReducers({
  contacts: contactReducer,
});

export default reducer;
