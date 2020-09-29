import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  text = 'contact page';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  };
  submitted = false;

  constructor() {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      // tslint:disable-next-line: object-literal-key-quotes
      'name': new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      // tslint:disable-next-line: object-literal-key-quotes
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      // tslint:disable-next-line: object-literal-key-quotes
      'text': new FormControl(this.contact.text, Validators.required)
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
