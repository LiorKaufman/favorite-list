import { createStore } from "redux";
import thunk from "redux-thunk";
import reducers from '../redux/reducers/index'
import placesReducer, {INITIAL_STATE} from "./reducers/places";
import uuid from "uuid";





const store = createStore(
    placesReducer,
    INITIAL_STATE,
    window.devToolsExtension && window.devToolsExtension()
);

export default store