import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForms';
  info;
  constructor(private formBuilder: FormBuilder) {
    this.info = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      contact: '',
      add: '',
      city: '',
      state: '',

      msg: ''
    })
  }
  onSubmit(values = 'any') {
    console.warn("Form Submit", values)
  }
}
