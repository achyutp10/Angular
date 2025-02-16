import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../store/counter.actions';

// import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
  }
}
