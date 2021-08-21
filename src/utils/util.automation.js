import {MINER} from "../types/automation.type";
import {put} from "redux-saga/effects";
import {CACULATE_MINE_ODDS} from "../redux/types/types";
import {calculateMineOdds} from "./utils.resource";


export const findUnassignedMiners = (player) => {
    return player.automation_entities.filter(ae => ae.type === MINER).filter(miner => !miner.assignedTo);
}
export const findAssignedMinersByMine = (player, mine) => {
    return player.automation_entities.filter(ae => ae.type === MINER).filter(miner => miner.assignedTo)
        .filter(miner => miner.assignedTo.id === mine.id);
}

export const calculateResourcesEarnedByAutomationEntitiesInTicks = (ticks, automationEntities, fnCalculateOdd=calculateMineOdds) => {
    let result = [];
    if (ticks === 0) {
        return [];
    }
    const iterateNumber = Math.min(100, ticks);
    const totalPerMiner = [];
    for (let i =0;i<automationEntities.length;i++) {
        const a = automationEntities[i];
        if (a.assignedTo) {
            const mine = a.assignedTo;
            for(let i=0;i<iterateNumber;i++) {
                const resource = fnCalculateOdd({payload: {mine: mine, mining_callback: a.mining_callback}});
                resource.forEach(r => {
                    const finded = totalPerMiner.find(f => f.resource.id === r.resource.id);
                    if (!finded) {
                        r.size = 1;
                        totalPerMiner.push(r);
                        return;
                    }
                    finded.amount += r.amount;
                    finded.size += 1;
                });
            }

        }
    }
    const factor = ticks / iterateNumber;
    result = [...totalPerMiner];
    result.forEach((r) => {
        r.amount = Math.round(r.amount * factor);
    });
    result = result.filter(r => r.amount > 0);
    return result;
}