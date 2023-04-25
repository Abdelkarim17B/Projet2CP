import { Bank } from "./Bank"; 
import { PrestationModel } from "./Prestation";

export interface ComparaisonModel{
    Bank1: [banqueInfos: Bank,PrestationInfo: PrestationModel];
    Bank2: [banqueInfos: Bank,PrestationInfo: PrestationModel];
}