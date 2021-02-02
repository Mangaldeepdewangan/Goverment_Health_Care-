import { Department } from "./Department";

export class Hospital{
    id:number
    Hospital_name:string;
    city:string;
    Address:string;
    role:string
    departments: Department[]=[];
    receptionist_id:number

    constructor()
    {
        
    }
}