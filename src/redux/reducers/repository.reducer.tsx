import {Action} from "../../entity/Action";
import {ADD_REPOSITORY} from "../types/types";


export const repositoryReducer = ( state = {}, action: Action) => {
    switch (action.type) {
        case ADD_REPOSITORY:
            return Object.assign(state, action.payload);
    }

    return state;
}