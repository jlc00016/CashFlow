/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { beforeEach, beforeEachProviders, describe, expect, it, inject } from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { MovementComponent } from './movement.component';

describe('Component: Movement', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MovementComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MovementComponent],
      (component: MovementComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MovementComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MovementComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-movement></app-movement>
  `,
  directives: [MovementComponent]
})
class MovementComponentTestController {
}