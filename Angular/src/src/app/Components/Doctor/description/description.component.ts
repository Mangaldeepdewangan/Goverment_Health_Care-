import { Component, OnInit } from '@angular/core';
import { DocServiceService } from 'src/app/Service/doc-service.service';
import jspdf from 'jspdf'

import html2canvas from 'html2canvas'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  Description:any=[];
  
  constructor(private Doc:DocServiceService) { }

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

  download()
  {
   var element=document.getElementById('table')
   
   html2canvas(element).then((canvas)=>{
     console.log(canvas)

     var imgData=canvas.toDataURL('image/png');
     var doc=new jspdf();
     var imgHeight= canvas.height * 208/canvas.width;
     doc.addImage(imgData ,0,0,208,imgHeight);
     doc.save("image.pdf")
   })
  }


}
