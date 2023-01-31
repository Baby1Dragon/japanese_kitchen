import FormItem from "./FormItem";
import style from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/Cart-context";

const Meals = (props) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      description: props.description,
      price: props.price,
      name: props.name,
      amount: amount,
    });
  };
  return (
    <li>
      <div className={style.meal}>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{`$${props.price}`}</div>
        <FormItem id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Meals;
