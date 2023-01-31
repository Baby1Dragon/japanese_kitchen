import CartContext from "../../../store/Cart-context";
import { useContext } from "react";

import OrderForm from "./OrderForm";

let orderSuccessfully = false;

const PostOrder = (props) => {
  const cartContext = useContext(CartContext);
  const order = cartContext.items.map((el) => {
    return { key: el.id, name: el.name, price: el.price, amount: el.amount };
  });
  const orderInObjectFormat = Object(...order);

  const getUserDataHandler = (data) => {
    fetch(
      "https://learn-custom-hooks-5a92c-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify({ ...orderInObjectFormat, ...data }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        console.log("Data post !");
        cartContext.clearCart();
        orderSuccessfully = true;
        props.onShowSuccessfullyMessage(orderSuccessfully);
      })
      .catch((er) => {
        console.log("Error");
      });
  };

  return (
    <OrderForm
      onGetUserData={getUserDataHandler}
      onFormClose={props.onCloseOrderModal}
    />
  );
};

export default PostOrder;
