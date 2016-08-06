import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-movement-balance',
  templateUrl: 'movement-balance.component.html',
  styleUrls: ['movement-balance.component.css']
})
export class MovementBalanceComponent implements OnInit {
  
  @Input('incomes') incomes: number
  @Input() expenses: number

  constructor() { }

  ngOnInit() {
  }

}
