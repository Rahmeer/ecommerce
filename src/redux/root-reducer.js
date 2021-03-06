import { combineReducers } from 'redux';
import cartReducer from './Cart/Cart.reducer';
import useReducer from './user/user-reducer';

export default combineReducers({
  user: useReducer,
  cart: cartReducer,
});
