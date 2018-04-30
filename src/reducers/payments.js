import {
    FETCH_PAYMENTS_FULFILLED,
    FETCH_PAYMENTS,
    FETCH_PAYMENTS_REJECTED,
    START_LOADING,
    SELECT_SUPPLIER,
    CLOSE_MODAL,
} from "../actions/actions";
import { combineReducers } from "redux";

function payments(state = [], action) {
    switch (action.type) {
        case FETCH_PAYMENTS_REJECTED:
            return [];
        case FETCH_PAYMENTS_FULFILLED:
            return action.payload.payments;
        default:
            return state;
    }
}

function isLoading(state = false, action) {
    switch (action.type) {
        case FETCH_PAYMENTS_FULFILLED:
        case FETCH_PAYMENTS_REJECTED:
            return false;
        case FETCH_PAYMENTS:
        case START_LOADING:
            return true;
        default:
            return state;
    }
}

function selectedSupplier(state = null, action) {
    switch (action.type) {
        case SELECT_SUPPLIER:
            return action.payload;
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export const table = combineReducers({
    payments,
    isLoading,
    selectedSupplier,
});
