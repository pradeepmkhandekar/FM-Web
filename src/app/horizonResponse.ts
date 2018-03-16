import {PremiumBreakup} from './PremiumBreakup';
import {Insurer} from './Insurer';
import {LMCustomRequest } from './LMCustomRequest';

export class horizonResponse{
    Service_Log_Id:number;
    Service_Log_Unique_Id:string;
    Error_Code:string;
    Created_On:string;
    Product_Id:number;
    Insurer_Id:number;
    Status:string;
    LM_Custom_Request:LMCustomRequest;
    Premium_Breakup:PremiumBreakup;
    Insurer:Insurer;
    Call_Execution_Time:number;
}