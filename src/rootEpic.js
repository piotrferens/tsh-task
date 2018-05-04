import { combineEpics } from "redux-observable";

import suppliersEpic from "./epics";

export const rootEpic = combineEpics(suppliersEpic);
