import {ADD_FILM_TO_FAVORITE, REMOVE_FILM_FROM_FAVORITE} from "../constants/action_type";

export const setFilmToFavorite = film => ({
    type: ADD_FILM_TO_FAVORITE,
    payload: film
})


export const removeFilmFromFavorite = filmId => ({
    type: REMOVE_FILM_FROM_FAVORITE,
    payload: filmId
})