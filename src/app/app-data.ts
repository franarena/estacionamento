import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {
    createDb() {
        const parkedcars = [
          { id: 1, description : 'Ford Escort', plate: 'AB123CD', 'start-date': '2022-01-01', owner: 'Juan Fernández' },
          { id: 2, description : 'Fiat ', plate: 'XY719BB', 'start-date': '2022-03-01', owner: 'Alicia Vazquez' },
          { id: 3, description : 'Chevrolet', plate: 'RI012BE', 'start-date': '2021-11-11', owner: 'El Turco Hassan' },
          { id: 4, description : 'Ford Focus', plate: 'GJ063AB', 'start-date': '2024-06-02', owner: 'Francisco Ahumada' },
          { id: 5, description : 'Renault Clio', plate: 'JQ211RD', 'start-date': '2023-02-20', owner: 'Panaderia La Estrella' },
        ];
        return {parkedcars};
      }
}