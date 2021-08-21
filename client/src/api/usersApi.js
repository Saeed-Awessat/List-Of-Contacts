import axios from "axios";
const baseUrl = 'http://localhost:3000';

export function getUsers() {
    return new Promise(async (resolve,reject)=> {
        try {
            let response = await axios.get(baseUrl + "/getUsers");
            if (response.statusText === "OK") resolve(response.data);
            resolve([]);
        } catch (e) {
            console.log({e});
            // throw e;
            reject([]);
        }
    });
}

export function addUser(user) {
    return new Promise(async (resolve,reject)=>{
        try{
            let response = await axios.post(baseUrl+"/setUser",user);
            if(response.statusText === "OK")resolve(response.data);
            resolve({});
        }catch (e) {
            console.log({e});
            // throw e;
            reject({});
        }
    });
}
