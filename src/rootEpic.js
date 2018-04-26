import { combineEpics } from "redux-observable";

import paymentsEpic from "./epics";

export const rootEpic = combineEpics(paymentsEpic);
