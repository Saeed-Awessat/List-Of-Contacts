import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import {loadUsers} from "./redux/actions/usersActions";

const store = configureStore({});

function fetchData(){
    return new Promise(async (resolve, reject) => {
        await store.dispatch(loadUsers());
        resolve(store.getState());
    });
}

render(
    <ReduxProvider store={store}>
      <Router>
        <App fetchData={fetchData}/>
      </Router>
    </ReduxProvider>,
    document.getElementById("root")
);
