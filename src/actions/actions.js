export const FETCH_PAYMENTS = "FETCH_PAYMENTS";
export const fetchPayments = () => ({
    type: FETCH_PAYMENTS,
});

export const FETCH_PAYMENTS_FULFILLED = "FETCH_PAYMENTS_FULFILLED";
export const fetchPaymentsFulfilled = payload => ({
    type: FETCH_PAYMENTS_FULFILLED,
    payload,
});

export const FETCH_PAYMENTS_REJECTED = "FETCH_PAYMENTS_REJECTED";
export const fetchPaymentsRejected = () => ({
    type: FETCH_PAYMENTS_REJECTED,
});

export const SET_SEARCH = "SET_SEARCH";
export const setSearch = payload => ({
    type: SET_SEARCH,
    payload,
});

export const SEARCH_SUPPLIERS = "SEARCH_SUPPLIERS";
export const searchSuppliers = payload => ({
    type: SEARCH_SUPPLIERS,
    payload,
});

export const CHANGE_RATING = "CHANGE_RATING";
export const changeRating = payload => ({
    type: CHANGE_RATING,
    payload,
});

export const RESET = "RESET";
export const reset = () => ({
    type: RESET,
});
