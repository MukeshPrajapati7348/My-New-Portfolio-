import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my Services/my-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  // bioText:string = '';
  // myFullInfo:string = ``;
  // intervalId:any;
  // expShowText:string = '';
  // index:any;


  constructor(private service: MyServiceService) {
    // this.index = 0;
  }

  

  // setValues() {
  //   if(this.index < this.myFullInfo.length) {
  //     this.expShowText += this.myFullInfo[this.index++];
  //     console.log(this.index);
  //   }

  //   else {
  //     clearInterval(this.intervalId);
  //   }

  // }
  
  
  
  ngOnInit(): void {
    // this.service.reveal();
    // this.intervalId = setInterval(()=> this.setValues(),50);
  }

}
