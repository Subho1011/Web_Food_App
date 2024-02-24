import AllenKitchen from '../../../img/food/AllenKitchen.jpg';
import Aminia from '../../../img/food/Aminia.jpg';
import BurgurKing from '../../../img/food/BurgurKing.jpeg';
import Dominos from '../../../img/food/Dominos.jpg';
import Golbari from '../../../img/food/Golbari.jpg';
import GuptaBrothers from '../../../img/food/GuptaBrothers.jpg';
import Haldirams from '../../../img/food/Haldirams.jpg';
import Shanghai from '../../../img/food/Shanghai.jpg';
import ShreeBalaji from '../../../img/food/ShreeBalaji.jpg';
import classes from './CartItems.module.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItems = ({ cartItem }) => {
  foodImg = [Haldirams, AllenKitchen, Golbari, BurgurKing, ShreeBalaji, Shanghai, GuptaBrothers, Aminia, Dominos];
  const { id, name, star, description, price } = cartItem;
  const [cartState, dispatch] = useContext(CartContext);

  const removeHandler = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        id,
        price
      }
    });
  }

  return (
    <div className={classes['cart-item-container']}>
      <section className={classes['cart-item-textbox']}>
        <h1>{name}</h1>
        <span>{'Rs' + price}</span>
        <p>{description}</p>
      </section>
      <section className={classes['cart-item-imgbox']}>
        <img src={foodImg[id]} alt={name}></img>
        <button onClick={removeHandler}>Remove</button>
      </section>
    </div>
  );
};

export default CartItems;