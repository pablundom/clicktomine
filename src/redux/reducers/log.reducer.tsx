import {Action} from "../../entity/Action";
import {ADD_TO_LOG} from "../types/log.types";


export const logReducer = ( state=  [], action: Action) => {
    switch (action.type) {
        case ADD_TO_LOG:
            const res: any[] =  [...state];
            res.push(action.payload);

            return res;
    }

    return state;
}