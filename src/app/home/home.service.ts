import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public counter = 0;

  constructor() {}

  public binhphuong(n: number): number {
    return n * n;
  }
}
