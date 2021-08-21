import {all, put, takeLatest} from 'redux-saga/effects'
import {ADD_RESOURCE, CACULATE_MINE_ODDS} from "../types/types";
import {calculateMineOdds} from "../../utils/utils.resource";


function* persistMineOdds(action) {
    const mine = action.payload.mine;
    if (mine) {
        let resources = calculateMineOdds(action);
        yield put({type: ADD_RESOURCE, payload: {resources: resources}});
    }
    yield false;
}




export default function* resourceSaga() {
    yield all([
        yield takeLatest(CACULATE_MINE_ODDS, persistMineOdds),
    ])
}