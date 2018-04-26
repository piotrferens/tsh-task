import { combineReducers } from "redux";

import { payments } from "./reducers/payments";
import { pagination } from "./reducers/pagination";

export const rootReducer = combineReducers({ payments, pagination });
