import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'arn-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  cars: Car[] = [
    { brand: 'Tesla', model: 'Model 3', price: 45000, imageUrl: 'assets/tesla.jpg' },
    { brand: 'BMW', model: 'i4', price: 58000, imageUrl: 'assets/bmw.jpg' },
    // Aggiungi altre auto qui
  ];
}
