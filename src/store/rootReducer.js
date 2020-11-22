import { combineReducers } from "redux";
import JokeReducer from "./jokeReducer";
import UserReducer from "./userReducer";

export default combineReducers({
    joke: JokeReducer,
    user: UserReducer,
  });