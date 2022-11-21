//複数のReducerの場合は複数のReducerを組み合わせたものを作成する必要がある

import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLogin";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});

export default allReducers;
