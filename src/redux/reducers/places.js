import {ADD_PLACE, TOGGLE_PLACE, REMOVE_PLACE} from "../actions/places";

export const INITIAL_STATE = {
    placesList: [
    {
        id: 1,
        name: "San Diego",
        address: "San Diego, CA, USA",
        position : {lat: 32.715738, lng: -117.1610838},
        show: true,
    },
    {
        id: 2,
        name: "San Diego Zoo",
        address: "San Diego Zoo",
        position : {lat: 32.735316, lng:  -117.149046},
        show: true,
    },
    ],
};

const placesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return { ...state, placesList: [...state.placesList,action.payload] };
        case TOGGLE_PLACE:
            return {...state, placesList: state.placesList.map(place =>
                place.id === action.payload ? { ...place, show: !place.show } : place
            )};

        case REMOVE_PLACE:
            const filteredList = state.placesList.filter( place => place.id !== action.payload);
            return {...state, placesList: filteredList};

        default:
            return state
    }
};

export default placesReducer