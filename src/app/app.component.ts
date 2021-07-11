import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  testForm: FormGroup

  ngOnInit() {
    this.testForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(null)
    })
  }

}
