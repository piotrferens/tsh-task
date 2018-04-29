import { createSelector } from "reselect";

export const buildQuery = createSelector(
    state => state.rating,
    state => state.search,
    (rating, search) => ({ rating, query: search }),
);
