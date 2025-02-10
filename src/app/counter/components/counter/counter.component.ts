import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola Counterrr</h1>
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="reduceBy(1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  public increaseBy( value: number): void {
    this.counter += value;
  }

  public reduceBy( value: number): void {
    this.counter -= value;
  }

  public resetCounter(): void {
    this.counter = 10;
  }

}
