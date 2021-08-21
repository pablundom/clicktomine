import {Action} from "../../entity/Action";
import {START_TICKING, STOP_TICKING} from "../types/automation.types";



export const automationReducer = (state= {ticking: false}, action: Action) => {
    switch (action.type) {
        case START_TICKING:
            return {ticking: true};
        case STOP_TICKING:
            return {ticking: false};
    }

    return state;
}