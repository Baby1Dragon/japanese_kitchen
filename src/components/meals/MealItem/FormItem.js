import style from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const FormItem = (props) => {
  const [isAmountValid, serIsAmountValid] = useState(true);
  const amountImputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const inputAmount = amountImputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      serIsAmountValid(false);
      return;
    }
    props.onAddToCart(+inputAmount);
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        ref={amountImputRef}
        label="Кількість:"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавити</button>
      {!isAmountValid && <p>Введіть,будь ласка,кількість від 1 до 10</p>}
    </form>
  );
};

export default FormItem;
