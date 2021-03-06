import React from 'react';
import Custom_button from '../Custom_button/Custom_button';
import './CartDropdown.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Custom_button>GO TO CHECKOUT</Custom_button>
    </div>
  );
};

export default CartDropdown;
