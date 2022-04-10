import { types } from "../types";

const initialState = {
    selectedTab: ""
}

export const tabReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab
            }
        default:
            return state;
    }
}