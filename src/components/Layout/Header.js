import React from "react";
import mealsImage from "../../assets/meals.jpg"
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>GoodMeals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicisous food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
