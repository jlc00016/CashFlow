import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../shared/movements.service';

@Component({
  moduleId: module.id,
  selector: 'app-security',
  templateUrl: 'security.component.html',
  styleUrls: ['security.component.css']
})
export class SecurityComponent implements OnInit {

  user: any = {
    email: '', 
    password: ''
  };

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
  }

  registerUser() {
    this.movementsService
      .register(this.user)
      .subscribe(
        r => { console.log(r); }
      );
  }

}
