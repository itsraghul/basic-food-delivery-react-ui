import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";



const MealItem = props => {
 const cartCtx =  useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCardHandler = amount =>{
      cartCtx.addItem({id:props.id,title:props.title,price:props.price,amount:amount});

    };

    return (
      <li className={styles.meal}>
        <div>
          <h3>{props.title}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddtoCart={addToCardHandler} id={props.id}/>
        </div>
      </li>
    );
};

export default MealItem;