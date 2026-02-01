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

  cars = [
    { brand: 'Tesla', model: 'Model 3', price: 45000, imageUrl: 'assets/tesla.jpg' },
    { brand: 'BMW', model: 'i4', price: 58000, imageUrl: 'assets/bmw.jpg' },
    { brand: 'Audi', model: 'Q4 e-tron', price: 52000, imageUrl: 'assets/audi.jpg' }
  ];

  // Getter per ottenere solo le auto che corrispondono alla ricerca
  get filteredCars() {
    return this.cars.filter(car => 
      car.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }  
}
