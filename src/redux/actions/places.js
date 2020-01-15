
// Types
export const ADD_PLACE = "ADD_PLACE";
export const TOGGLE_PLACE = "TOGGLE_PLACE";
export const REMOVE_PLACE ="REMOVE_PLACE";

// Action creators
export const addPlaceAction = (place) => ({
    type: ADD_PLACE,
    payload: place
});
export const togglePlace = (id) => ({
    type: TOGGLE_PLACE,
    payload: id
});

export const removePlace = (id)  => ({
    type: REMOVE_PLACE,
    payload: id
});
