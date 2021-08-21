import {all, takeEvery, select, call, put} from 'redux-saga/effects'
import _ from "lodash";
import {fromJson, toJson} from "../../utils/util.json.js";
import {LOAD_SAVE, LOAD_SAVE_COMPRESS} from "../types/types";
import {LZString} from "../../utils/util.compression";

function* persist(state) {
    const res = _.cloneDeep(state);
    res.savedAt = new Date();
    const compressedBytes = LZString.compress(toJson(res));
    localStorage.setItem("player_info", compressedBytes);
    yield true;
}

function* loadSave(action) {
    if (action.payload) {
        action.payload = fromJson(LZString.decompress(action.payload));
    }
    yield put({type: LOAD_SAVE, payload: action.payload});
}

function* getStore(action) {
    if (action.type === LOAD_SAVE_COMPRESS || action.type === LOAD_SAVE) {
        return false;
    }
    const getPlayer = state => state.player;
    const data = yield select(getPlayer);

    yield persist(data);
}

function* save() {
    yield takeEvery('*', getStore);
}


export default function* saveSaga() {
    yield all([
        call(save),
        yield takeEvery(LOAD_SAVE_COMPRESS, loadSave)
    ])
}