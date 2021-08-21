import _ from "lodash";
import {
    calculateItemByAverage,
    calculateItemByChance,
    calculateItemByOdd,
    calculateItemsByAverage,
    calculateItemsByChance
} from "./util.odds";
import {Resource} from "../entity/Resource";

export const calculateMineOdds = (action) => {
    const mine = action.payload.mine;
    if (mine) {
        let mineCopy = _.cloneDeep(action.payload.mine);
        if (action.payload.mining_callback) {
            mineCopy = action.payload.mining_callback(mineCopy);
        }
        const itemsGot = calculateItemsByChance(mineCopy.odds);
        const resources = [];
        itemsGot.forEach((i) => {
            const amount = calculateItemByOdd(i.multiplier).amount;
            const resource = Object.assign(new Resource(), i.resource);
            resources.push({resource, amount})
        })
        return resources;
    }
    return [];
}
export const calculateMineAverage = (action) => {
    const mine = action.payload.mine;
    if (mine) {
        let mineCopy = _.cloneDeep(action.payload.mine);
        if (action.payload.mining_callback) {
            mineCopy = action.payload.mining_callback(mineCopy);
        }
        const itemsGot = calculateItemsByAverage(mineCopy.odds);
        const resources = [];
        itemsGot.forEach((i) => {
            const amount = calculateItemByAverage(i.multiplier).amount * i.odd ;
            const resource = Object.assign(new Resource(), i.resource);
            resources.push({resource, amount})
        })
        return resources;
    }
    return [];
}
