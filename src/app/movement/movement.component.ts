import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../shared';
import { MovementEditorComponent } from './movement-editor';
import { MovementListComponent } from './movement-list';
import { MovementBalanceComponent } from './movement-balance';

@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css'],
  directives: [MovementEditorComponent, MovementListComponent, MovementBalanceComponent]
})
export class MovementComponent implements OnInit {
  
  totals = {
    "incomes": 0,
    "expenses": 0,
    "balance": 0
  };

  constructor(private movementsService: MovementsService) { }
  
  ngOnInit() {
    this.movementsService.getTotals()
      .subscribe(res => {
        this.totals = res.json() || {}
        console.log(JSON.stringify(this.totals));
      })
  }

}