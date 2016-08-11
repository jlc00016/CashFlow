import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';  
import { MovementsService } from './shared/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MovementsService]
})
export class AppComponent {
  title = 'Cash Flow works!';
}
