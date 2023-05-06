import { Bank } from "./Bank";
import { PrestationModel } from "./Prestation";

export interface Comparison{
    Bank1: [Bank , PrestationModel],
    Bank2: [Bank , PrestationModel]
}