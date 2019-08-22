import { READ_ITEMS, INSERT_ITEM } from '../Actions/ActionTypes'

const initialValue = {
    items : [],
}

export const postReducer = (state = initialValue, action) =>{

    switch(action.type){
        case READ_ITEMS:
            return {
                ...state,
                items : action.payload
            };
        case INSERT_ITEM:
            return {
                ...state,
                items : [ ...state.items, 
                    {title  : action.payload.title,
                     id     : action.payload.id} 
                ]
            }
        default:
            return state; 
    }
}