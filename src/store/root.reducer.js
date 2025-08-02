import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter.store";
export const rootReducer = combineReducers({
  reducer: {
    counter: counterReducer,
  },
});
