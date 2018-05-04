import queryString from "query-string";

import { FETCH_SUPPLIERS_FULFILLED } from "../actions/actions";

export function mapLinks(links) {
    return Object.entries(links).map(([key, value]) => ({
        page: Number(key),
        query: queryString.parse(value),
    }));
}

export function pagination(state = { links: [] }, action) {
    switch (action.type) {
        case FETCH_SUPPLIERS_FULFILLED:
            const { pagination } = action.payload;
            return {
                ...pagination,
                current: Number(pagination.current),
                links: mapLinks(pagination.links),
            };
        default:
            return state;
    }
}
