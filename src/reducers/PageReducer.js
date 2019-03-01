import {
    SET_PAGE_INDEX
} from '../actions/types';

const initialState = {
    currentIndex: 0
}

export default function pageReducer(state=initialState, action) {
    switch(action.type) {
        case SET_PAGE_INDEX:
            return {
                currentIndex: action.payload
            };
        default:
            return state;
    }
}
