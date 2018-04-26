import { FETCH_PAYMENTS_FULFILLED } from "../actions/actions";

export function payments(state = [], action) {
  switch (action.type) {
    case FETCH_PAYMENTS_FULFILLED:
      return action.payload.payments;
    default:
      return state;
  }
}
