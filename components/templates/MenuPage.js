import Card from "../modules/Card";
import styles from "./MenuPage.module.css";
const MenuPage = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <h2>Menu</h2>
      <div className={styles.subContainer}>
        {data.map((food) => (
          <Card key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
