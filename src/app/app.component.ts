import { Component } from '@angular/core';
import { MovementComponent } from './movement'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MovementComponent]
})
export class AppComponent {
  title = 'app works!';
}
