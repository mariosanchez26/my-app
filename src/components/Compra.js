import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0,
    };
  }

  addItemToCart = (item) => {
    const updatedItems = [...this.state.items, item];
    const updatedTotal = this.state.total + item.price;
    this.setState({
      items: updatedItems,
      total: updatedTotal,
    });
  };

  render() {
    return (
        <div className="cart-container">
        <h2 className="cart-title">Carrito de Compras</h2>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index} className="cart-item">
              {item.name} - ${item.price}
              <button className="remove-button">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <p className="cart-total">Total: ${this.state.total}</p>
        <button className="add-button" onClick={() => this.addItemToCart({ name: 'Producto 1', price: 10 })}>
          Agregar Producto 1
        </button>
        <button className="add-button" onClick={() => this.addItemToCart({ name: 'Producto 2', price: 20 })}>
          Agregar Producto 2
        </button>
        {/* Agrega más botones para otros productos */}
      </div>
      
    );
  }
}

export default ShoppingCart;
