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

export default combineEpics(fetchPaymentsEpic);
