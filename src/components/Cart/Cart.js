import style from "./Cart.module.css";
import Modal from "./CartModalWindow";
import { useContext, useState } from "react";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem/CartItem";
import PostOrder from "./postOrder/postOrder";

const Cart = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const cartContext = useContext(CartContext);
  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const showButton = cartContext.totalAmount.toFixed(2) > 0 ? true : false;
  const [showOrderWindow, setShowOrderWindow] = useState(false);
  const [cartWindovShow, setCartWindowShow] = useState(true);

  const cartAddItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartRemoveItem = (id) => {
    cartContext.removeItem(id);
  };

  const commponents = (
    <ul className={style.scroll}>
      {cartContext.items.map((el) => {
        return (
          <CartItem
            key={el.id}
            name={el.name}
            price={el.price}
            amount={el.amount}
            onRemove={cartRemoveItem.bind(null, el.id)}
            onAdd={cartAddItem.bind(null, el)}
          />
        );
      })}
    </ul>
  );

  const orderHander = (e) => {
    setCartWindowShow(false);
    setShowOrderWindow(true);
  };

  const successfullyMessageHandler = (message) => {
    if (message) {
      setShowOrderWindow(false);
      setShowMessage(message);
    }
  };

  const cartModalWindow = (
    <div>
      {commponents}
      <div className={style.total}>
        <span>В сумі</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style[`button--alt`]} onClick={props.onCartClose}>
          Закрити
        </button>
        {showButton && (
          <button className={style.button} onClick={orderHander}>
            Замовити
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <Modal onClick={props.onCartClose}>
        {cartWindovShow && cartModalWindow}

        {showOrderWindow && (
          <div>
            <PostOrder
              onCloseOrderModal={props.onCartClose}
              onShowSuccessfullyMessage={successfullyMessageHandler}
            />
          </div>
        )}
        {showMessage && (
          <div>
            <p className={style.message}>Замовлення успішно виконано!</p>
            <div className={style.actions}>
              <button
                className={style[`button--alt`]}
                onClick={props.onCartClose}
              >
                Закрити
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Cart;
