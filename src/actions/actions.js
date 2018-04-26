export const FETCH_PAYMENTS = "FETCH_PAYMENTS";
export const fetchPayments = () => ({
  type: FETCH_PAYMENTS
});

export const FETCH_PAYMENTS_FULFILLED = "FETCH_PAYMENTS_FULFILLED";
export const fetchPaymentsFulfilled = payload => ({
  type: FETCH_PAYMENTS_FULFILLED,
  payload
});

export const FETCH_PAYMENTS_REJECTED = "FETCH_PAYMENTS_REJECTED";
export const fetchPaymentsRejected = () => ({
  type: FETCH_PAYMENTS_REJECTED
});
