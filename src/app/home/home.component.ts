import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public color = 'yellow';
  public name = 'Buu nguyen';
  public age = 17;
  public vehicles = ['Toyota', 'Honda', 'Nissan', 'Suzuki', 'Yamaha'];

  public tangTuoi() {
    this.age++;
    this.name = 'alo ';
  }

  public traicay = [
    {
      ten: 'Táo',
      gia: 45000,
    },
    {
      ten: 'Cam',
      gia: 55000,
    },
    {
      ten: 'bưởi',
      gia: 15000,
    },
    {
      ten: 'mận',
      gia: -15000,
    },
  ];
  public counter = 0;

  constructor(private home: HomeService) {
    this.counter = this.home.counter;
    this.counter = this.home.binhphuong(this.counter);
    this.home.counter++;
  }

  ngOnInit(): void {}
}
