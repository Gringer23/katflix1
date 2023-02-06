import {ADD_FILM_TO_FAVORITE, REMOVE_FILM_FROM_FAVORITE} from "../constants/action_type";
import {omit} from "lodash";
import {getLocalStorage} from "../../utils/localStorage/localStorage";

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILM_TO_FAVORITE:
           return {
               ...state,
               ...action.payload
           };
        case REMOVE_FILM_FROM_FAVORITE:
            return omit(state, [action.payload])
        default:
            return state;
    }
};

export default favoriteReducer;