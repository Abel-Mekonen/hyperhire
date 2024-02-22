import { combineReducers } from "redux";
import bannerReducer from "./bannerReducers";
import collectionReducer from "./collectionReducers";
import shortcutReducer from "./shortcutReducers";


const reducers = combineReducers({
    banners: bannerReducer,
    collections: collectionReducer,
    shortcuts: shortcutReducer
})

export default reducers;