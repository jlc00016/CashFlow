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
    let index = this.movements.findIndex((m) => m.id === movement.id);

    if (index === -1) {
      this.movements.push(Object.assign({}, movement));
    } else {
      this.movements[index] = movement;
    }
    
    this.calculateBalance(movement);
  }

  calculateBalance(newMovement: MovementModel) {
    this.incomes = this.movements.reduce((previous, current) => current.kind === 'Ingreso' ? previous + current.amount : previous, 0);
    this.expenses = this.movements.reduce((previous, current) => current.kind === 'Gasto' ? previous + current.amount : previous, 0);
    this.balance = this.incomes - this.expenses
  }

  getMovement(id: string) {
    let movementFound = this.movements.find(m => m.id == id);
    return movementFound;
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