

const initialState = {
    banners: [],
    loading: true,
    error: null,
};

const bannerReducer = (state = initialState, action: any) => {
    if(action.type === "getMainBanners") {
        return {
            ...state,
            banners: action.payload,
            loading: false,
        }
    } else {
        return state;
    }
}

export default bannerReducer;