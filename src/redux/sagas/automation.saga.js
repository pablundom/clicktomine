import {all, call, put, select, takeEvery} from 'redux-saga/effects'
import {ON_ADD_TICKS, ON_TICK, ON_TICKS_COME_BACK, START_TICKING} from "../types/automation.types";
import {ADD_RESOURCE, CACULATE_MINE_ODDS} from "../types/types";
import * as moment from "moment";
import {calculateMineOdds} from "../../utils/utils.resource";
import {calculateResourcesEarnedByAutomationEntitiesInTicks} from "../../utils/util.automation";

function* dispatchMiners(action) {
    const player = yield select(state => state.player);
    for (let i =0;i<player.automation_entities.length;i++) {
        const a = player.automation_entities[i];
        if (a.assignedTo) {
            const mine = a.assignedTo;
            yield put({type: CACULATE_MINE_ODDS, payload: {mine: mine, mining_callback: a.mining_callback}});
        }
    }
    yield true;
}

function* dispatchMinersOnComeback(action) {
    const player = yield select(state => state.player);
    const before = moment(player.savedAt);
    const now = moment();
    const secondsDiff = (now.diff(before, "s"));
    yield put({type: ON_ADD_TICKS, payload: {ticks: secondsDiff}});
    const resourcesArray = calculateResourcesEarnedByAutomationEntitiesInTicks(secondsDiff, player.automation_entities);
    yield put({type: ADD_RESOURCE, payload: {resources: resourcesArray}});


    yield true;
}

function* resumeTicking(action) {
    yield put({type: START_TICKING, payload: {}});
}


function* callDispatchMinersOnComeback() {
    yield takeEvery(ON_TICKS_COME_BACK, dispatchMinersOnComeback)
}
function* addTicks() {
    yield put({type: ON_ADD_TICKS, payload: {ticks: 1}})
}

function* callResumeStartTicking() {
    yield takeEvery(ON_TICKS_COME_BACK, resumeTicking)
}

export let automationSaga = function* automationSaga() {
    yield all([
        yield takeEvery(ON_TICK, dispatchMiners),
        yield takeEvery(ON_TICK, addTicks),
        call(callDispatchMinersOnComeback),
        call(callResumeStartTicking),
    ])
}