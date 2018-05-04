import { ofType, combineEpics } from "redux-observable";
import { mergeMap, delay, takeUntil, switchMap } from "rxjs/operators";
import { of, merge } from "rxjs";

import * as actions from "../actions/actions";
import { http } from "../http";

const setLoadingEpic = action$ =>
    action$.pipe(
        ofType(actions.SEARCH_SUPPLIERS, actions.FETCH_SUPPLIERS),
        switchMap(() =>
            of(actions.startLoading()).pipe(
                delay(300),
                takeUntil(
                    merge(
                        action$.pipe(ofType(actions.FETCH_SUPPLIERS_FULFILLED)),
                        action$.pipe(ofType(actions.FETCH_SUPPLIERS_REJECTED)),
                    ),
                ),
            ),
        ),
    );

const fetchSuppliersEpic = action$ =>
    action$.pipe(
        ofType(actions.FETCH_SUPPLIERS),
        mergeMap(() =>
            http
                .get()
                .then(actions.fetchSuppliersFulfilled)
                .catch(actions.fetchSuppliersRejected),
        ),
    );

const searchSuppliersEpic = action$ =>
    action$.pipe(
        ofType(actions.SEARCH_SUPPLIERS),
        mergeMap(action =>
            http
                .get("", { params: action.payload })
                .then(actions.fetchSuppliersFulfilled)
                .catch(actions.fetchSuppliersRejected),
        ),
    );

export default combineEpics(fetchSuppliersEpic, searchSuppliersEpic, setLoadingEpic);
