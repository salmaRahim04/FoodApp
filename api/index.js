import axios from 'axios';
const url ='https://www.themealdb.com/api/json/v1/1/categories.php';
const url2 ='https://www.themealdb.com/api/json/v1/1/list.php?i=list';

export const fetchRecipes =() => axios.get(url)
export const fetchMeals =() => axios.get(url2)
