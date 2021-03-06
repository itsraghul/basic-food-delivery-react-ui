import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext,useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout,setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };

  const orderHandler = () => { setIsCheckout(true);};

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
 
  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && !isCheckout && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );  
  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amout</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout   onCancel={props.onClose}/>}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
