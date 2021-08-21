
import {serializable} from "../decorators/serializable";
import {RESOURCE} from "../types/resource.type";

@serializable
export class Resource  {
    public id!: number;
    public name!: string;
    public type!: number;
    idName!: string;
    description!: string;
    sellValue!: number;
    itemValue!: number;
    rarity!: number;
}