import { Component } from '@angular/core';

@Component({
  selector: 'app-cascading',
  templateUrl: './cascading.component.html',
  styleUrls: ['./cascading.component.css'],
})
export class CascadingComponent {
  public districts: string[] = [];
  public cities = [
    {
      city: 'Thành Phố',
      district: ['Tỉnh'],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: ['Vũng Tàu', 'Bà Rịa', 'Phú Mỹ'],
    },
    {
      city: 'An Giang',
      district: ['Long Xuyên', 'Châu Đốc', 'Tân Châu'],
    },
  ];

  public changeCity(event: any) {
    const city = event.target.value;
    // const search = this.cities.filter((data) => data.city === city);
    // if (search.length > 0) {
    //   this.districts = search[0].district || [];
    // }

    this.districts =
      this.cities.find((data) => data.city === city)?.district || [];
  }
}
