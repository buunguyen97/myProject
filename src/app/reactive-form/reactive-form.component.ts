import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  public formData: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  public onSubmit(): void {
    console.log(this.formData.value);
    // this.form.submitData(this.name);
  }
}
