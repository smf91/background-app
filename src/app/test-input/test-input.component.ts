import { FormItems } from './../app.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements FormItems, OnInit {
  @Input() type = ''
  @Input() label = 'initial value'
  @Input() required = false

  constructor() { }

  ngOnInit(): void {
  }

}
