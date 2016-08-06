import { Component, OnInit, Input } from '@angular/core';
import { MovementModel, MovementsService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-movement-editor',
  templateUrl: 'movement-editor.component.html',
  styleUrls: ['movement-editor.component.css']
})
export class MovementEditorComponent implements OnInit {
  
  @Input('movementToEdit') movement: MovementModel;

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
  }
  
  saveMovement() {
    this.movementsService.saveMovement(this.movement);
    this.movement = this.createMovement();
  }
  
  createMovement() {
    return {
      id: '',
      kind: "Ingreso",
      category: "Nómina",
      date: new Date(),
      amount: 0
    }
  }

}
