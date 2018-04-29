import { ofType, combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import * as actions from "../actions/actions";
import { http } from "../http";

const fetchPaymentsEpic = action$ =>
    action$.pipe(
        ofType(actions.FETCH_PAYMENTS),
        mergeMap(() =>
            http
                .get()
                .then(actions.fetchPaymentsFulfilled)
                .catch(actions.fetchPaymentsRejected),
        ),
    );

const searchSuppliersEpic = action$ =>
    action$.pipe(
        ofType(actions.SEARCH_SUPPLIERS),
        mergeMap(action =>
            http
                .get("", { params: action.payload })
                .then(actions.fetchPaymentsFulfilled)
                .catch(actions.fetchPaymentsRejected),
        ),
    );

export default combineEpics(fetchPaymentsEpic, searchSuppliersEpic);
