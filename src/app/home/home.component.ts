import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { MyServiceService } from '../my Services/my-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {

  index:number = 0;
  id:any;
  text:string = '';
  skillArrLen:number;
  skill:string = '';
  strCount:number = 1;
  strLen:number = 0;
  idx:number = 0;
  skills:string[] = ["Angular", "Typescript", "CSS", "HTML", "LESS", "Javascript", "C Programming", "C++", "React", "Rxjs", "Bootstrap", "Nodejs", "MySQL", "MongoDB"];
 

  
  constructor(private service: MyServiceService) { 
    this.skillArrLen = this.skills.length;
  }

   onClickAbout() {
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }

  setText() {  
    this.index = this.idx;
    this.skill = this.skills[this.index];  //Length of single string in skill array
    this.strLen = this.skill.length;
    this.text = this.skill.slice(0, this.strCount++);
    if(this.strCount > this.strLen) {
      this.index++;
      this.idx = this.index % this.skillArrLen;
      this.strCount = 0;
    }
  }
 
  ngOnInit(): void {
    this.id = setInterval(()=> this.setText(), 200);
  }

  ngOnDestroy() {
    clearInterval(this.id);
  }
}
