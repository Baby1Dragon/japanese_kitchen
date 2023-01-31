import style from "./Header.module.css";
import imageSushi from "../../assets/sushi.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <div className={style["header_block"]}>
      <header className={style.header}>
        <div>Япона Кухня</div>
        <CartButton onClick={props.onCartOpen} />
      </header>
      <div className={style["main-image"]}>
        <img src={imageSushi} alt="sushi" />
      </div>
      <div className={style["text_block"]}>
        <h1 className={style["logo_text"]}>Онлайн Суши Ресторан Япона Кухня</h1>
        <p className={style.text}>
          Япона кухня - це онлайн суши-ресторан,в якому олюблені суші та
          сашимі,ролли
          <br /> й інші страви національної японської кухні роблять команда
          професійних кухарів
        </p>
        <p className={style.text}>
          Швидка робота і якісна продукція,а також справжні компоненти рпидають
          <br />
          хороший смак стравам,дарують насолодження від трапези
        </p>
      </div>
    </div>
  );
};

export default Header;
