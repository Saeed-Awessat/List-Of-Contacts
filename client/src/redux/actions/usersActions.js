import * as types from "./actionTypes";
import * as usersApi from "../../api/usersApi";


export function loadUsers() {
    return function(dispatch) {
        return usersApi
            .getUsers()
            .then(users => {
                dispatch({
                    type: types.LOAD_USERS,
                    payload: users,
                });
            })
            .catch(emptyState => {
                console.log({emptyState});
                // throw error;
                dispatch({
                    type: types.LOAD_USERS,
                    payload: emptyState,
                });
            });
    };
}

export function updateUsers(users,newUser) {
    let newUsers = [...users];
    if(newUser)newUsers = [...newUsers,newUser];
    return {
        type: types.UPDATE_USERS,
        payload: newUsers,
    };
}

