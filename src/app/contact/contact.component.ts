import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  submitted:boolean = false;


  constructor(private fb:FormBuilder, private router: Router) {
  }

  contactForm = this.fb.group({
    fName:['', [Validators.required]],
    lName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]]
  })

  get f() {return this.contactForm.controls;}

  refreshPage() {
    window.location.reload();
   }

  onSubmit() {
    this.submitted = true;
    if(this.contactForm.valid) {
      this.refreshPage();

    }
  }

  ngOnInit(): void {
  }

}
