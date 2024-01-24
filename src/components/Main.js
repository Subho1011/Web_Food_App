import { useState, useEffect, useContext } from 'react';
import './Main.css';
import Card from './utils/Card'
//import foodItems from './utils/mockdata';
import Button from './utils/Button';
import { Shimmar } from './utils/Shimmar'; //Importing named export
import fetchData from './utils/fetchAPI';
//Imports for using the context API
import { SearchContext } from '../context/SearchContext';

const Main = (props) => {
  // Here we are fetching only searchWord declared in SearchProvider
  const [searchWord] = useContext(SearchContext);
  const [foodItemsArray, setFoodItemArray] = useState([]);
  //Below state variable will check if foodItems array is fetched or not
  const [isFailedToFetch, setIsFailedToFetch] = useState(false);
  // const [searchWord, setSearchWord] = useState(props.searchWord);
  let fetchedFoodItems = [];

  useEffect(() => {
    // We have created a function which will use fetch API to bring the food array as JSON from firebase
    fetchFood();
  }, [searchWord]); // We have provided searchWord as a dependency as because if searchWord changes then useEffect will run again

  const fetchFood = async () => {
    // fetchData is a function in utils/fetchAPI component which returns food item using fetch API
    fetchedFoodItems = await fetchData();
    // If fetchedFoodItems is undefined isFailedToFetch will be true and control will go back from this function to useEffect
    if (typeof(fetchedFoodItems) === 'undefined') {
      setIsFailedToFetch(true);
      return;
    }
    const searchedFood = fetchedFoodItems.filter((foodItem) => foodItem.name.toLowerCase().includes(searchWord.toLowerCase()));
    // Below if statement ensures if we search with nothing whole foodItems are displayed
    if (searchWord === '') {
      setFoodItemArray(fetchedFoodItems);
    } else {
      setFoodItemArray(searchedFood);
    }
  }
  //Function to show Top rated Items
  const showTopRated = async () => {
    fetchedFoodItems = await fetchData();
    const filteredFoodItem = fetchedFoodItems.filter((foodItem) => foodItem.star >= 4.5);
    setFoodItemArray(filteredFoodItem);
  };

  //Function to show Full List
  const showFull = async () => {
    fetchedFoodItems = await fetchData();
    setFoodItemArray(fetchedFoodItems);
  };

  return (
    <div className="main-container">
      <div className="button-container">
        <Button className={'button'} onClick={showTopRated}>Top Rated</Button>
        <Button className={'button'} onClick={showFull}>Show Full</Button>
      </div>
      <div className="cart-container">
        {isFailedToFetch && <h1>Failed to fetch.....</h1>}
        {(foodItemsArray.length === 0 && !isFailedToFetch) && <Shimmar />}
        {foodItemsArray.map((food) => { return <Card key={food.id} foods={food} /> })}
      </div>
    </div>

  );
}

export default Main;

// DUMMY DATA used before firebase
/* const foodItems = [{
    id: 0,
    name: "Halidram Prabhuji",
    star: "4.3",
    description: "Pav Bhaji, Pani Puri, Popcorn and more",
    price: "100 for 1"
  }, {
    id: 1,
    name: "Allen Kitchen",
    star: "3.9",
    description: "Kabiraji, Fish Fry, Seafood",
    price: "250 for 1"
  }, {
    id: 2,
    name: "Golbari",
    star: "4.5",
    description: "Mutton Kosha, Paratha",
    price: "150 for 1"
  }, {
    id: 3,
    name: "Burgur King",
    star: "3.8",
    description: "Burgur, Aloo Tikki Burgur, Fried Chicken",
    price: "100 for 1"
  }, {
    id: 4,
    name: "Shree Balaji",
    star: "4.1",
    description: "Dosa, Fried Idli, Uttapam",
    price: "75 for 1"
  }, {
    id: 5,
    name: "Shanghai",
    star: "3.7",
    description: "Chowmin, Friedrice, Chilli fish",
    price: "125 for 1"
  }, {
    id: 6,
    name: "Gupta Brother's",
    star: "3.5",
    description: "Misti, Radha Ballabhi, North-Indian",
    price: "75 for 1"
  }, {
    id: 7,
    name: "Aminia",
    star: "4.6",
    description: "Biriyani, Firni, Paneer Kofta",
    price: "275 for 1"
  }, {
    id: 8,
    name: "Dominos",
    star: "4.1",
    description: "Cheese Burst Pizza, Choco Lava Cake",
    price: "200 for 1"
  },
  ]; */