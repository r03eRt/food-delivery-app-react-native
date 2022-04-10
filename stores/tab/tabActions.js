 import { types } from "../types"


/**
 * 
 * @param {*} selectedTab 
 * @returns 
 */
 export const setSelectedTab = (selectedTab) => async (dispatch, getState) => {
    dispatch(setSelectedTabSuccess(selectedTab));
 }


 /**
 * Atomic Blocks: Tab Actions
 * @param {*} selectedTab 
 * @returns 
 */
export const setSelectedTabSuccess = (selectedTab) => {
    return {
        type: types.SET_SELECTED_TAB,
        payload: {
            selectedTab
        }
    }
}