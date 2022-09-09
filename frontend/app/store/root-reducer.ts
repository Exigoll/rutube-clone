import { authSlice } from "@/store/auth/auth.slice";
import { combineReducers } from "redux";

import { reducer as toastrReducer } from "react-redux-toastr";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  toastr: toastrReducer,
});
