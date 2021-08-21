import {Stat} from "./Stat";

import {ResourceBag} from "./ResourceBag";

import {serializable} from "../decorators/serializable";

@serializable
export class Player  {
    stat: Stat = new Stat();
    resourceBag: ResourceBag = new ResourceBag();
    automation_entities: any[] = [];
    savedAt!: Date;
}