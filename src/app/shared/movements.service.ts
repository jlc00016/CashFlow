import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpToolsService } from './http-tools.service';

@Injectable()
export class MovementsService {
  
  baseUrl: string = 'http://localhost:3000/api';

  constructor(private http: Http, private httpToolsService: HttpToolsService) { }
    
  getMasters() {
    let options = this.httpToolsService.configureHeaders();

    return this.http
      .get(`${this.baseUrl}/pub/maestros`,options)
      .map(this.httpToolsService.obtainData)
      .catch(this.httpToolsService.handleErrors)
  }

  saveMovement(movement: MovementModel) {
    let body = JSON.stringify(movement);
    let options = this.httpToolsService.configureHeaders();
 
    if (movement.id && movement.id !== '_') {
      return this.http
        .put(`${this.baseUrl}/priv/movimientos/${movement.id}`, body, options)
        .catch(this.httpToolsService.handleErrors);
    } else {
      return this.http
        .post(`${this.baseUrl}/priv/movimientos`, body, options)
        .catch(this.httpToolsService.handleErrors);
    }
  }

  getMovements() {
    let options = this.httpToolsService.configureHeaders();

    return this.http
      .get(`${this.baseUrl}/priv/movimientos`, options)
      .map(this.httpToolsService.obtainData)
      .catch(this.httpToolsService.handleErrors);
  }

  getMovementById(id: string) {
    let options = this.httpToolsService.configureHeaders();

    return this.http
      .get(`${this.baseUrl}/priv/movimientos/${id}`, options)
      .map(this.httpToolsService.obtainData)
      .catch(this.httpToolsService.handleErrors);
  }

  getTotals() {
    let options = this.httpToolsService.configureHeaders();

    return this.http
      .get(`${this.baseUrl}/priv/movimientos/totales` ,options)
      .map(this.httpToolsService.obtainData)
      .catch(this.httpToolsService.handleErrors);
  }

  // TODO: move your own service 
  register(credentials) {
    let body = JSON.stringify(credentials);
    let options = this.httpToolsService.configureHeaders();

    return this.http
      .post(`${this.baseUrl}/pub/usuarios`, body, options)
      .map(this.httpToolsService.obtainData)
      .map(this.httpToolsService.saveCredentials)
      .catch(this.httpToolsService.handleErrors);
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