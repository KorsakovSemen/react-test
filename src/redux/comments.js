import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.RATING_UP:
            return {
                comments: state.map((comment) => {
                    if(comment.id === action.id){
                        return{
                            ...comment,
                            rating:action.rating
                        };
                    } else
                        return state;
                })
            };
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return { ...state, comments: state.comments.concat(comment)};

        default:
            return state;
    }
};
