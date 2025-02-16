import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select('counter');
  }


}
