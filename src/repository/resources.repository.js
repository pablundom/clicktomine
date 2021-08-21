import {RESOURCE} from "../types/resource.type";
import {COMMON, NON_COMMOM} from "../types/rarity.type";


export const resourcesRepository = [
    {
        id: 1,
        idName: 'stone',
        name: 'Piedra',
        description: 'Material sólido de origen natural formado por una asociación de minerales o por uno solo, que constituye una parte importante de la corteza terrestre.',
        sellValue: 0.1,
        itemValue: 1,
        image: 'stone.png',
        type: RESOURCE,
        rarity: COMMON
    },
    {
        id: 2,
        idName: 'iron',
        name: 'Hierro',
        description: 'El hierro es el metal de transición más abundante en la corteza terrestre, y cuarto de todos los elementos.',
        sellValue: 1,
        itemValue: 2,
        image: 'iron.png',
        type: RESOURCE,
        rarity: NON_COMMOM
    }
]