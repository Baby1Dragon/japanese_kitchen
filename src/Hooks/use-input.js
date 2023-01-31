import { useState } from "react";

const useInput = (isValiDateItemFunc) => {
  const [inputItem, setInputItem] = useState("");
  const [wasItemInputTouched, setWasItemInputTouched] = useState(false);

  const inputItemIsValid = isValiDateItemFunc(inputItem);

  const inInputValid = !inputItemIsValid && wasItemInputTouched;

  const onChangeItemHandler = (e) => {
    setInputItem(e.target.value);
  };
  const inputItemLostFocusHandler = () => {
    setWasItemInputTouched(true);
  };

  const resetInpitValue = () => {
    setInputItem("");
    setWasItemInputTouched(false);
  };

  const isInputTouched = () => {
    setWasItemInputTouched(true);
  };
  return {
    defaultValue: inputItem,
    hasError: inInputValid,
    isValid: inputItemIsValid,
    resetInpitValue,
    isInputTouched,
    onChangeItemHandler,
    inputItemLostFocusHandler,
  };
};

export default useInput;
