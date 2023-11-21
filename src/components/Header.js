import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDel={props.onDel} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма:{summa.toFixed(2)}$</p>
    </div>
  );
};

const showNot = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  );
};

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House staff</span>
        <ul className="nav">
          <FaShoppingCart
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`shop-cart-btn ${cartOpen && "active"}`}
          />
          <li>О нас</li>
          <li>Кабинет</li>
          <li>Контакты</li>
        </ul>
      </div>
      {cartOpen && (
        <div className="shop-cart">
          {props.orders.length > 0 ? showOrders(props) : showNot()}
        </div>
      )}
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
