import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {addContact} from './actions';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

/*store.dispatch(
  addContact({contactDid: 'ljNBMkdn87668sDSbchuDjbow', contactName: 'Georg', contactAge: '37'}),
);
store.dispatch(
  addContact({contactDid: 'DpjfFmEcjgn45kl6hlfjdnqqf', contactName: 'Viktor', contactAge: '48'}),
);
*/
// store.dispatch(
//   addContact({name: 'Oleg', data:['ljNBMkdn87668sDSbchuDjbow', '29']}),
// );
// store.dispatch(
//   addContact({name: 'Igor', data: ['DpjfFmEcjgn45kl6hlfjdnqqf', '40']}),
// );
// store.dispatch(
//   addContact({name: 'Sviatoslav', data: ['rdfs8dJdhHG8655DJb97hkd', '37']}),
// );
// store.dispatch(
//   addContact({name: 'Yaropolk', data: ['Edsfvtg84632hjb4hj2bdv46', '26']}),
// );
// store.dispatch(
//   addContact({name: 'Vladimir', data: ['Edsfvtg84632hjb4hj2bdv46', '33']}),
// );
// store.dispatch(
//   addContact({name: 'Sviatopolk', data: ['Edsfvtg84632hjb4hj2bdv46', '35']}),
// );

export default store;
