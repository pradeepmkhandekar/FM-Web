import { InsuMastDetails } from "./InsuMastDetails";

export class InsuMastResponse{
    Message:string;
    Status:string;
    StatusNo:number;
    MasterData: InsuMastDetails[];
}