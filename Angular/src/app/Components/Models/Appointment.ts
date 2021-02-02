export class Appointment{
    a_id:number;
    doc_id:number;
    p_id:number=1;
    slot:number;
    problem:string;
    status:string
    hos_id:number;
    appointment_date:Date;
    feedback_Status:boolean=false;
    constructor()
    {
        
    }
}