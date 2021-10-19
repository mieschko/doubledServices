import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuplicatedNameService {

  constructor() { }

  call(): void {
    console.log('DuplicatedNameService first-service.module')
  }
}
