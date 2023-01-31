import "./OrderForm.css";
import useInput from "../../../Hooks/use-input";

const validFunck = (valid) => {
  return valid.trim() !== "";
};

const OrderForm = (props) => {
  const {
    defaultValue: inputName,
    hasError: inNameValid,
    isValid: isValidInputName,
    resetInpitValue: resetNameValue,
    isInputTouched: isNameTouched,
    onChangeItemHandler: onChangeNameHandler,
    inputItemLostFocusHandler: inputNameLostFocusHandler,
  } = useInput(validFunck);

  const {
    defaultValue: inputEmail,
    hasError: inEmailValid,
    isValid: isValidInputEmail,
    resetInpitValue: resetEmailValue,
    isInputTouched: isEmailTouched,
    onChangeItemHandler: onChangeEmailHandler,
    inputItemLostFocusHandler: inputEmailLostFocusHandler,
  } = useInput((val) => val.includes("@"));

  const {
    defaultValue: inputLastName,
    hasError: inLastNameValid,
    isValid: isValidInputLastName,
    resetInpitValue: resetLastNameValue,
    isInputTouched: isLastNameTouched,
    onChangeItemHandler: onChangeLastNameHandler,
    inputItemLostFocusHandler: inputLastNameLostFocusHandler,
  } = useInput(validFunck);

  const formNameValid = `${inNameValid ? "invalid" : ""}`;
  const formEmailValid = `${inEmailValid ? "invalid" : ""}`;
  const formLastNameValid = `${inLastNameValid ? "invalid" : ""}`;

  const submitFormHandler = (e) => {
    e.preventDefault();

    isLastNameTouched();
    isEmailTouched();
    isNameTouched();

    if (!isValidInputLastName) return;
    if (!isValidInputName) return;
    if (!isValidInputEmail) return;

    props.onGetUserData({
      userName: inputName,
      lastName: inputLastName,
      email: inputEmail,
    });

    resetLastNameValue();
    resetEmailValue();
    resetNameValue();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={`form-control ${formNameValid}`}>
          <label htmlFor="name">Введите Имя</label>
          <input
            type="text"
            id="name"
            onBlur={inputNameLostFocusHandler}
            onChange={onChangeNameHandler}
            value={inputName}
          />
          {inNameValid && <p className="error-text">Обезательно Введите Имя</p>}
        </div>
        <div className={`form-control ${formLastNameValid}`}>
          <label htmlFor="name">Введите Фамилию</label>
          <input
            type="text"
            id="name"
            onBlur={inputLastNameLostFocusHandler}
            onChange={onChangeLastNameHandler}
            value={inputLastName}
          />
          {inLastNameValid && (
            <p className="error-text">Обезательно Введите Фамилию</p>
          )}
        </div>
      </div>
      <div className={`form-control ${formEmailValid}`}>
        <label htmlFor="name">Введите E-Mail</label>
        <input
          type="email"
          id="name"
          onBlur={inputEmailLostFocusHandler}
          onChange={onChangeEmailHandler}
          value={inputEmail}
        />
        {inEmailValid && (
          <p className="error-text">Обезательно Введите E-Mail</p>
        )}
      </div>
      <div className="actions">
        <button onClick={props.onFormClose} className="button--alt">
          Закрити
        </button>
        <button className="button">Отправить</button>
      </div>
    </form>
  );
};

export default OrderForm;
