import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  tabs:string[] = ["home", "about", "skills", "education", "contact"]
  isActiveAbout:boolean = false;
  isActiveHome:boolean = true;
  isActiveSkills:boolean = false;
  isActiveEducation:boolean = false;
  isActiveContact:boolean = false;
  constructor() { }

  addActiveClass(tab:any) {
    switch(tab) {
      case "about": { 
        this.isActiveAbout = true;
        this.isActiveHome = false;
        this.isActiveSkills = false;
        this.isActiveEducation = false;
        this.isActiveContact = false;
        break;
      }
      case "home": { 
        this.isActiveAbout = false;
        this.isActiveHome = true;
        this.isActiveSkills = false;
        this.isActiveEducation = false;
        this.isActiveContact = false;
        break;
      }
      case "skills": { 
        this.isActiveAbout = false;
        this.isActiveHome = false;
        this.isActiveSkills = true;
        this.isActiveEducation = false;
        this.isActiveContact = false;
        break;
      }
      case "education": { 
        this.isActiveAbout = false;
        this.isActiveHome = false;
        this.isActiveSkills = false;
        this.isActiveEducation = true;
        this.isActiveContact = false;
        break;
      }
      case "contact": { 
        this.isActiveAbout = false;
        this.isActiveHome = false;
        this.isActiveSkills = false;
        this.isActiveEducation = false;
        this.isActiveContact = true;
        break;
      }
    }
  }
  onClickHome() {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
    this.addActiveClass("home");
  }
  onClickAbout() {
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
    this.addActiveClass("about");
  }
  onClickSkills() {
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"});
    this.addActiveClass("skills");
  }
  onClickEducation() {
    document.getElementById("education")?.scrollIntoView({behavior:"smooth"});
    this.addActiveClass("education");
  }
  onClickContact() {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
    this.addActiveClass("contact");
  }

  ngOnInit(): void {
  }

}
