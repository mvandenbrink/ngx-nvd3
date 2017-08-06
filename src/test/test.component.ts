import { Component, DebugElement } from '@angular/core';

@Component({ template: `<div nvd3 [options]="options" [data]="data"></div>` })
/** experimentalDecorator */
export class TestComponent {
  public options: any;
  public data: any;
}
