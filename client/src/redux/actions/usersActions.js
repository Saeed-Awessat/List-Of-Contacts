import * as types from "./actionTypes";
import * as usersApi from "../../api/usersApi";
const usersMaxLength = 10;


export function loadUsers() {
    return function(dispatch) {
        return usersApi
            .getUsers()
            .then(users => {
                dispatch({
                    type: types.LOAD_USERS,
                    payload: users.reverse(),
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
    if(newUsers.length > usersMaxLength)newUsers = newUsers.splice(-usersMaxLength);
    console.log({newUsers});
    return {
        type: types.UPDATE_USERS,
        payload: newUsers,
    };
}

