import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function usersReducer(
    state = initialState.users,
    action
) {
    if (action.type === types.LOAD_USERS) {
        return action.payload;
    }else if(action.type === types.UPDATE_USERS){
        return action.payload;
    }
    return state;
}
