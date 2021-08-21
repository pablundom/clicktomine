
import {serializable} from "../decorators/serializable";

@serializable
export class Stat   {
    public totalClicks = 0;
    public totalTicks = 0;
}