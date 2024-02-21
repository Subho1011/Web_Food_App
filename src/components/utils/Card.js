import classes from './Card.module.css';
import AllenKitchen from '../../../img/food/AllenKitchen.jpg';
import Aminia from '../../../img/food/Aminia.jpg';
import BurgurKing from '../../../img/food/BurgurKing.jpeg';
import Dominos from '../../../img/food/Dominos.jpg';
import Golbari from '../../../img/food/Golbari.jpg';
import GuptaBrothers from '../../../img/food/GuptaBrothers.jpg';
import Haldirams from '../../../img/food/Haldirams.jpg';
import Shanghai from '../../../img/food/Shanghai.jpg';
import ShreeBalaji from '../../../img/food/ShreeBalaji.jpg';


const Card = (props) => {
  foodImg = [Haldirams, AllenKitchen, Golbari, BurgurKing, ShreeBalaji, Shanghai, GuptaBrothers, Aminia, Dominos];
  return (
    <div className={classes.Card}>
      <img src={foodImg[props.foods.id]} alt="Haldirams"></img>
      <div className={classes['Card-content']}>
        <h1 className={classes['Card-name']}>{props.foods.name}</h1>
        <div className={classes.rating}><span>{props.foods.star}</span><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes.star}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
        </span></div>
        <p className={classes['Card-description']}>{props.foods.description}</p>
        <span class={classes['Card-price']}>{props.foods.price}</span>
      </div>
      <div className={classes['Card-call-to-action']}>
        <button className={classes.fill}>Order Now</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export const promotedCard = (Card) => {
  return (props) => {
    return (
      <div>
        <label className={classes.promoted}>Promoted</label>
        <Card {...props}/>
      </div>
    );
  }
};
export default Card;