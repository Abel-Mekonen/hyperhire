import { legacy_createStore as createStore } from "redux";



// Import all reducers created
import reducers from "../reducers/index";

export const store = createStore(
    reducers,
    {},
)
