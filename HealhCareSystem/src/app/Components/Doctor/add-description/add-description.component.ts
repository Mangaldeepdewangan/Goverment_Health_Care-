import { Component, OnInit } from '@angular/core';
import {DocDerviceService} from '../../../Services/doc-dervice.service'
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.css']
})
export class AddDescriptionComponent implements OnInit {

  Description:any=[];
  constructor(private Doc:DocDerviceService) { }

  ngOnInit(): void {
  }


  onSubmit(medicine,dose,qty)
  {
    if(medicine.value!='' && dose.value!='' && qty.value!='' && qty.value>0)
    {
    this.Description.push({"id":1,"appointment_id":1,"dose":dose.value, "medicine":medicine.value ,"p_id":1,"qty":qty.value});
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Blank Description can not Add ',
    })
  }

  }

  OnClick(){
    this.Doc.SaveDescription(this.Description).subscribe(res=>{
      console.log(res);
    }
      ,err=>{})
  }

  delete(i)
  {
   this.Description.splice(i ,1);
  }

}
