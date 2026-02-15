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
      { brand: 'Tesla', model: 'Model 3', color: 'Nero', owner: 'Mario Rossi', plate: 'AB123CD', imageUrl: null, daysSinceLastPayment: 15 },
      { brand: 'BMW', model: 'i4', color: 'Bianco', owner: 'Giuseppe Verdi', plate: 'EF456GH', imageUrl: null, daysSinceLastPayment: 20 },
      { brand: 'Audi', model: 'Q4 e-tron', color: 'Grigio', owner: 'Anna Bianchi', plate: 'IJ789KL', imageUrl: null, daysSinceLastPayment: 25 },
      { brand: 'Fiat', model: '500e', color: 'Rosso', owner: 'Luca Neri', plate: 'MN012OP', imageUrl: null, daysSinceLastPayment: 10 }, 
      { brand: 'Geely', model: 'EX2', color:'Blu' , owner: 'Francesca Gialli', plate: 'QR345ST', imageUrl: null, daysSinceLastPayment: 30 }
    ];
    return { cars }; // L'URL della API sarà 'api/cars'
  }  
}
