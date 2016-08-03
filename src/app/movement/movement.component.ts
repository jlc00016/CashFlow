import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-movement',
  templateUrl: 'movement.component.html',
  styleUrls: ['movement.component.css']
})
export class MovementComponent implements OnInit {

  entryCategories: string[] = ['Nómina', 'Venta', 'Interés', 'Impuesto'];
  spendingCategories: string[] = ['Hipoteca', 'Compra', 'Interés', 'Impuesto'];
  movement: MovementModel;
  movements: MovementModel[] = [];
  sortDirection: number = 1;
  incomes: number = 0;
  expenses: number = 0;
  balance: number = 0;

  constructor() { }

  ngOnInit() {
    this.movement = {
      id: new Date().toDateString(),
      kind: "Ingreso",
      category: "Nómina",
      date: new Date(),
      amount: 0
    }
  }
  
  saveMovement() {
    if (this.movement.kind === 'Ingreso') {
      this.incomes += this.movement.amount
    } else {
      this.expenses += this.movement.amount
    }
    this.balance = this.incomes - this.expenses
    this.movements.push(Object.assign({}, this.movement))
  }  

  orderBy(field: string) {
    this.sortDirection = -1 * this.sortDirection
    this.movements.sort((a, b) => a[field] < b[field] ? this.sortDirection : -1 * this.sortDirection)
  }

  stringToDate(string: string) {
    return new Date(string)
  }

}

//TODO exported to a separate file
export class MovementModel {
  id: string;
  kind: string;
  category: string;
  date: Date;
  amount: number;
}