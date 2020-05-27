import { createStore, combineReducers } from "redux";
import people from './people';
import planets from './planets';
import films from './films';

export default createStore(
  combineReducers({
    people,
    planets,
    films,
  })
);
