import {serializable} from "../decorators/serializable";
import {Automation} from "./Automation";
import {repository} from "../decorators/repository";
import {automationRepository} from "../repository/automation.repository";


@serializable
@repository(automationRepository, "automation")
export class Miner extends Automation {

}