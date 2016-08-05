import { Component, provide } from '@angular/core';
import { MovementsService, MovementModel } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css'],
  providers: [
    MovementsService,
    provide(MovementModel, { useValue: {
      id: new Date().toDateString(),
      kind: "Ingreso",
      category: "Nómina",
      date: new Date(),
      amount: 0
    }})]
})
export class MovementComponent {

  sortDirection: number = 1;

  constructor(private movementsService: MovementsService, private movement: MovementModel) { }
  
  saveMovement() {
    this.movementsService.saveMovement(this.movement);
  }

  orderBy(field: string) {
    this.sortDirection = -1 * this.sortDirection
    this.movementsService.movements.sort((a, b) => a[field] < b[field] ? this.sortDirection : -1 * this.sortDirection)
  }

 // TODO: utility functions move to an injectable class in a common file
  stringToDate(string: string) {
    return new Date(string)
  }

}