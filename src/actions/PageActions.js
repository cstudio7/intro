import {
    SET_PAGE_INDEX
} from './types';


export function setIndex(index) {
    return {
        type: SET_PAGE_INDEX,
        payload: index
    }
};
/**
export function decreaseIndex(index) {
    return {
        type: DECREASE_PAGE_INDEX,
        payload: index - 1
    }
}
**/
