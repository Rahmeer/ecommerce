import React from 'react';
import CartActionTypes from './Cart.types';

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export default toggleCartHidden;
