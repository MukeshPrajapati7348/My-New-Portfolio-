import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less']
})
export class SkillComponent implements OnInit {

 
  skills: string[] = ["Angular", "Typescript", "CSS", "HTML", "LESS", "Javascript", "C", "C++", "React", "Rxjs", "Bootstrap", "Nodejs", "MySQL", "MongoDB", "Python", "DSA"];

  constructor() { }

  ngOnInit(): void {
  }

}
