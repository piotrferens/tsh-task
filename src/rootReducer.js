import { combineReducers } from "redux";

import { table } from "./reducers/payments";
import { pagination } from "./reducers/pagination";

export const rootReducer = combineReducers({ table, pagination });
