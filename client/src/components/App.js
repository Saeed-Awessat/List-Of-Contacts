import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import LoginPage from "./login/LoginPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./common/Spinner";
import "../App.css";

function App(props) {
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        props.fetchData().then(()=>setLoader(false));
    },[]);

  return (
      loader ? <Spinner/> :
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route component={PageNotFound} />
        </Switch>
          <ToastContainer
              position="top-right"
              autoClose={5000}
          />
      </div>
  );
}

export default App;
