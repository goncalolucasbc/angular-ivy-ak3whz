import { Component, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'my-form',
  template: `
    <form #f="ngForm">
      <ng-content></ng-content> 
      <pre> Value {{ f.value | json }}</pre>
      <pre> Status: {{ f.status }}</pre>
      <pre> Submitted: {{ f.submitted }}</pre>
      <input type="submit" value="Submit" />
    </form>
  `,
  providers: [
    {
      provide: ControlContainer,
      useFactory: (hc: FormComponent) => {
        console.log(!!hc.form);
        return hc.form;
      },
      deps: [FormComponent],
    },
  ],
})
export class FormComponent {
  @ViewChild(NgForm, { static: true }) form: NgForm | undefined;
}
