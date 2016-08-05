import { Injectable } from '@angular/core';

@Injectable()
export class MovementsService {
  
  entryCategories: string[] = ['Nómina', 'Venta', 'Interés', 'Impuesto'];
  spendingCategories: string[] = ['Hipoteca', 'Compra', 'Interés', 'Impuesto'];
  movements: MovementModel[] = [];
  incomes: number = 0;
  expenses: number = 0;
  balance: number = 0;

  constructor() { }
  
  saveMovement(movement: MovementModel) {
    if (movement.kind === 'Ingreso') {
      this.incomes += movement.amount;
    } else {
      this.expenses += movement.amount;
    }
    this.balance = this.incomes - this.expenses;
    this.movements.push(Object.assign({}, movement));
  }

}

//TODO exported to a separate file
@Injectable()
export class MovementModel {
  id: string;
  kind: string;
  category: string;
  date: Date;
  amount: number;
}