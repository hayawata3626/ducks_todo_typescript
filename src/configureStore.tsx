import { createStore, applyMiddleware, combineReducers } from "redux";
import Todo from "./modules/todo";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const reducer = combineReducers({
  Todo
});

const configureStore = initialState =>
  createStoreWithMiddleware(reducer, initialState)

export default configureStore;
