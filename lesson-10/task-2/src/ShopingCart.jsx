import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

const cartList = [
  {
    id: '2',
    name: 'Ipad Pro',
    price: 799,
  },
  {
    id: '3',
    name: 'Ipad Mini',
    price: 599,
  },
  {
    id: '1',
    name: 'Ipad Air',
    price: 399,
  },
];

class ShoppingCart extends React.Component {
  state = {
    cartList,
  };

  render() {
    const count = this.state.cartList.length;
    return (
      <div className="column">
        <CartTitle count={count} userName={this.props.userName} />
        <ProductsList cartItems={this.state.cartList} />
      </div>
    );
  }
}
export default ShoppingCart;
