import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const cars= [
      { brand: 'Tesla', model: 'Model 3',  imageUrl: 'assets/tesla.jpg', daysSinceLastPayment: 15 },
      { brand: 'BMW', model: 'i4', imageUrl: 'assets/bmw.jpg', daysSinceLastPayment: 20 },
      { brand: 'Audi', model: 'Q4 e-tron', imageUrl: 'assets/audi.jpg', daysSinceLastPayment: 25 },
      { brand: 'Fiat', model: '500e', imageUrl: 'assets/fiat.jpg', daysSinceLastPayment: 10 }, 
      { brand: 'Geely', model: 'EX2', imageUrl: 'assets/geely.jpg', daysSinceLastPayment: 30 }
    ];
    return { cars }; // L'URL della API sarà 'api/cars'
  }  
}
