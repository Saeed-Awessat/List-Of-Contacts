import React, {useState} from "react";
import ShowList from "./ShowList";
import ShowUser from "./ShowUser";

const HomePage = () => {
    const [homeState , setHomeState] = useState({
        showList: true,
        selectUser: {},
    });
    return (
        homeState.showList ?
            <ShowList setHomeState={setHomeState}/>
            : <ShowUser
                setHomeState={setHomeState}
                user={homeState.selectUser}
            />
    );
};



export default HomePage;
