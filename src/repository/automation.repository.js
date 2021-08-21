import {addPercentageToOdd} from "../utils/util.odds";
import {NON_COMMOM} from "../types/rarity.type";
import {MINER} from "../types/automation.type";

export const automationRepository = [
    {
        id: 1,
        idName: 'miner',
        name: 'Minero',
        description: 'Un simple minero que pica la mina cada segundo y tiene un 10% más de minar minerales no comunes',
        cps: 1,
        price: 10,
        assignedTo: undefined,
        type: MINER,
        mining_callback: (mine) => {
            mine = {...mine};
            mine.odds.forEach(odd => {
                if (odd.resource.rarity === NON_COMMOM) {
                    odd.odd = addPercentageToOdd(odd.odd, 10);
                }
            })
            return mine;
        }
    }
]