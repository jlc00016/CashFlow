import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';

@Injectable()
export class HttpToolsService {
  
  private static _router: Router;
  private static _token: any;
  
  constructor(private router: Router) {
    HttpToolsService._router = this.router;
  }
  
  configureHeaders() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'sessionId': HttpToolsService._token
    });
    let options = new RequestOptions({ headers: headers });

    return options;
  }

  obtainData(response) { 
    // TODO: validate status code and control empty data
    return response.json();
  }
  
  handleErrors(error) {
    console.log(JSON.stringify(error));
    if (error.status == 401) {
      console.log("Error de permisos");
      HttpToolsService._router.navigate(['seguridad']);
    } else {
      console.log("Otro Error");
    }

    return Observable.throw(error._body);
  } 
 
  saveCredentials(token) {
    console.log('Guardando token: ' + token);
    HttpToolsService._token = token;
    HttpToolsService._router.navigate(['']);

    return token
  }

}
