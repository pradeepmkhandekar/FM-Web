import {VehicleDetails} from './VehicleDetails';


export class VehicleResponse{
    Message:string;
    Status:string;
    StatusNo:number;
    MasterData: VehicleDetails[];
}