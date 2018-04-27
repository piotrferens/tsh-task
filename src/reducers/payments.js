import { FETCH_PAYMENTS_FULFILLED, FETCH_PAYMENTS } from "../actions/actions";
import { combineReducers } from "redux";

function payments(state = [], action) {
    switch (action.type) {
        case FETCH_PAYMENTS_FULFILLED:
            return action.payload.payments;
        default:
            return state;
    }
}

function isLoading(state = false, action) {
    switch (action.type) {
        case FETCH_PAYMENTS_FULFILLED:
            return false;
        case FETCH_PAYMENTS:
            return true;
        default:
            return state;
    }
}

export const table = combineReducers({
    payments,
    isLoading,
});
