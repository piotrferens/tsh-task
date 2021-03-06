import { combineReducers } from "redux";

import { table } from "./reducers/suppliers";
import { pagination } from "./reducers/pagination";
import { search } from "./reducers/search";
import { rating } from "./reducers/rating";

export const rootReducer = combineReducers({ table, pagination, search, rating });
