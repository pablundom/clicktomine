import {Stat} from "./Stat";
import {Resource} from "./Resource";
import {serializable} from "../decorators/serializable";



export interface Action {
    type: string;
    payload: any;
}