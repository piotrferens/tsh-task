import queryString from "query-string";

import { FETCH_PAYMENTS_FULFILLED } from "../actions/actions";

export function pagination(state = {}, action) {
    switch (action.type) {
        case FETCH_PAYMENTS_FULFILLED:
            const { pagination } = action.payload;
            return {
                ...pagination,
                current: Number(pagination.current),
                links: Object.entries(pagination.links).map(([key, value]) => ({
                    page: Number(key),
                    query: queryString.parse(value),
                })),
            };
        default:
            return state;
    }
}
