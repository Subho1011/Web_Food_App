import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css';
import CartItems from "../components/utils/CartItems";

const Cart = () => {
  const [cartState, dispatch] = useContext(CartContext);
  return (
    <div className="cart-container">
      <div className="cart-items-container">
        <ul className="cart-items">
          {cartState.cart.map((item) => (
            <li key={item.id}>
              <CartItems cartItem={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-price-container"><span>Total Price</span><span>{cartState.totalPrice}</span></div>
    </div>
  );
}

export default Cart;