import React from 'react';
import './CartDropdown.scss';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/Cart/Cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/Cart/Cart.action';

import CartItem from '../CartItem/CartItem';
import Custom_button from '../Custom_button/Custom_button';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty_message">your cart is empty</span>
      )}
    </div>
    <Custom_button
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </Custom_button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
