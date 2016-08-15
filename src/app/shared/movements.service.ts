import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovementsService {
  
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: Http) { }
    
  getMasters(): Observable<Response> {
    return this.http
      .get(`${this.baseUrl}/maestros`)
  }

  saveMovement(movement: MovementModel) {
    let body = JSON.stringify(movement);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    if (movement.id && movement.id !== '_') {
      return this.http
        .put(`${this.baseUrl}/movimientos/${movement.id}`, body, options)
    } else {
      return this.http
        .post(`${this.baseUrl}/movimientos`, body, options)
    }
  }

  getMovements(): Observable<Response> {
    return this.http
      .get(`${this.baseUrl}/movimientos`)
  }

  getMovementById(id: string): Observable<Response> {
    return this.http
      .get(`${this.baseUrl}/movimientos/${id}`)
  }

  getTotals(): Observable<Response> {
    return this.http
      .get(`${this.baseUrl}/movimientos/totales`)
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