import { put, all, takeLatest } from 'redux-saga/effects'
import {ADD_CLICK_STAT, ADD_RESOURCE, CACULATE_MINE_ODDS, CLICK_MINE} from "../types/types";


function* addClickToStat(action) {
    yield put({type: ADD_CLICK_STAT, payload: {amount: 1}});
}

function* calculateOddAction(action) {
    yield put({type: CACULATE_MINE_ODDS, payload: {mine: action.payload}});

}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* clickerSaga() {
    yield all([
        takeLatest(CLICK_MINE, calculateOddAction),
        takeLatest(CLICK_MINE, addClickToStat)
    ])
}