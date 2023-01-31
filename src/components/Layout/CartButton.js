import CartIcon from "../Cart/CartIcon";
import style from "./HeaderCartButton.module.css";
import CartContext from "../../store/Cart-context";
import { useContext, useEffect, useState } from "react";

const CartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [cartButtonAnimation, setCartBattonAnimation] = useState(false);

  const cartAnimation = `${style.button} ${
    cartButtonAnimation ? style.bump : null
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    } else {
      setCartBattonAnimation(true);
    }

    const timerCloseAnimation = setTimeout(
      () => setCartBattonAnimation(false),
      300
    );

    return () => {
      clearTimeout(timerCloseAnimation);
    };
  }, [cartContext.items]);

  const cartItemNumber = cartContext.items.reduce((acc, el) => {
    return acc + el.amount;
  }, 0);

  return (
    <button className={cartAnimation} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={style.badge}>{cartItemNumber}</span>
    </button>
  );
};

export default CartButton;
