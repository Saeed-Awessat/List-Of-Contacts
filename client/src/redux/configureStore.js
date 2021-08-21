import { createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const middleware = [thunk.withExtraArgument(axiosInstance)];

export default function configureStore(initialState) {

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
