import Meals from "./MealItem/MealItem";
import style from "./MealList.module.css";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: 'Ролл "Наоми"',
//     description:
//       "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
//     price: 11.99,
//   },
//   {
//     id: "m2",
//     name: "Спайс в лососе",
//     description: "Рис, лосось, соус спайс",
//     price: 3.99,
//   },
//   {
//     id: "m3",
//     name: "Суши с угрем",
//     description: "Угорь копченый, соус унаги, кунжут",
//     price: 4.99,
//   },
//   {
//     id: "m4",
//     name: 'Салат "Поке с лососем"',
//     description:
//       "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
//     price: 7.99,
//   },
// ];
const menu = [];
const MealsList = () => {
  const [showMenu, setShowMenu] = useState([]);
  const [hasError, setHasError] = useState("");
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    fetch(
      "https://learn-custom-hooks-5a92c-default-rtdb.firebaseio.com/meals.json"
    )
      .then((data) => {
        setIsLoading(true);
        const meals = data.json();
        return meals;
      })
      .then((meals) => {
        if (!meals) throw new Error("Сталася помилка...");
        for (const meal in meals) {
          menu.push({
            id: meal,
            name: meals[meal].name,
            price: meals[meal].price,
            description: meals[meal].description,
          });
        }

        setShowMenu(menu);
      })
      .catch((err) => setHasError(`Сталася помилка ...`));
  }, []);

  return (
    <div className={style.meals}>
      <Card>
        <ul>
          {isLoading ? (
            hasError ? (
              <p>{hasError}</p>
            ) : (
              showMenu.map((el) => {
                return (
                  <Meals
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    price={el.price}
                    description={el.description}
                  />
                );
              })
            )
          ) : (
            <p>Завантаження даних ...</p>
          )}
        </ul>
      </Card>
    </div>
  );
};

export default MealsList;
