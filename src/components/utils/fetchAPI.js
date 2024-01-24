
const fetchData = async () => {
  let loadedFood = [];
  try {
    const dataList = await fetch("https://react-sec-18-food-order-app-default-rtdb.asia-southeast1.firebasedatabase.app/webFood/webFoodGeneral.json");
    if (!dataList.ok) {
      return [];
    }

    const dataListJSON = await dataList.json(); // If you don't write await before it it will return a Promise Object very Strange
    for (const key in dataListJSON) {
      loadedFood.push({
        id: key,
        name: dataListJSON[key].name,
        star: dataListJSON[key].star,
        description: dataListJSON[key].description,
        price: dataListJSON[key].price
      });
    }
    return loadedFood;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;