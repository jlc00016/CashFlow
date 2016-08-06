import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovementsService, MovementModel } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-movement-list',
  templateUrl: 'movement-list.component.html',
  styleUrls: ['movement-list.component.css']
})
export class MovementListComponent implements OnInit {
  
  sortDirection: number = 1;
  
  @Output() selectMovement: EventEmitter<MovementModel> = new EventEmitter();

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
  }

  orderBy(field: string) {
    this.sortDirection = -1 * this.sortDirection
    this.movementsService.movements.sort((a, b) => a[field] < b[field] ? this.sortDirection : -1 * this.sortDirection)
  }

   // TODO: utility functions move to an injectable class in a common file
  stringToDate(string: string) {
    return new Date(string)
  }

  select(selectedMovement: MovementModel) {
    this.selectMovement.emit(selectedMovement);
  }

}