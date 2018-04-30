import { ofType, combineEpics } from "redux-observable";
import { mergeMap, delay, takeUntil, switchMap } from "rxjs/operators";
import { of, merge } from "rxjs";

import * as actions from "../actions/actions";
import { http } from "../http";

const setLoadingEpic = action$ =>
    action$.pipe(
        ofType(actions.SEARCH_SUPPLIERS, actions.FETCH_PAYMENTS),
        switchMap(() =>
            of(actions.startLoading()).pipe(
                delay(300),
                takeUntil(
                    merge(
                        action$.pipe(ofType(actions.FETCH_PAYMENTS_FULFILLED)),
                        action$.pipe(ofType(actions.FETCH_PAYMENTS_REJECTED)),
                    ),
                ),
            ),
        ),
    );

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

export default combineEpics(fetchPaymentsEpic, searchSuppliersEpic, setLoadingEpic);
