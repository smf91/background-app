import { TestInputComponent } from './test-input/test-input.component';
import { RefDirective } from './ref.directive';
import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface FormItems {
  type: string
  required: boolean
  label: string
  placeholder?: string
  description?: string
  choices?: Array<string>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(RefDirective) refDir: RefDirective

  testForm: FormGroup
  // testForm: {}
  constructor (
    private http: HttpClient,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.testForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(null)
    })
  }

  getFormData() {
    debugger
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(response => {
        console.log(response);
        // ..magic
        const items: Array<FormItems> = [
          {
            type: 'input',
            required: true,
            label: 'first name',
            placeholder: 'what is your name'
          },
          {
            type: 'input',
            required: true,
            label: 'last name',
            placeholder: 'what is your name'
          }
        ]
        this.renderForm(items)
      })
  }

  renderForm(items: Array<FormItems>) {
    this.refDir.containerRef.clear()
    items.forEach( (item: FormItems) => {
      if (item.type === 'input') {
        let itemComponent = this.resolver.resolveComponentFactory(TestInputComponent) // data model cmponent
        let itemComponentRef = this.refDir.containerRef.createComponent(itemComponent) // ref to HTML template

        ;(<TestInputComponent>( // data injection from JSON
          Object.assign(itemComponentRef.instance, item)
        )) 
      }

    });
  }


}
