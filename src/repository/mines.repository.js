import {get} from "../utils/util.repository";
import {resourcesRepository} from "./resources.repository";


export const minesRepository = [
    {
        id: 1,
        name: "Mina de Piedra",
        odds: [
            {
                resource: get(1, resourcesRepository),
                odd: 1,
                multiplier: [
                    {
                        amount: 1,
                        odd: 0.5
                    },
                    {
                        amount: 2,
                        odd: 0.3
                    },
                    {
                        amount: 3,
                        odd: 0.1
                    },
                    {
                        amount: 4,
                        odd: 0.05
                    },
                    {
                        amount: 5,
                        odd: 0.03
                    },
                    {
                        amount: 10,
                        odd: 0.02
                    },
                ]
            },
            {
                resource: get(2, resourcesRepository),
                odd: 0.1,
                multiplier: [
                    {
                        amount: 1,
                        odd: 0.7
                    },
                    {
                        amount: 2,
                        odd: 0.3
                    },
                ]
            }
        ]
    },
]