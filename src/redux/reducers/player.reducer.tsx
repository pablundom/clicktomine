import {Player} from "../../entity/Player";
import {Action} from "../../entity/Action";
import {ADD_CLICK_STAT, ADD_RESOURCE, CLICK_MINE, LOAD_SAVE} from "../types/types";
import _ from "lodash";
import {ADD_MINER, ASSIGN_MINER, ON_ADD_TICKS, ON_TICK} from "../types/automation.types";
import {findById, findByOid} from "../../utils/util.repository";
import {Miner} from "../../entity/Miner";


export const playerReducer = (state: Player = new Player(), action: Action) => {
    switch (action.type) {
        case ADD_RESOURCE:
            const res = _.cloneDeep(state);
            if (action.payload.resources) {
                action.payload.resources.forEach((resource: any) => {
                    res.resourceBag.addResource(resource.resource, resource.amount);
                })
            }
            return res;
        case ADD_CLICK_STAT:
            const clickRes = _.cloneDeep(state);
            clickRes.stat.totalClicks += action.payload.amount;
            return clickRes;
        case LOAD_SAVE:
            if (action.payload) {
                return action.payload;
            }
            return state;
        case ADD_MINER:
            const minRes = _.cloneDeep(state);
            minRes.automation_entities.push(action.payload);

            return minRes;

        case ON_ADD_TICKS:
            const onAddTicks = _.cloneDeep(state);
            onAddTicks.stat.totalTicks += action.payload.ticks;

            return onAddTicks;
        case ASSIGN_MINER:
            const assignRes = _.cloneDeep(state);
            const mine = action.payload.mine;
            let miner = action.payload.miner;
            miner = findByOid(miner.oid, assignRes.automation_entities);
            miner.assignedTo = mine;
            return assignRes;
    }

    return state;
}