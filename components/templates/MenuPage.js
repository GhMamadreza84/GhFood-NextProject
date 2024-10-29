import styles from "./MenuPage.module.css";
const MenuPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <h4>{item.name}</h4>
      ))}
    </div>
  );
};

export default MenuPage;
