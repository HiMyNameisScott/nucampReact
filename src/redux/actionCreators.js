import * as ActionTypes from './actionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId,
        rating,
        author,
        text
    }
})