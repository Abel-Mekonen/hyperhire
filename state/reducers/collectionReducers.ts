const initialState = {
   collections: [],
   loading: true,
   error: null,
};

const collectionReducer = (state = initialState, action: any) => {
    if(action.type === "getCollections") {
        return {
            ...state,
           collections: action.payload,
            loading: false,
        }
    } else {
        return state;
    }
}

export default collectionReducer;