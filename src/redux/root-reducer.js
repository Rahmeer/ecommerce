import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import cartReducer from './Cart/Cart.reducer';

import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/ShopReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
