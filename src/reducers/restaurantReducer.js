import {RESTAURANT_LIST_SUCCESS,
RESTAURANT_LIST_FAIL
}from '../constant/restaurantConstant'

// created one function aceepting State and Action
export const restaurantListReducer = ( state = {restaurants: [] },action ) => {

    switch(action.type) {

        case RESTAURANT_LIST_SUCCESS:
            return { restaurants: action.payload }

        case RESTAURANT_LIST_FAIL:
                return { restaurants: action.console.error }

        default:
                return state
    }

}

    
