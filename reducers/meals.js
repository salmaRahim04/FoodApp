import {FETCH_ALLBYMEALS} from '../Constants/actionTypes';
export default  (meals=[],action) =>{
    switch (action.type) {
        case  FETCH_ALLBYMEALS: 
            return action.payload;
        default:
            return meals;
        
    }

}