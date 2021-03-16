import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import seriesReducer from './seriesReducer';
import peopleReducer from './peopleReducer';
import searchReducer from './searchReducer';
import leadReducer from './leadReducer';
import likedReducer from './likedReducer';

const combinedReducers = combineReducers({
    movies:movieReducer,
    series:seriesReducer,
    people:peopleReducer,
    search:searchReducer,
    lead:leadReducer,
    liked:likedReducer,
    
})
export {combinedReducers}