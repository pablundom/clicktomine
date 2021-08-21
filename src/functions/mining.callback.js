import {NON_COMMOM} from "../types/rarity.type";
import {addPercentageToOdd} from "../utils/util.odds";


export const miningCallback = [
    {
        id: 1,
        callback: (mine) => {
            mine = {...mine};
            mine.odds.forEach(odd => {
                if (odd.resource.rarity === NON_COMMOM) {
                    odd.odd = addPercentageToOdd(odd.odd, 10);
                }
            })
        }
    }
]