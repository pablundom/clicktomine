import {combineReducers} from 'redux'
import {playerReducer} from "./reducers/player.reducer";
import {logReducer} from "./reducers/log.reducer";
import {automationReducer} from "./reducers/automationReducer";


export const rootReducer = combineReducers({
    player: playerReducer,
    log: logReducer,
    automation: automationReducer
})