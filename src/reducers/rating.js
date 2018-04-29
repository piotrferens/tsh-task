import { CHANGE_RATING, RESET } from "../actions/actions";

export function rating(state = "0", action) {
    switch (action.type) {
        case CHANGE_RATING:
            return action.payload;
        case RESET:
            return "0";
        default:
            return state;
    }
}
