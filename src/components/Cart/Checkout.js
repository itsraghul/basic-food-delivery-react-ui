import styles from "./Checkout.module.css";
import { useRef } from "react";

const Checkout = (props) => {
  const nameInput = useRef();
  const streetInput = useRef();
  const cityInput = useRef();
  const pincodeInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredCity = cityInput.current.value;
    const enteredPincode = pincodeInput.current.value;
  };
  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInput} type="text" id="name"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetInput} type="text" id="street"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInput} type="text" id="city"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="pincode">PinCode</label>
        <input ref={pincodeInput} type="text" id="pincode"></input>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.cancel}
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
