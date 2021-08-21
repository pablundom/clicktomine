import {serializable} from "../decorators/serializable";
import { v4 as uuidv4 } from 'uuid';
import {repository} from "../decorators/repository";
import {automationRepository} from "../repository/automation.repository";

@serializable
@repository(automationRepository, "automation")
export class Automation  {
    public id!: number;
    public oid = uuidv4();
    public idName!: string;
    public name!: string;
    public description!: string;
    public cps!: number;
    public price!: number;
    public assignedTo: any;
    public type!: number;
    public mining_callback!: any;
}