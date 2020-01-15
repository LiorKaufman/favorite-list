import { createStore } from "redux";
import placesReducer, {INITIAL_STATE} from "./reducers/places";





const store = createStore(
    placesReducer,
    INITIAL_STATE,
    window.devToolsExtension && window.devToolsExtension()
);

export default store