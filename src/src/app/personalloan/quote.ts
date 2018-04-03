import {PersonalLoanRequest} from './PersonalLoanRequest';
import {application} from './application';

export class quote{
    loan_requestID:number;
    FBA_id:number;
    PersonalLoanRequest:PersonalLoanRequest[];
    application:application[];
}