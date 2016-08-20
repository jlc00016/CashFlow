import { Component, OnInit } from '@angular/core';
import { MovementsService, MovementModel, CapitalizePipe } from '../../shared';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-movement-list',
  templateUrl: 'movement-list.component.html',
  styleUrls: ['movement-list.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [ CapitalizePipe ]
})
export class MovementListComponent implements OnInit {
  
  movements = [];
  sortDirection: number = 1;

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
    this.movementsService.getMovements()
      .subscribe(res => {
        this.movements = res || []
      })
  }

  orderBy(field: string) {
    this.sortDirection = -1 * this.sortDirection
    this.movements.sort((a, b) => a[field] < b[field] ? this.sortDirection : -1 * this.sortDirection)
  }

   // TODO: utility functions move to an injectable class in a common file
  stringToDate(string: string) {
    return new Date(string)
  }

}
