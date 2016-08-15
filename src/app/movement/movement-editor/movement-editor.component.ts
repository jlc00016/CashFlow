import { Component, OnInit } from '@angular/core';
import { MovementModel, MovementsService } from '../../shared';
import { ActivatedRoute, Router } from '@angular/router' 

@Component({
  moduleId: module.id,
  selector: 'app-movement-editor',
  templateUrl: 'movement-editor.component.html',
  styleUrls: ['movement-editor.component.css']
})
export class MovementEditorComponent implements OnInit {
  
  movement: MovementModel;
  masters = {};

  constructor(
    private movementsService: MovementsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.movement = this.createMovement();
  }

  ngOnInit() {

    this.movementsService
      .getMasters()
      .subscribe(res => {
        this.masters = res.json()
      })

    let id = this.activatedRoute.snapshot.params['id'];
    if (id && id !== '_') {
      this.movementsService
        .getMovementById(id)
        .subscribe(res => {
          if (res.status == 200) {
            this.movement = res.json() || {}
          }
        });
    } else {
      this.movement = this.createMovement();
    }
  }
  
  saveMovement() {
    this.movementsService
      .saveMovement(this.movement)
      .subscribe(res => {
        this.router.navigate(['/'])
        return false
      });
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
