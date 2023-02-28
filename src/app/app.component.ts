import { Component } from '@angular/core';
import { Product } from './commom/product';
import { COURSES } from 'src/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product :Product = {
    name: 'Hat',
    quantity  :200,
    price: 500

  };
  coreCourse= COURSES[0];
  rxjsCourse= COURSES[2];
  ngrxCourse= COURSES[1];
}
