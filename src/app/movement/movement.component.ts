import { Component, provide } from '@angular/core';
import { MovementsService, MovementModel } from '../shared';
import { MovementEditorComponent } from './movement-editor';
import { MovementListComponent } from './movement-list';
import { MovementBalanceComponent } from './movement-balance';

@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css'],
  directives: [MovementEditorComponent, MovementListComponent, MovementBalanceComponent],
  providers: [
    provide(MovementModel, { useValue: {
      id: new Date().getTime().toString(),
      kind: "Ingreso",
      category: "Nómina",
      date: new Date(),
      amount: 0
    }})]
})
export class MovementComponent {

  constructor(private movementsService: MovementsService, private movement: MovementModel) { }

  onSelectMovement(movementReceivedFromMySon: MovementModel) {
    this.movement = movementReceivedFromMySon;
  }

}