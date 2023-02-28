import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemplateDrivenFormService {
  constructor() {}

  public submitData(data: any): void {
    console.log('gửi data leen server .Data=', data);
  }
}
