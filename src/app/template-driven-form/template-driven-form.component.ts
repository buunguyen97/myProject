import { Component } from '@angular/core';
import { TemplateDrivenFormService } from './template-driven-form.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  public name = '';

  constructor(private form: TemplateDrivenFormService) {}

  public submitForm(): void {
    // console.log(this.name);
    this.form.submitData(this.name);
  }
}
