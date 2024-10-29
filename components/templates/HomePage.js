import Attributes from "../modules/Attributes";
import Banner from "../modules/Banner";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
    </div>
  );
};

export default HomePage;
