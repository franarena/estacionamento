import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Car } from './car';
import { FormsModule } from '@angular/forms'; // Necessario per [(ngModel)]
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'arn-car-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa FormsModule qui
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  searchTerm: string = '';
  maxDays: number = 30; // Valore iniziale dello slider

  cars: Car[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http.get<Car[]>('api/cars').subscribe(data => {
      this.cars = data;
    });
  }
  // Getter per ottenere solo le auto che corrispondono alla ricerca
  // Performance: Per liste di piccole/medie dimensioni, il filtro tramite getter è estremamente veloce e pulito secondo gli standard Angular.  
  // Reattività immediata: La griglia si aggiorna in tempo reale mentre scrivi grazie al binding bidirezionale gestito dai FormsModule.
  get filteredCars() {
    return this.cars.filter(car => {
      const matchesSearch = car.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            car.model.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesPrice = car.daysSinceLastPayment <= this.maxDays;
      return matchesSearch && matchesPrice;
    });
  }  
}
