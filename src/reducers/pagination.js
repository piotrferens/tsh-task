import { FETCH_PAYMENTS_FULFILLED } from "../actions/actions";

export function pagination(state = {}, action) {
  switch (action.type) {
    case FETCH_PAYMENTS_FULFILLED:
      return action.payload.pagination;
    default:
      return state;
  }
}
