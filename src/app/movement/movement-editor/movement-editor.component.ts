import { Component, OnInit, Input } from '@angular/core';
import { MovementModel, MovementsService } from '../../shared';
import { ActivatedRoute } from '@angular/router' 

@Component({
  moduleId: module.id,
  selector: 'app-movement-editor',
  templateUrl: 'movement-editor.component.html',
  styleUrls: ['movement-editor.component.css']
})
export class MovementEditorComponent implements OnInit {
  
  @Input('movementToEdit') movement: MovementModel;

  constructor(private movementsService: MovementsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.movement = this.movementsService.getMovement(id);
    } else {
      this.movement = this.createMovement();
    }
  }
  
  saveMovement() {
    this.movementsService.saveMovement(this.movement);
    this.movement = this.createMovement();
  }
  
  createMovement() {
    return {
      id: new Date().getTime().toString(),
      kind: "Ingreso",
      category: "Nómina",
      date: new Date(),
      amount: 0
    }
  }

}
