import {FETCH_ALL} from '../Constants/actionTypes';
export default  (recipes=[],action) =>{
    switch (action.type) {
        case  FETCH_ALL: 
            return action.payload;
        default:
            return recipes;
        
    }

}