import { combineReducers } from "redux";
import photoReducer from "./reducer";

const rootReducer = combineReducers({
  data: photoReducer,
});

export default rootReducer;
