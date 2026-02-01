import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const cars= [
      { brand: 'Tesla', model: 'Model 3', price: 45000, imageUrl: 'assets/tesla.jpg' },
      { brand: 'BMW', model: 'i4', price: 58000, imageUrl: 'assets/bmw.jpg' },
      { brand: 'Audi', model: 'Q4 e-tron', price: 52000, imageUrl: 'assets/audi.jpg' },
      { brand: 'Fiat', model: '500e', price: 28000, imageUrl: 'assets/fiat.jpg' }
    ];
    return { cars }; // L'URL della API sarà 'api/cars'
  }  
}
