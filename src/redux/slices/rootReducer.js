import { combineReducers } from "redux";
import TaskTrackerSlice from "./TaskTrackerSlice";

const appReducer = combineReducers({
  TaskTrackerSlice,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
