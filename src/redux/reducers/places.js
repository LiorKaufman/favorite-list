import {ADD_PLACE} from "../actions/places";
import uuid from "uuid"


export const INITIAL_STATE = {
    placesList: [
        {
            id: uuid(),
            name: "testing",
            address:" test address"
        },
    ],
};

const placesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return { ...state, placesList: [...state.placesList,action.payload] }

        default:
            return state
    }
};

export default placesReducer