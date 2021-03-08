import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/Cart/Cart.action';

import Custom_button from '../Custom_button/Custom_button';
import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Custom_button onClick={() => addItem(item)} inverted>
        Add To Cart
      </Custom_button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
