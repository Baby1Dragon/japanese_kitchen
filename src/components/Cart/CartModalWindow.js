import style from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick}></div>;
};

const elementInPortal = document.getElementById("overlay");

const CartModalWindow = (props) => {
  return (
    <div>
      <div className={style.modal}></div>
      <div className={style.modal}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        elementInPortal
      )}
      {ReactDOM.createPortal(
        <CartModalWindow>{props.children}</CartModalWindow>,
        elementInPortal
      )}
    </div>
  );
};

export default Modal;
