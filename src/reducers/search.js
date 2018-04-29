import { SET_SEARCH, RESET } from "../actions/actions";

export function search(state = "", action) {
    switch (action.type) {
        case SET_SEARCH:
            return action.payload;
        case RESET:
            return "";
        default:
            return state;
    }
}
