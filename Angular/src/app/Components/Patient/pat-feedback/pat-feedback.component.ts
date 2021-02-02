import { Component, OnInit } from '@angular/core';
import {Feedback} from '../../Models/Feedback'

@Component({
  selector: 'app-pat-feedback',
  templateUrl: './pat-feedback.component.html',
  styleUrls: ['./pat-feedback.component.css']
})
export class PatFeedbackComponent implements OnInit {

  feed:Feedback=new Feedback();
  currentRate = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {

  }

}
