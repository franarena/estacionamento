import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Car } from './car';
import { FormsModule } from '@angular/forms'; // Necessario per [(ngModel)]

@Component({
  selector: 'arn-car-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa FormsModule qui
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  searchTerm: string = '';
  maxPrice: number = 100000; // Valore iniziale dello slider

  cars = [
    { brand: 'Tesla', model: 'Model 3', price: 45000, imageUrl: 'assets/tesla.jpg' },
    { brand: 'BMW', model: 'i4', price: 58000, imageUrl: 'assets/bmw.jpg' },
    { brand: 'Audi', model: 'Q4 e-tron', price: 52000, imageUrl: 'assets/audi.jpg' },
    { brand: 'Fiat', model: '500e', price: 28000, imageUrl: 'assets/fiat.jpg' }
  ];

  // Getter per ottenere solo le auto che corrispondono alla ricerca
  // Performance: Per liste di piccole/medie dimensioni, il filtro tramite getter è estremamente veloce e pulito secondo gli standard Angular.  
  // Reattività immediata: La griglia si aggiorna in tempo reale mentre scrivi grazie al binding bidirezionale gestito dai FormsModule.
  get filteredCars() {
    return this.cars.filter(car => {
      const matchesSearch = car.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            car.model.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesPrice = car.price <= this.maxPrice;
      return matchesSearch && matchesPrice;
    });
  }  
}
