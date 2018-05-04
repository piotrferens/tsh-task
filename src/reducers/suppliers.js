import {
    FETCH_SUPPLIERS_FULFILLED,
    FETCH_SUPPLIERS_REJECTED,
    START_LOADING,
    SELECT_SUPPLIER,
    CLOSE_MODAL,
} from "../actions/actions";
import { combineReducers } from "redux";

function suppliers(state = [], action) {
    switch (action.type) {
        case FETCH_SUPPLIERS_REJECTED:
            return [];
        case FETCH_SUPPLIERS_FULFILLED:
            return action.payload.payments;
        default:
            return state;
    }
}

function isLoading(state = false, action) {
    switch (action.type) {
        case FETCH_SUPPLIERS_FULFILLED:
        case FETCH_SUPPLIERS_REJECTED:
            return false;
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

function error(state = false, action) {
    switch (action.type) {
        case FETCH_SUPPLIERS_REJECTED:
            return true;
        case FETCH_SUPPLIERS_FULFILLED:
            return false;
        default:
            return state;
    }
}

export const table = combineReducers({
    suppliers,
    isLoading,
    selectedSupplier,
    error,
});
