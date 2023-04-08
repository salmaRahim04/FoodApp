import * as api from '../api';
import { FETCH_ALL, FETCH_ALLBYMEALS} from '../Constants/actionTypes';

export const getRecipes=() => async(dispatch) =>{
    try {
        const {data} = await api.fetchRecipes();
        dispatch({type:FETCH_ALL,payload:data.categories});
        
    } catch (error) {
        console.log(error.message);

    }


}
export const getMeals=() => async(dispatch) =>{
    try {
        const {data} = await api.fetchMeals();
        dispatch({type:FETCH_ALLBYMEALS,payload:data.meals});
        
    } catch (error) {
        console.log(error.message);

    }


}