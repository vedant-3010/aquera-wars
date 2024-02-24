import { combineReducers } from "redux";
import planetsReducer from "./PlanetsSlice";
import residentReducer from "./ResidentSlice";

const rootReducer = combineReducers({
  planets: planetsReducer,
  residents: residentReducer,
});

export default rootReducer;
