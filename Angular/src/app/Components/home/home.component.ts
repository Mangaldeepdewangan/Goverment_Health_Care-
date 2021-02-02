import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true, 
      typeColor: 'blue' 
    })
    
    writer
      .strings(
        400,
        "Good health is not something we can buy. However, it can be an extremely valuable savings account  - .. Anne Wilson Schaef",
        "Your body hears everything your mind says. - .. Naomi Judd", 
        "Your body hears everything your mind says. Naomi Judd"
              )
      .start()
  }

}
