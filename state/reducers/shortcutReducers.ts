const initialState = {
    shortcuts: [],
    loading: true,
    error: null,
 };
 
 const shortcutReducer = (state = initialState, action: any) => {
     if(action.type === "getShortcuts") {
         return {
             ...state,
            shortcuts: action.payload,
            loading: false,
         }
     } else {
         return state;
     }
 }
 
 export default shortcutReducer;