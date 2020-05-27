import { createStore, combineReducers } from "redux";
import people from './people';
import planets from './planets';

export default createStore(
  combineReducers({
    people,
    planets,
  })
);
