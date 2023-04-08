import { combineReducers } from "redux";
import recipes from './recipes';
import meals from './meals';

export default combineReducers({
    recipes,meals
})