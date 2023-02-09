import {
     RESTAURANT_LIST_REQUEST, 
    RESTAURANT_LIST_SUCCESS, 
    RESTAURANT_LIST_FAIL} from '../constant/restaurantConstant'

    import axios from 'axios'

    //created asynch environment...
    export const listRestaurants = () => async(dispatch) => {
        try{
            const { data } = await axios.get ('/restaurants.json')
            dispatch ({
                type: RESTAURANT_LIST_SUCCESS, payload: data.restaurants
            })

        }
        catch(error){
            dispatch({
                type: RESTAURANT_LIST_FAIL, error: error 
            })

        }
    }