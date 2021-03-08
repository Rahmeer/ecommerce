import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import Custom_button from '../Custom_button/Custom_button';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Custom_button>GO TO CHECKOUT</Custom_button>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
