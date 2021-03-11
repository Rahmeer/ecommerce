import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import cartReducer from './Cart/Cart.reducer';

import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
